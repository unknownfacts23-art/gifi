import React from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart}
          className="absolute text-pink-300/40"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 15}px`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          💝
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;