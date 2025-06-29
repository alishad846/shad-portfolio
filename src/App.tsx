import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import LoadingSpinner from './components/ui/LoadingSpinner';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navigation />
      
      <Suspense fallback={<LoadingSpinner />}>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </motion.main>
      </Suspense>
    </div>
  );
}

export default App;