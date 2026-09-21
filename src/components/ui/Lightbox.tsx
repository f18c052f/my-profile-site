import React, { useCallback, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { GeneratedImage } from '../../assets/images/generated/manifest';
import ResponsiveImage from './ResponsiveImage';

export type LightboxSlide = {
  id: string;
  image: GeneratedImage;
  title: string;
  alt: string;
};

type Props = {
  slides: LightboxSlide[];
  /** null のとき閉じている */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

/**
 * ネイティブの dialog を使う。showModal() がフォーカストラップ、Esc での
 * 閉じる、背景の不活性化、閉じたときに起動元へフォーカスを戻す処理まで
 * ブラウザ側で面倒を見てくれるため、自前実装で一番間違えやすい部分が消える。
 */
const Lightbox: React.FC<Props> = ({ slides, index, onClose, onNavigate }) => {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = index !== null;

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      onNavigate((index + delta + slides.length) % slides.length);
    },
    [index, onNavigate, slides.length],
  );

  // dialog の開閉は命令的 API なので、React の状態と同期させる
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // dialog のモーダル表示は背景のスクロールを止めないので自前で止める
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [isOpen]);

  // 前後の画像を先読みしておく
  useEffect(() => {
    if (index === null) return;
    for (const delta of [-1, 1]) {
      const next = slides[(index + delta + slides.length) % slides.length];
      const img = new Image();
      img.srcset = next.image.srcSet;
      img.src = next.image.src;
    }
  }, [index, slides]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, go]);

  // 背景（dialog 自身）のクリックで閉じる。JSX の onClick ではなく
  // 命令的に登録するのは、dialog が非インタラクティブ要素と見なされ
  // jsx-a11y に引っかかるため。キーボードにはネイティブの Esc と
  // 明示的な閉じるボタンがあるので操作手段は揃っている。
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;
    const onBackdropClick = (e: MouseEvent) => {
      if (e.target === dialog) onClose();
    };
    dialog.addEventListener('click', onBackdropClick);
    return () => dialog.removeEventListener('click', onBackdropClick);
  }, [isOpen, onClose]);

  const current = index === null ? null : slides[index];

  const navButton =
    'rounded-full bg-white/10 p-2 text-white hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      aria-label={current?.title}
      // 暗幕は dialog 自身にも持たせる。::backdrop だけに頼ると
      // 実装差やスクリーンショットで欠けることがあるため
      className="max-h-none max-w-none bg-black/85 p-0 backdrop:bg-black/85"
    >
      {index !== null && current && (
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 p-4">
          <div className="flex w-full max-w-5xl items-center justify-between text-white">
            <p className="text-sm">
              {t('gallery.lightbox.position', { current: index + 1, total: slides.length })}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label={t('gallery.lightbox.close')}
              className={navButton}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <ResponsiveImage
            image={current.image}
            alt={current.alt}
            sizes="100vw"
            priority
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />

          <p className="text-center text-lg font-medium text-white">{current.title}</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={t('gallery.lightbox.previous')}
              className={navButton}
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={t('gallery.lightbox.next')}
              className={navButton}
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default Lightbox;
