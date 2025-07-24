import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Palette, Award, Zap, Globe, Shield } from 'lucide-react';

const AnimatedCards = () => {
  const cards = [
    {
      icon: Printer,
      title: 'Name Plates & Signage',
      description: 'Premium stainless steel, brass, and aluminum name plates. LED sign boards, letter boards, and professional signage solutions.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Palette,
      title: 'Stickers & Labels',
      description: 'Agriculture stickers, machine labels, vinyl stickers, barcode labels, and specialized printing for all industrial applications.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Award,
      title: 'Corporate Gifts & Merchandise',
      description: 'Promotional keychains, corporate pens, power bank diaries, leather diaries, and branded merchandise for businesses.',
      gradient: 'from-orange-500 to-red-500',
      delay: 0.3
    },
    {
      icon: Zap,
      title: 'Digital & Translation Services',
      description: 'Hindi, Punjabi, and English translation services. Digital marketing content creation and professional content development.',
      gradient: 'from-yellow-500 to-orange-500',
      delay: 0.4
    },
    {
      icon: Globe,
      title: 'Training & Education',
      description: 'Spoken English classes, online IELTS coaching, and professional development programs for individuals and businesses.',
      gradient: 'from-green-500 to-teal-500',
      delay: 0.5
    },
    {
      icon: Shield,
      title: 'Large Format Printing',
      description: 'Flex boards, hoarding boards, promotional flags, advertising brochures, and sun board printing for outdoor advertising.',
      gradient: 'from-indigo-500 to-purple-500',
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="animated-cards" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Prem International
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            One-Stop Printing & Branding Hub with premium materials, long-lasting prints, and affordable bulk pricing. 
            Trusted by businesses and individuals across India with years of manufacturing experience from Ludhiana, Punjab.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <card.icon className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="flex items-center text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <span>Learn More</span>
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedCards;