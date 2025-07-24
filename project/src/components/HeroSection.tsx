import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const scrollToCards = () => {
    const cardsSection = document.getElementById('animated-cards');
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-yellow-400">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern printing facility"
          className="w-full h-full object-cover opacity-10"
        />
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
        {/* Removed the “Industry Leading Since 2009” box */}

        {/* Sliding Text Animation */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="block"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              PREM
            </motion.span>
            <motion.span
              className="block text-yellow-400"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              INTERNATIONAL
            </motion.span>
          </motion.h1>
        </div>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-12 text-white max-w-5xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Welcome to <strong className="text-yellow-300">Prem International</strong> – Excellence in Print & Advertising. 
          <br />
          we are proud manufacturers and service providers of 
          <span className="block mt-2 text-yellow-300 font-medium">printing, branding, signage, merchandising, and advertising products – all from Ludhiana, Punjab.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.button
            onClick={scrollToCards}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(253, 224, 71, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-yellow-400 text-black px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 overflow-hidden"
          >
            <span className="relative flex items-center space-x-3">
              <span>Explore Our Services</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group border-2 border-yellow-400 text-yellow-200 hover:border-yellow-300 px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 backdrop-blur-sm"
          >
            <span className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Play size={20} />
              </motion.div>
              <span>Call: +91 83601-98383</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
