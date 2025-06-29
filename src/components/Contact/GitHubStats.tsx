import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Code } from 'lucide-react';

const GitHubStats: React.FC = () => {
  // Mock GitHub stats - in a real implementation, you'd fetch this from GitHub API
  const stats = [
    { label: 'Public Repositories', value: '25+', icon: Code },
    { label: 'Total Stars', value: '150+', icon: Star },
    { label: 'Forks', value: '45+', icon: GitFork },
    { label: 'Contributions', value: '500+', icon: Github },
  ];

  const languages = [
    { name: 'Python', percentage: 45, color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 25, color: 'bg-yellow-500' },
    { name: 'Java', percentage: 20, color: 'bg-red-500' },
    { name: 'Other', percentage: 10, color: 'bg-gray-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-gradient-to-r from-neon-500 to-cyber-600 rounded-lg">
          <Github className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">GitHub Statistics</h3>
          <p className="text-gray-400">Open source contributions and activity</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Stats Grid */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">Repository Stats</h4>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700/50 p-4 rounded-lg text-center border border-gray-600 hover:border-neon-500/50 transition-colors"
                >
                  <Icon className="text-neon-400 mx-auto mb-2" size={20} />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Language Distribution */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">Top Languages</h4>
          <div className="space-y-3">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">{lang.name}</span>
                  <span className="text-gray-400 text-sm">{lang.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.percentage}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                    className={`h-full ${lang.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* GitHub Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-8 text-center"
      >
        <motion.a
          href="https://github.com/alishad846"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-500 to-cyber-600 text-white font-medium rounded-lg shadow-lg hover:shadow-neon-500/25 transition-shadow duration-300"
        >
          <Github size={20} />
          <span>View GitHub Profile</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default GitHubStats;