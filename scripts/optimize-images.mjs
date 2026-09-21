/**
 * assets-src/ の元画像から、配信用の WebP（複数幅）と JPEG フォールバック、
 * および型付きのマニフェストを生成する。
 *
 *   pnpm images:build
 *
 * ビルド時プラグインにしていないのは、写真が年に数回しか変わらないのに
 * CI の毎ビルドで数十 MB を再エンコードすることになるため。生成物は
 * リポジトリにコミットし、一度目視で品質を確認したら以後は決定的に扱う。
 *
 * 出力先を src/ 配下にして ESM import させるのは、
 *   - Vite のコンテンツハッシュ付きファイル名になり長期キャッシュが効く
 *   - base（/my-profile-site/）が自動で付与される
 *   - 参照が切れたらビルドエラーになる
 * ため。public/ に置くとこのいずれも得られない。
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC_DIR = 'assets-src';
const OUT_DIR = path.join('src', 'assets', 'images', 'generated');
const WIDTHS = [640, 1280, 1920];
const FALLBACK_WIDTH = 1280;
const WEBP_QUALITY = 78;
const JPEG_QUALITY = 80;
/** ぼかしプレースホルダの幅。小さいほど data URI が短くなる */
const BLUR_WIDTH = 20;

/** 拡張子を除いたファイル名をそのままスラッグとして使う */
const slugOf = (file) => path.basename(file, path.extname(file));

async function build() {
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUT_DIR, { recursive: true });

  const files = (await fs.readdir(SRC_DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort();

  const entries = [];

  for (const file of files) {
    const slug = slugOf(file);
    const input = path.join(SRC_DIR, file);
    const image = sharp(input).rotate(); // EXIF の向きを反映してから加工する
    const { width: srcWidth, height: srcHeight } = await image.metadata();

    // 元画像より大きい出力は作らない
    const widths = WIDTHS.filter((w) => w <= srcWidth);
    if (widths.length === 0) widths.push(srcWidth);

    const variants = [];
    for (const w of widths) {
      const name = `${slug}-${w}.webp`;
      await sharp(input)
        .rotate()
        .resize({ width: w })
        .webp({ quality: WEBP_QUALITY })
        .toFile(path.join(OUT_DIR, name));
      variants.push({ width: w, name });
    }

    const fallbackWidth = Math.min(FALLBACK_WIDTH, srcWidth);
    const fallbackName = `${slug}-${fallbackWidth}.jpg`;
    await sharp(input)
      .rotate()
      .resize({ width: fallbackWidth })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(path.join(OUT_DIR, fallbackName));

    const blur = await sharp(input)
      .rotate()
      .resize({ width: BLUR_WIDTH })
      .webp({ quality: 40 })
      .toBuffer();

    entries.push({
      slug,
      variants,
      fallbackName,
      fallbackWidth,
      width: srcWidth,
      height: srcHeight,
      blurDataURL: `data:image/webp;base64,${blur.toString('base64')}`,
    });

    console.log(
      `${slug.padEnd(12)} ${srcWidth}x${srcHeight} -> ${variants.map((v) => v.width).join('/')} webp + ${fallbackWidth} jpg`,
    );
  }

  await writeManifest(entries);
  console.log(`\n${entries.length} 枚を ${OUT_DIR} に生成し、manifest.ts を更新しました。`);
}

async function writeManifest(entries) {
  const lines = [];
  lines.push(
    '// このファイルは scripts/optimize-images.mjs が生成します。手で編集しないでください。',
  );
  lines.push('// 再生成: pnpm images:build');
  lines.push('');

  for (const e of entries) {
    for (const v of e.variants) {
      lines.push(`import ${identifier(e.slug, v.width, 'webp')} from './${v.name}';`);
    }
    lines.push(`import ${identifier(e.slug, e.fallbackWidth, 'jpg')} from './${e.fallbackName}';`);
  }

  lines.push('');
  lines.push('export type GeneratedImage = {');
  lines.push('  /** srcSet が使えない場合に表示する JPEG */');
  lines.push('  src: string;');
  lines.push('  srcSet: string;');
  lines.push('  /** 元画像の実寸。width/height を出すことでレイアウトシフトを防ぐ */');
  lines.push('  width: number;');
  lines.push('  height: number;');
  lines.push('  /** 読み込み前に表示する極小のぼかし画像 */');
  lines.push('  blurDataURL: string;');
  lines.push('};');
  lines.push('');
  lines.push('export const images = {');
  for (const e of entries) {
    const srcSet = e.variants
      .map((v) => `\${${identifier(e.slug, v.width, 'webp')}} ${v.width}w`)
      .join(', ');
    lines.push(`  ${e.slug}: {`);
    lines.push(`    src: ${identifier(e.slug, e.fallbackWidth, 'jpg')},`);
    lines.push(`    srcSet: \`${srcSet}\`,`);
    lines.push(`    width: ${e.width},`);
    lines.push(`    height: ${e.height},`);
    lines.push(`    blurDataURL: '${e.blurDataURL}',`);
    lines.push('  },');
  }
  lines.push('} satisfies Record<string, GeneratedImage>;');
  lines.push('');

  await fs.writeFile(path.join(OUT_DIR, 'manifest.ts'), lines.join('\n'), 'utf8');
}

/** ファイル名から一意な識別子を作る（先頭が数字にならないよう接頭辞を付ける） */
function identifier(slug, width, ext) {
  const base = slug.replace(/[^a-zA-Z0-9]/g, '_');
  return `${base}_${width}_${ext}`;
}

await build();
