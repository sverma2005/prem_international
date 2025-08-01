import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AnimatedCards from '../components/AnimatedCards';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-black text-yellow-400 min-h-screen"
    >
      <HeroSection />
      <AnimatedCards />
    </motion.div>
  );
};

export default Home;
