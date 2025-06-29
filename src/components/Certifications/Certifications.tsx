import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University',
      score: '99%',
      year: '2024',
      description: 'Comprehensive specialization covering supervised learning, unsupervised learning, and best practices in machine learning.',
      skills: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'TensorFlow'],
      featured: true,
      color: 'from-blue-500 to-blue-700',
      link: 'https://coursera.org/share/74104d364f1a544d12c79db9650b49de'
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.ai',
      score: '98%',
      year: '2024',
      description: 'Advanced deep learning concepts including CNNs, RNNs, and sequence models for various applications.',
      skills: ['Deep Learning', 'CNNs', 'RNNs', 'Computer Vision', 'NLP'],
      featured: true,
      color: 'from-purple-500 to-purple-700',
      link: 'https://coursera.org/share/36f6c54341cb221d3d7fe526e4bccc9b'
    },
    {
      title: 'Data Analyst with Python',
      issuer: 'NPTEL Swayam',
      score: '65%',
      year: '2024',
      description: 'Comprehensive course on data analysis techniques using Python and its ecosystem.',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis', 'Visualization'],
      featured: false,
      color: 'from-green-500 to-green-700',
      link: 'https://drive.google.com/file/d/1k3_JxVJOOjfe-acLPN1tWXNJeV82ez_m/view?usp=drive_link'
    },
    {
      title: 'AI in Marketing',
      issuer: 'NPTEL Swayam',
      score: '65%',
      year: '2024',
      description: 'Application of artificial intelligence techniques in marketing and customer analytics.',
      skills: ['AI Applications', 'Marketing Analytics', 'Customer Insights'],
      featured: false,
      color: 'from-orange-500 to-orange-700',
      link: 'https://drive.google.com/file/d/1XV8ZCTC6-_wKDFpLa6XUe8zD8UDZG46E/view?usp=drive_link'
    },
    {
      title: 'Database Management Systems',
      issuer: 'NPTEL Swayam',
      score: '65%',
      year: '2024',
      description: 'Fundamentals of database design, SQL, and database management principles.',
      skills: ['SQL', 'Database Design', 'DBMS', 'Data Modeling'],
      featured: false,
      color: 'from-red-500 to-red-700',
      link: 'https://drive.google.com/file/d/1qw4c_vfotVsbBbuIqRa8Oq4oLWJ8lk7P/view?usp=drive_link'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
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
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: cert.featured ? '0 20px 40px rgba(20, 184, 166, 0.2)' : '0 20px 40px rgba(0, 0, 0, 0.2)'
              }}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl hover:border-neon-500/50 transition-all duration-300 ${
                cert.featured ? 'ring-2 ring-neon-500/20' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-lg`}>
                  <Award className="text-white" size={24} />
                </div>
                {cert.featured && (
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-neon-500 to-cyber-600 px-2 py-1 rounded-full text-xs font-medium text-white">
                    <Star size={12} />
                    <span>Top Score</span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-neon-400 font-medium mb-2">{cert.issuer}</p>

              <div className="flex items-center space-x-4 mb-4 text-gray-300">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span className="text-sm">{cert.year}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star size={14} />
                  <span className="text-sm font-medium text-neon-400">{cert.score}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Skills Covered</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                <span className="text-sm">View Certificate</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
