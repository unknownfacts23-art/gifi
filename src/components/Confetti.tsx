import React from 'react';
import { motion } from 'framer-motion';

const Confetti = () => {
  const pieces = Array.from({ length: 50 }, (_, i) => i);
  const colors = ['#ff69b4', '#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
  const shapes = ['🎊', '🎉', '⭐', '💖', '🌟', '✨', '💕'];

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {pieces.map((piece) => (
        <motion.div
          key={piece}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            color: colors[Math.floor(Math.random() * colors.length)],
            fontSize: `${Math.random() * 10 + 15}px`,
          }}
          initial={{ y: -20, opacity: 1 }}
          animate={{
            y: window.innerHeight + 100,
            x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100],
            rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {shapes[Math.floor(Math.random() * shapes.length)]}
        </motion.div>
      ))}
    </div>
  );
};

export default Confetti;