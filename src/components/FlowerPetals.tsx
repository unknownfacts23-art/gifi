import React from 'react';
import { motion } from 'framer-motion';

const FlowerPetals = () => {
  const petals = Array.from({ length: 20 }, (_, i) => i);
  const flowers = ['🌸', '🌺', '🌹', '🌷', '🌻'];

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 15 + 20}px`,
          }}
          animate={{
            y: [-20, window.innerHeight + 50],
            x: [0, Math.random() * 200 - 100],
            rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          {flowers[Math.floor(Math.random() * flowers.length)]}
        </motion.div>
      ))}
    </div>
  );
};

export default FlowerPetals;