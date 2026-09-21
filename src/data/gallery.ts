import { images } from '../assets/images/generated/manifest';
import type { ja } from '../i18n/locales/ja';

/** ギャラリーの id は i18n の gallery.items のキーと一致している必要がある */
export type GalleryId = keyof typeof ja.gallery.items;

/**
 * 表示順。写真を差し替えるときは assets-src/ に置いて
 * `pnpm images:build` を実行し、ここと locale の gallery.items を直す。
 */
export const galleryItems = [
  { id: 'hikari', image: images.hikari },
  { id: 'sunset', image: images.sunset },
  { id: 'yurameki', image: images.yurameki },
  { id: 'ajisai', image: images.ajisai },
  { id: 'sakura', image: images.sakura },
  { id: 'amsterdam', image: images.amsterdam },
  { id: 'ramune', image: images.ramune },
  { id: 'redsun', image: images.redsun },
  { id: 'kiritori', image: images.kiritori },
] satisfies { id: GalleryId; image: (typeof images)[keyof typeof images] }[];
