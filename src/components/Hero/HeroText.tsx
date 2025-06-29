import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroText: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const fullText = 'Data Scientist | AI Developer | Problem Solver';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, fullText, isComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto"
    >
      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Shad
        </span>
        <br />
        <span className="bg-gradient-to-r from-neon-400 to-cyber-500 bg-clip-text text-transparent">
          Ali
        </span>
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 font-mono h-12 flex items-center justify-center"
      >
        <span className="flex items-center">
          {displayText}
          <motion.span
            variants={cursorVariants}
            animate={isComplete ? "blinking" : ""}
            className="inline-block w-0.5 h-8 bg-neon-400 ml-1"
          />
        </span>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
      >
        Results-driven Data Scientist skilled in machine learning, deep learning, and analytics. 
        Proficient in Python, SQL, and modern ML frameworks. Experienced in building predictive models, 
        NLP systems, and scalable applications to solve real-world problems.
      </motion.p>
    </motion.div>
  );
};

export default HeroText;