import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <motion.div
      variants={cardVariants}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ 
          y: -10,
          rotateX: 5,
          rotateY: 2,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl transform-gpu hover:border-neon-500/50 transition-colors duration-300"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center space-x-1 bg-gradient-to-r from-neon-500 to-cyber-600 px-3 py-1 rounded-full text-xs font-medium text-white">
              <Star size={12} />
              <span>Featured</span>
            </div>
          </div>
        )}

        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          
          {/* Overlay Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center space-x-4"
          >
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600 hover:border-neon-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;