/**
 * src/data/skills.ts が参照しているアイコンだけを devicon パッケージから取り込む。
 *
 *   pnpm icons:build
 *
 * devicon を CDN のアイコンフォントで読むと、23 個のアイコンのために
 * devicon.ttf 1.46MB + devicon.min.css 127KB を落とすことになる。
 * これはサイト内の全画像を合わせたより大きい。必要な SVG だけを
 * ローカルに持てば合計数十 KB で済み、外部 CDN への依存もなくなる。
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const DEVICON_DIR = path.join(path.dirname(require.resolve('devicon/devicon.min.css')), 'icons');

const SKILLS_FILE = path.join('src', 'data', 'skills.ts');
const OUT_DIR = path.join('src', 'assets', 'icons');

/** 'amazonwebservices-plain-wordmark' → ディレクトリ名 'amazonwebservices' */
function directoryOf(iconName) {
  const m = iconName.match(/^(.*?)-(?:plain|original|line)(?:-wordmark)?$/);
  if (!m) throw new Error(`アイコン名の形式が想定外です: ${iconName}`);
  return m[1];
}

async function build() {
  const source = await fs.readFile(SKILLS_FILE, 'utf8');
  const names = [...source.matchAll(/icon:\s*'([^']+)'/g)].map((m) => m[1]);
  const unique = [...new Set(names)].sort();

  if (unique.length === 0) throw new Error(`${SKILLS_FILE} からアイコン名を取得できませんでした`);

  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUT_DIR, { recursive: true });

  let total = 0;
  for (const name of unique) {
    const src = path.join(DEVICON_DIR, directoryOf(name), `${name}.svg`);
    const svg = await fs.readFile(src, 'utf8').catch(() => {
      throw new Error(`devicon に ${name}.svg がありません（${src}）`);
    });
    await fs.writeFile(path.join(OUT_DIR, `${name}.svg`), svg, 'utf8');
    total += Buffer.byteLength(svg);
  }

  const lines = [
    '// このファイルは scripts/build-skill-icons.mjs が生成します。手で編集しないでください。',
    '// 再生成: pnpm icons:build',
    '',
    ...unique.map((n) => `import ${identifier(n)} from './${n}.svg';`),
    '',
    'export const skillIcons = {',
    ...unique.map((n) => `  '${n}': ${identifier(n)},`),
    '} as const;',
    '',
    '/** src/data/skills.ts の icon はこの union のいずれかでなければならない */',
    'export type SkillIconName = keyof typeof skillIcons;',
    '',
  ];
  await fs.writeFile(path.join(OUT_DIR, 'index.ts'), lines.join('\n'), 'utf8');

  console.log(`${unique.length} 個のアイコンを ${OUT_DIR} に取り込みました（合計 ${(total / 1024).toFixed(1)} KB）`);
}

function identifier(name) {
  return 'icon_' + name.replace(/[^a-zA-Z0-9]/g, '_');
}

await build();
