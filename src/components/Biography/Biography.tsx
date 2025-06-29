import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BioCard from './BioCard';
import SkillsSection from './SkillsSection';

const Biography: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-electric-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
            }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about pushing the boundaries of web development through innovative 
            3D experiences and interactive design.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <BioCard />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <SkillsSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Biography;