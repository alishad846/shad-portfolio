import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, TrendingUp, Users } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Data Science & Development Intern',
      company: 'Celebal Technologies',
      period: 'May 2025 – July 2025',
      type: 'Internship',
      achievements: [
        'Worked on real-world ML workflows from data preprocessing to model deployment and evaluation',
        'Implemented supervised learning models for classification and regression with performance optimization',
        'Conducted hyperparameter tuning using GridSearchCV and RandomizedSearchCV',
        'Built visualizations and dashboards using Matplotlib and Seaborn for effective insight communication',
        'Developed automated data pipelines to streamline preprocessing and feature engineering',
        'Collaborated with senior engineers on enterprise-grade AI and analytics solutions'
      ],
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'GridSearchCV', 'ML Pipelines'],
      impact: 'Enterprise AI Solutions'
    },
    {
      title: 'Data Science Intern',
      company: 'Atharvo',
      period: '2024',
      type: 'Internship',
      achievements: [
        'Built customer churn prediction model with 90% accuracy',
        'Developed end-to-end ML pipeline using Python + TensorFlow',
        'Collaborated with cross-functional teams to derive business insights',
        'Implemented data preprocessing and feature engineering techniques'
      ],
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Data Analysis'],
      impact: '90% Model Accuracy'
    },
    {
      title: 'Software Developer Intern',
      company: 'Yatharth Education Services',
      period: '2023',
      type: 'Internship',
      achievements: [
        'Developed scalable Java + Spring Boot application',
        'Improved application response time by 25%',
        'Optimized server-side logic and database queries',
        'Participated in code reviews and agile development processes'
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Git'],
      impact: '25% Performance Improvement'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
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
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional journey in data science and software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-400 to-cyber-500 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-neon-400 to-cyber-500 rounded-full border-4 border-gray-900 hidden lg:block"></div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="lg:ml-20 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl hover:border-neon-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 bg-gradient-to-r from-neon-500 to-cyber-600 rounded-lg">
                          <Briefcase className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                          <p className="text-neon-400 font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6 mb-6 text-gray-300">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users size={16} />
                          <span>{exp.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp size={16} />
                          <span className="text-neon-400 font-medium">{exp.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                          transition={{ delay: index * 0.2 + achIndex * 0.1, duration: 0.4 }}
                          className="flex items-start space-x-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-neon-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: index * 0.2 + techIndex * 0.05, duration: 0.4 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-neon-500 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;