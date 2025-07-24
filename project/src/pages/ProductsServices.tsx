import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductsServices = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    {
      id: 1,
      icon: '🪪',
      title: 'Name Plates',
      description: 'Premium quality name plates for homes, offices, and hotels in various materials',
      gradient: 'from-yellow-500 to-orange-500',
      images: [
        'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'Stainless Steel Name Plates',
        'Brass House Name Plates',
        'Aluminum Name Plates',
        'Printed Cooler Name Plate Services',
        'SS Hotel Sign Plates'
      ]
    },
    {
      id: 2,
      icon: '🧷',
      title: 'Printed Stickers',
      description: 'High-quality printed stickers for agriculture, machinery, and industrial applications',
      gradient: 'from-orange-500 to-red-500',
      images: [
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'Agriculture Sticker Services',
        'Straw Reaper Vinyl Stickers',
        'Machine Labels',
        'PC Sticker Label Printing',
        'Water Tank Sticker Printing'
      ]
    },
    {
      id: 3,
      icon: '🏷️',
      title: 'Label Stickers',
      description: 'Specialized label stickers for various industrial and commercial applications',
      gradient: 'from-blue-500 to-cyan-500',
      images: [
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'Screen Print Stickers',
        'Oven Label Stickers',
        'General Label & Sticker Printing',
        'Dome Sticker Labels'
      ]
    },
    {
      id: 4,
      icon: '🔑',
      title: 'Key Chains',
      description: 'Promotional keychains in various materials for corporate branding and marketing',
      gradient: 'from-amber-600 to-yellow-500',
      images: [
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'Brown Promotional Leather Keychains',
        'Silicone Promotional Keychains',
        'LED & Leather Keychain Services'
      ]
    },
    {
      id: 5,
      icon: '🚩',
      title: 'Sign Boards',
      description: 'Professional signage solutions including LED and flex boards for businesses',
      gradient: 'from-green-500 to-teal-500',
      images: [
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'Flex LED Sign Boards',
        'LED Logo Sign Board Services',
        'Mirror Vinyl Boards',
        'Graphic Design Services'
      ]
    },
    {
      id: 6,
      icon: '🔠',
      title: 'Letter Boards',
      description: 'Premium LED letter boards and ACP letter displays for professional signage',
      gradient: 'from-purple-500 to-pink-500',
      images: [
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'ACP Letter Boards',
        'Golden Steel Letter LED Boards',
        'LED Letter Boards'
      ]
    },
    {
      id: 7,
      icon: '🖊️',
      title: 'Promotional Pens',
      description: 'Corporate promotional pens and writing instruments for brand marketing',
      gradient: 'from-red-500 to-pink-500',
      images: [
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'Printed Corporate Promotional Pens',
        'Corporate Metal Ball Pens'
      ]
    },
    {
      id: 8,
      icon: '🧲',
      title: 'Vinyl Stickers',
      description: 'Custom vinyl stickers and printing services for various applications',
      gradient: 'from-yellow-500 to-orange-500',
      images: [
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'Super Seeder Vinyl Stickers',
        'Custom Vinyl Printing Services'
      ]
    },
    {
      id: 9,
      icon: '📐',
      title: 'Flex Boards & More',
      description: 'Large format printing solutions including flex boards and promotional materials',
      gradient: 'from-blue-500 to-purple-500',
      images: [
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'Printed Flex Boards',
        'LED Hoarding Boards',
        'Promotional Flag Printing',
        'Advertising Brochure Printing'
      ]
    },
    {
      id: 10,
      icon: '🌐',
      title: 'Digital Services',
      description: 'Comprehensive digital solutions including translation and content services',
      gradient: 'from-indigo-500 to-blue-500',
      images: [
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'Hindi Language Translation',
        'Punjabi Language Translation',
        'English Language Translation',
        'Digital Marketing Content Creation',
        'Content Development Services'
      ]
    },
    {
      id: 11,
      icon: '🎓',
      title: 'Corporate Gifts & Training',
      description: 'Corporate gifts, diaries, and professional training services',
      gradient: 'from-teal-500 to-green-500',
      images: [
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'Power Bank Diaries',
        'Promotional Printed Diaries',
        'Leather Diaries',
        'Spoken English Classes',
        'Online IELTS Coaching',
        'Promotional Mobile Stands'
      ]
    },
    {
      id: 12,
      icon: '📦',
      title: 'Specialized Labels & Bags',
      description: 'Specialized printing services for labels, bags, and safety applications',
      gradient: 'from-orange-500 to-red-500',
      images: [
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      services: [
        'Pre-Printed Barcode Label Printing',
        'Custom Caution Label Stickers',
        'Agriculture Radium Sticker Printing',
        'School Identity Cards',
        'Printed Non-Woven Carry Bags',
        'LED Clip-On Display Boards',
        'Sun Board Printing'
      ]
    }
  ];

  const openModal = (categoryId: number) => {
    setSelectedCategory(categoryId);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  const nextImage = () => {
    if (selectedCategory) {
      const category = categories.find(c => c.id === selectedCategory);
      if (category) {
        setCurrentImageIndex((prev) => (prev + 1) % category.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedCategory) {
      const category = categories.find(c => c.id === selectedCategory);
      if (category) {
        setCurrentImageIndex((prev) => (prev - 1 + category.images.length) % category.images.length);
      }
    }
  };

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Our Products &
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive printing, branding, signage, merchandising, and advertising solutions. 
            From name plates to corporate gifts, we manufacture and deliver excellence across all categories.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            <span>📞 +91 83601-98383</span>
            <span>•</span>
            <span>One-Stop Printing & Branding Hub</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => openModal(category.id)}
              className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20 cursor-pointer overflow-hidden"
            >
              {/* Gradient Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                whileHover={{ scale: 1.1 }}
              />

              {/* Icon */}
              <motion.div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 10 }}
              >
                {category.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {category.title}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {category.description}
              </p>

              <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                {category.services.length} services available
              </div>

              {/* Hover Arrow */}
              <motion.div
                className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <span>View Details</span>
                <motion.svg
                  className="ml-1 w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Why Choose Prem International?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '✅', title: 'One-Stop Printing & Branding Hub', desc: 'Complete solutions under one roof' },
              { icon: '🏭', title: 'Ludhiana-Based Manufacturer', desc: 'Years of experience and local expertise' },
              { icon: '💎', title: 'Premium Materials & Long-Lasting Prints', desc: 'Quality that stands the test of time' },
              { icon: '💰', title: 'Affordable Bulk Pricing', desc: 'Competitive rates for bulk orders' },
              { icon: '🤝', title: 'Trusted Across India', desc: 'Serving businesses and individuals nationwide' },
              { icon: '⏰', title: 'Monday – Saturday | 9 AM – 7 PM', desc: 'Reliable service hours' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Get a Free Quote Today!</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's bring your ideas to life — banners, boards, stickers, merchandise, or digital prints — we print it all with perfection.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Contact Us Now: +91 83601-98383
          </motion.button>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedCategory && selectedCategoryData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/40 transition-all duration-300"
              >
                <X size={24} />
              </motion.button>

              <div className="flex flex-col lg:flex-row h-[80vh]">
                {/* Image Carousel */}
                <div className="flex-1 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      src={selectedCategoryData.images[currentImageIndex]}
                      alt={selectedCategoryData.title}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Image Navigation */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/40 transition-all duration-300"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/40 transition-all duration-300"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedCategoryData.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="text-5xl mb-6">{selectedCategoryData.icon}</div>

                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {selectedCategoryData.title}
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {selectedCategoryData.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Services Include:
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedCategoryData.services.map((service, index) => (
                          <motion.div
                            key={service}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                            className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                          >
                            <div className={`w-3 h-3 bg-gradient-to-r ${selectedCategoryData.gradient} rounded-full`} />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{service}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${selectedCategoryData.gradient} text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300`}
                    >
                      Get Quote: +91 83601-98383
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductsServices;