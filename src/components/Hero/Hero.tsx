import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import NeuralNetwork from './NeuralNetwork';
import HeroText from './HeroText';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* 3D Neural Network Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <NeuralNetwork />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <HeroText />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNext}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-500 to-cyber-600 rounded-full text-white font-medium shadow-lg hover:shadow-neon-500/25 transition-shadow duration-300"
            >
              Explore My Work
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-neon-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;