import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../images/logo.png'; // Replaced Printer icon with actual logo

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative bg-gray-900 dark:bg-black text-white py-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-xl overflow-hidden bg-white p-1 shadow-lg"
              >
                <img src={logo} alt="Prem International Logo" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] via-white to-[#A9A9A9]"> PREM INTERNATIONAL</h3>

            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Owned and operated by Mr. Manu Verma, we are proud manufacturers and service providers of printing, 
              branding, signage, merchandising, and advertising products – all from Ludhiana, Punjab.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 group"
              >
                <MapPin size={20} className="text-blue-400 mt-1 group-hover:text-blue-300 transition-colors" />
                <div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    Ludhiana<br />
                    Punjab, India
                  </p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <Mail size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                <a 
                  href="mailto:info@preminternational.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@preminternational.com
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <Phone size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                <a 
                  href="tel:+918360198383" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 83601-98383
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'Products & Services', 'Portfolio', 'About', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-white transition-all duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Prem International. All rights reserved. | Established 2009 | Monday – Saturday | 9 AM – 7 PM
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
