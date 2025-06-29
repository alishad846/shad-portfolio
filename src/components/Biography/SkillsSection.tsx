import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const skills = [
    { name: 'React & TypeScript', level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'Three.js & WebGL', level: 88, color: 'from-green-400 to-green-600' },
    { name: 'Node.js & APIs', level: 85, color: 'from-yellow-400 to-yellow-600' },
    { name: '3D Modeling & Animation', level: 82, color: 'from-purple-400 to-purple-600' },
    { name: 'UI/UX Design', level: 78, color: 'from-pink-400 to-pink-600' },
  ];

  return (
    <div ref={ref} className="space-y-8">
      <h3 className="text-3xl font-bold text-white mb-8">Technical Expertise</h3>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 font-medium">{skill.name}</span>
              <span className="text-gray-400 text-sm">{skill.level}%</span>
            </div>
            
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
              >
                <div className="absolute inset-0 bg-white opacity-20 animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl border border-gray-600"
      >
        <h4 className="text-xl font-semibold text-white mb-3">Current Focus</h4>
        <p className="text-gray-300 leading-relaxed">
          Exploring advanced WebXR technologies and AI-powered creative tools to push 
          the boundaries of interactive web experiences.
        </p>
      </motion.div>
    </div>
  );
};

export default SkillsSection;