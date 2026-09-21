import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { galleryItems } from '../data/gallery';
import Container from './ui/Container';
import ResponsiveImage from './ui/ResponsiveImage';
import { revealProps } from './ui/reveal';

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="bg-bg py-16 md:py-24">
      <Container wide>
        <motion.h2
          {...revealProps}
          className="mb-8 text-center text-3xl font-bold text-fg md:mb-12"
        >
          {t('gallery.title')}
        </motion.h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              {...revealProps}
              key={item.id}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg md:aspect-video"
            >
              <ResponsiveImage
                image={item.image}
                alt={t(`gallery.items.${item.id}.alt`)}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                <p className="px-2 text-center text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:text-lg">
                  {t(`gallery.items.${item.id}.title`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
