import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { trackSectionView } from '../utils/analytics';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const images = t('gallery.items', { returnObjects: true });

  return (
    <motion.section
      id="gallery"
      viewport={{ once: true }}
      onViewportEnter={() => trackSectionView('gallery')}
      className="min-h-screen pt-20 pb-16 px-4 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          {t('gallery.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
