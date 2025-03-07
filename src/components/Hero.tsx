import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=2080")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4"
      >
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">Software Engineer & Creative Developer</p>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-gray-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;