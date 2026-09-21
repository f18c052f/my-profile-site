import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { galleryItems } from '../data/gallery';
import Container from './ui/Container';
import Lightbox from './ui/Lightbox';
import ResponsiveImage from './ui/ResponsiveImage';
import { revealProps } from './ui/reveal';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const slides = galleryItems.map((item) => ({
    id: item.id,
    image: item.image,
    title: t(`gallery.items.${item.id}.title`),
    alt: t(`gallery.items.${item.id}.alt`),
  }));

  return (
    <section id="gallery" className="bg-bg py-16 md:py-24">
      <Container wide>
        <motion.h2
          {...revealProps}
          className="mb-8 text-center text-3xl font-bold text-fg md:mb-12"
        >
          {t('gallery.title')}
        </motion.h2>

        <ul className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.li {...revealProps} key={item.id} transition={{ delay: index * 0.05 }}>
              {/*
                以前は div に hover 効果だけを付けており、キーボードでは
                まったく操作できなかった。button にすることで Tab で到達し
                Enter / Space で開けるようになる。
              */}
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={t('gallery.lightbox.open', { title: slides[index].title })}
                className="group relative block aspect-square w-full overflow-hidden rounded-lg shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:aspect-video"
              >
                <ResponsiveImage
                  image={item.image}
                  alt={slides[index].alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40 group-focus-visible:bg-black/40">
                  <span className="px-2 text-center text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:text-lg">
                    {slides[index].title}
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </Container>

      <Lightbox
        slides={slides}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
};

export default Gallery;
