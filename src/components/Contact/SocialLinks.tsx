import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/alishad846',
      color: 'hover:text-gray-400',
      description: 'View my code repositories'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/shad-ali-099a82145',
      color: 'hover:text-blue-400',
      description: 'Connect professionally'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/918000592651',
      color: 'hover:text-green-400',
      description: 'Quick chat on WhatsApp'
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alishad846@gmail.com',
      href: 'mailto:alishad846@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 80005926515',
      href: 'tel:+918000592651',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, India',
      href: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
        
        {contactInfo.map((info) => {
          const Icon = info.icon;
          return (
            <motion.div
              key={info.label}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div className="p-3 bg-gradient-to-r from-neon-500 to-cyber-600 rounded-lg">
                <Icon className="text-white" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">{info.label}</p>
                <a
                  href={info.href}
                  className="text-white font-medium hover:text-neon-400 transition-colors"
                >
                  {info.value}
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <h4 className="text-xl font-semibold text-white">Connect Online</h4>
        
        <div className="space-y-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ 
                  x: 10,
                  boxShadow: '0 10px 25px rgba(20, 184, 166, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-between p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-neon-500 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <Icon className={`text-gray-400 group-hover:text-white transition-colors ${social.color}`} size={24} />
                  <div>
                    <span className="text-white font-medium group-hover:text-neon-400 transition-colors">
                      {social.name}
                    </span>
                    <p className="text-sm text-gray-400">{social.description}</p>
                  </div>
                </div>
                <div className="w-2 h-2 bg-neon-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl border border-gray-600"
      >
        <h4 className="text-lg font-semibold text-white mb-3">Let's Collaborate</h4>
        <p className="text-gray-300 leading-relaxed">
          Whether you're looking to build intelligent data solutions, develop ML models, 
          or explore innovative AI applications, I'm excited to discuss how we can work together 
          to bring your ideas to life.
        </p>
      </motion.div>
    </div>
  );
};

export default SocialLinks;