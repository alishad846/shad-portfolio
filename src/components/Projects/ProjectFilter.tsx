import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Brain, BarChart3, Monitor } from 'lucide-react';

interface ProjectFilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All Projects', icon: Grid },
    { id: 'ml', label: 'Machine Learning', icon: Brain },
    { id: 'data', label: 'Data Science', icon: BarChart3 },
    { id: 'web', label: 'Web Development', icon: Monitor },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => {
        const Icon = filter.icon;
        const isActive = currentFilter === filter.id;
        
        return (
          <motion.button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-neon-500 to-cyber-600 text-white shadow-lg shadow-neon-500/25'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-neon-500/50'
            }`}
          >
            <Icon size={18} />
            <span>{filter.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;