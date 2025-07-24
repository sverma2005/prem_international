import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
  const shapes = [
    { id: 1, size: 'w-32 h-32', delay: 0, duration: 20 },
    { id: 2, size: 'w-24 h-24', delay: 2, duration: 25 },
    { id: 3, size: 'w-40 h-40', delay: 4, duration: 30 },
    { id: 4, size: 'w-20 h-20', delay: 1, duration: 18 },
    { id: 5, size: 'w-36 h-36', delay: 3, duration: 22 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} rounded-full bg-gradient-to-br from-blue-400/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-600/5`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;