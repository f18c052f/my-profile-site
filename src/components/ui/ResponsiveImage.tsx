import React from 'react';
import type { GeneratedImage } from '../../assets/images/generated/manifest';

type Props = {
  image: GeneratedImage;
  alt: string;
  /** レイアウト上の表示幅をブラウザに伝える。srcSet の選択精度に直結する */
  sizes: string;
  className?: string;
  /** ファーストビューの画像に指定する。LCP 要素を遅延読み込みしてはいけない */
  priority?: boolean;
};

/**
 * 生成済みの WebP を srcSet で配信する img。
 * width / height を必ず出力するのでレイアウトシフトが起きない。
 */
const ResponsiveImage: React.FC<Props> = ({ image, alt, sizes, className, priority = false }) => {
  // React 18 は camelCase の fetchPriority を認識せず DOM 警告を出すため、
  // 小文字の属性名で渡す（React 19 に上げたら fetchPriority プロパティに戻せる）
  const priorityAttrs: Record<string, string> = priority ? { fetchpriority: 'high' } : {};

  return (
    <img
      {...priorityAttrs}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      style={{
        backgroundImage: `url(${image.blurDataURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
};

export default ResponsiveImage;
