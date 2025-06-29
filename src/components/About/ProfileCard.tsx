import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const ProfileCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

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
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-neon-400 to-cyber-500 rounded-full mb-6 flex items-center justify-center overflow-hidden">
              <img
                src="shad.jpeg"
                alt="Shad Ali"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Shad Ali</h3>
            <p className="text-neon-400 font-medium mb-4">Data Scientist & AI Developer</p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Passionate about transforming data into actionable insights and building 
              intelligent systems that make a difference.
            </p>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-neon-500 to-cyber-600 rounded-2xl p-8 shadow-2xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
            <FileText className="text-white w-16 h-16 mb-4" />
            <h4 className="text-2xl font-bold text-white mb-4">Resume</h4>
            <p className="text-gray-100 text-sm mb-6">
              Download my complete resume to learn more about my experience, 
              skills, and achievements in data science and AI development.
            </p>
<motion.a
  href="https://drive.google.com/file/d/1UdED1OX-6v4j7c1VC4OWd6HH-2_zfno4/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
>
  <Download size={20} />
  <span>Download Resume</span>
</motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;