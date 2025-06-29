import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import ProfileCard from './ProfileCard';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Jaipur, India' },
    { icon: Phone, label: 'Phone', value: '+91 80005926515', href: 'tel:+918000592651' },
    { icon: Mail, label: 'Email', value: 'alishad846@gmail.com', href: 'mailto:alishad846@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/shadali', href: 'https://www.linkedin.com/in/shad-ali-099a82145' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging data science and AI to solve complex real-world problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProfileCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
Analytical and results-oriented Data Scientist with hands-on experience in machine learning, deep learning, and data analytics. Proficient in Python, SQL, and leading ML frameworks like TensorFlow, Scikit-learn, and Keras. Adept at building predictive models, natural language processing systems, and scalable AI-driven applications to solve complex, real-world challenges.



              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-4 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="p-2 bg-gradient-to-r from-neon-500 to-cyber-600 rounded-lg">
                        <Icon className="text-white" size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-white font-medium hover:text-neon-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-white font-medium">{info.value}</span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;