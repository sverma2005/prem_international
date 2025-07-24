import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      title: 'Corporate Identity Solutions',
      description: 'Complete corporate identity packages including business cards, letterheads, and brand collateral for leading businesses in Punjab.',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      bgColor: 'from-yellow-900 via-black to-yellow-900',
      category: 'Corporate Solutions',
      year: '2024'
    },
    {
      id: 2,
      title: 'Educational Institution Projects',
      description: 'Comprehensive printing solutions for schools and colleges including prospectuses, certificates, and promotional materials.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      bgColor: 'from-yellow-900 via-black to-yellow-900',
      category: 'Educational Sector',
      year: '2024'
    },
    {
      id: 3,
      title: 'Manufacturing Industry Catalogs',
      description: 'High-quality product catalogs and technical documentation for manufacturing companies across North India.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      bgColor: 'from-yellow-900 via-black to-yellow-900',
      category: 'Industrial Printing',
      year: '2024'
    },
    {
      id: 4,
      title: 'Retail & E-commerce Packaging',
      description: 'Custom packaging solutions for retail businesses and e-commerce companies, enhancing brand visibility and product protection.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      bgColor: 'from-yellow-900 via-black to-yellow-900',
      category: 'Packaging Solutions',
      year: '2024'
    },
    {
      id: 5,
      title: 'Government & Public Sector',
      description: 'Specialized printing services for government departments, public institutions, and civic organizations with strict quality standards.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      bgColor: 'from-yellow-900 via-black to-yellow-900',
      category: 'Government Projects',
      year: '2024'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 relative overflow-hidden bg-black text-yellow-400"
    >
      <div className="relative h-screen">
        <AnimatePresence mode="wait" custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                nextSlide();
              } else if (swipe > swipeConfidenceThreshold) {
                prevSlide();
              }
            }}
            className={`absolute inset-0 bg-gradient-to-br ${portfolioItems[currentSlide].bgColor}`}
          >
            <div className="flex h-full">
              {/* Content Side */}
              <div className="flex-1 flex items-center justify-center p-8 lg:p-16 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="max-w-2xl text-yellow-300"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center space-x-4 mb-6"
                  >
                    <span className="px-4 py-2 bg-yellow-600/30 backdrop-blur-sm rounded-full text-sm font-medium text-yellow-200">
                      {portfolioItems[currentSlide].category}
                    </span>
                    <span className="text-yellow-500">
                      {portfolioItems[currentSlide].year}
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-5xl lg:text-7xl font-black mb-8 leading-tight text-yellow-400"
                  >
                    {portfolioItems[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl lg:text-2xl mb-10 text-yellow-200 leading-relaxed"
                  >
                    {portfolioItems[currentSlide].description}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(255, 234, 0, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              </div>

              {/* Image Side */}
              <div className="flex-1 relative overflow-hidden">
                <motion.img
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  src={portfolioItems[currentSlide].image}
                  alt={portfolioItems[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <motion.div
                  className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-yellow-400/20 backdrop-blur-sm text-yellow-300 p-4 rounded-full hover:bg-yellow-500/30 transition-all duration-300 z-20"
        >
          <ChevronLeft size={32} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-yellow-400/20 backdrop-blur-sm text-yellow-300 p-4 rounded-full hover:bg-yellow-500/30 transition-all duration-300 z-20"
        >
          <ChevronRight size={32} />
        </motion.button>

        {/* Slide Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute top-32 right-8 text-yellow-200 text-lg font-medium z-20"
        >
          <span className="text-3xl font-bold text-yellow-400">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className="text-yellow-500 mx-2">/</span>
          <span className="text-yellow-300">
            {String(portfolioItems.length).padStart(2, '0')}
          </span>
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-yellow-500/20 rounded-full z-20">
          <motion.div
            className="h-full bg-yellow-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / portfolioItems.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
