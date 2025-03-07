import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      title: '山の風景',
    },
    {
      url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      title: '海の夕暮れ',
    },
    {
      url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad',
      title: '都市の夜景',
    },
    {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: '森の小道',
    },
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      title: '緑の森',
    },
    {
      url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8',
      title: '夕暮れの空',
    },
  ];

  return (
    <section id="gallery" className="min-h-screen pt-20 pb-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
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
    </section>
  );
};

export default Gallery;