import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsGrid: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'ML/AI Frameworks',
      skills: ['TensorFlow', 'Scikit-learn', 'Keras', 'OpenCV', 'PyTorch'],
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Web Development',
      skills: ['React', 'Node.js', 'HTML', 'CSS', 'Express'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Tools & Databases',
      skills: ['Git', 'MongoDB', 'Streamlit', 'Heroku', 'DBMS'],
      color: 'from-orange-500 to-orange-700'
    },
    {
      title: 'ML Concepts',
      skills: ['NLP', 'Deep Learning', 'Reinforcement Learning', 'Predictive Modeling', 'Computer Vision'],
      color: 'from-pink-500 to-pink-700'
    }
  ];

  return (
    <div ref={ref} className="space-y-8">
      <h3 className="text-3xl font-bold text-white mb-8">Technical Expertise</h3>
      
      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700"
          >
            <h4 className="text-xl font-semibold text-white mb-4">{category.title}</h4>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white text-sm rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow cursor-default`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;