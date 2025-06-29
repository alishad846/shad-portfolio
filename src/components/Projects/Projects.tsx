import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import { Project } from '../../types/project';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Predictive Maintenance using Real-Time Sensor Data',
      description: 'Built an advanced machine learning model to predict equipment failure with 93% accuracy using real-time sensor data and predictive analytics.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'IoT'],
      category: 'ml',
      demoUrl: '#',
      codeUrl: 'https://github.com/alishad846/predictive-machine',
      featured: true,
    },
    {
      id: 2,
      title: 'Resume Parser with NER',
      description: 'Developed an intelligent resume parsing system using Named Entity Recognition to extract structured information from resumes automatically.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'SpaCy', 'Streamlit', 'Heroku', 'NLP'],
      category: 'ml',
      demoUrl: '#',
      codeUrl: 'https://github.com/alishad846/Resume-Data-Extraction',
      featured: true,
    },
    {
      id: 3,
      title: 'YouTube Data Harvesting & Analysis',
      description: 'Comprehensive data analysis platform for YouTube channels and videos with interactive visualizations and insights dashboard.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['MongoDB', 'Streamlit', 'YouTube API', 'Python', 'Data Viz'],
      category: 'data',
      demoUrl: '#',
      codeUrl: 'https://github.com/alishad846/Deep_Youtube_Analysis',
      featured: false,
    },
    {
      id: 4,
      title: 'A Square Fitness - Gym Website',
      description: 'Modern responsive website for a personal training gym featuring WhatsApp integration, service showcase, and no-subscription model.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'web',
      demoUrl: '#',
      codeUrl: 'https://github.com/alishad846/A-Square-Fitness-gym-website',
      featured: false,
    },
    {
      id: 5,
      title: 'ProctoCode - Online Compiler',
      description: 'Real-time coding and testing platform with motion/sound detection for secure online assessments and progress tracking.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB'],
      category: 'web',
      demoUrl: '#',
      codeUrl: 'https://github.com/alishad846/ProctoCode---Online-Compiler',
      featured: true,
    },
    {
      id: 6,
      title: 'Customer Churn Prediction Model',
      description: 'Advanced machine learning model for predicting customer churn with 90% accuracy, developed during internship at Atharvo.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'ML Pipeline'],
      category: 'ml',
      demoUrl: '#',
      codeUrl: 'https://github.com/alishad846/Telco_customer_churn',
      featured: true,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative data science projects, ML models, and web applications
          </p>
        </motion.div>

        <ProjectFilter currentFilter={filter} onFilterChange={setFilter} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;