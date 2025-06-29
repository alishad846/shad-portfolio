import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Lightbulb } from 'lucide-react';

const BioCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div className="perspective-1000">
      <motion.div
        className="relative w-full h-96 cursor-pointer preserve-3d"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <motion.div
          variants={cardVariants}
          animate={isFlipped ? "back" : "front"}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl"
          style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-electric-400 to-purple-500 rounded-full mb-6 flex items-center justify-center">
              <img
                src=''
                alt="Alex Rivera"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Alex Rivera</h3>
            <p className="text-gray-300 leading-relaxed">
              A creative developer with 5+ years of experience crafting immersive digital experiences. 
              Specializing in React, Three.js, and modern web technologies.
            </p>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          variants={cardVariants}
          animate={isFlipped ? "front" : "back"}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-electric-500 to-purple-600 rounded-2xl p-8 shadow-2xl"
          style={{ transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)' }}
        >
          <div className="h-full flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <Code className="text-white w-8 h-8" />
              <div>
                <h4 className="text-white font-semibold">Development</h4>
                <p className="text-gray-100 text-sm">Full-stack web applications</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Palette className="text-white w-8 h-8" />
              <div>
                <h4 className="text-white font-semibold">Design</h4>
                <p className="text-gray-100 text-sm">UI/UX and 3D graphics</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Lightbulb className="text-white w-8 h-8" />
              <div>
                <h4 className="text-white font-semibold">Innovation</h4>
                <p className="text-gray-100 text-sm">Creative problem solving</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BioCard;