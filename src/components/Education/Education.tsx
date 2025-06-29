import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const educationData = [
    {
      institution: 'Poornima Institute of Engineering and Technology',
      degree: 'B.Tech in Computer Science & AI',
      gpa: '8.65',
      period: 'Expected 2026',
      thesis: 'Technological Advancements within the Current Industry (AI Focus)',
      description: 'Specialized in Artificial Intelligence and Machine Learning with focus on practical applications and industry-relevant projects.',
      achievements: ['Dean\'s List', 'AI Research Project', 'Technical Society Member']
    },
    {
      institution: 'Govt. Fort Sr. Sec. School, Bikaner',
      degree: 'Senior Secondary (Mathematics)',
      gpa: '91%',
      period: '2020–2021',
      description: 'Strong foundation in Mathematics and Science with focus on analytical thinking and problem-solving skills.',
      achievements: ['Mathematics Excellence Award', 'Science Olympiad Participant']
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-400 to-cyber-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Academic journey and continuous learning in technology and data science
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl hover:border-neon-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-neon-500 to-cyber-600 rounded-lg">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                      <p className="text-neon-400 font-medium">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mb-4 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award size={16} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {edu.thesis && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Thesis</h4>
                      <p className="text-gray-300 italic">"{edu.thesis}"</p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.span
                          key={achievement}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: index * 0.2 + achIndex * 0.1, duration: 0.4 }}
                          className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600"
                        >
                          {achievement}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;