import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoveLetter = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const letter = `My Dearest Love,

On this wonderful day that celebrates your existence, I want to pour my heart out and tell you just how much you mean to me.

From the moment you entered my life, everything changed. Your laughter became my favorite symphony, your smile became my daily sunrise, and your love became my greatest treasure.

You have this incredible way of making ordinary moments feel magical. Whether we're sharing a quiet evening together or embarking on new adventures, every second with you is a gift I cherish deeply.

Your kindness touches everyone around you, your strength inspires me daily, and your beautiful soul shines so bright that it lights up my entire world.

As you celebrate another year of your amazing life, I want you to know that you are loved beyond measure. You are appreciated for all the little things you do, admired for your courage, and cherished for simply being you.

May this new year of your life bring you endless happiness, countless adventures, and all the dreams your heart desires. I can't wait to create more beautiful memories together.

Happy Birthday, my love. Here's to celebrating you today and always.

With all my love and countless kisses,
Your devoted admirer 💕`;

  useEffect(() => {
    if (currentIndex < letter.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + letter[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, letter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 px-4 pb-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-4">
            A Love Letter Just For You
          </h2>
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💌
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200/30 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500"></div>
          
          <motion.div
            className="prose prose-lg max-w-none"
            style={{ minHeight: '600px' }}
          >
            <pre className="whitespace-pre-wrap font-serif text-gray-700 leading-relaxed text-lg">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-rose-500"
              >
                |
              </motion.span>
            </pre>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
            className="text-center mt-8"
          >
            <div className="text-3xl">💖🌹💕🌹💖</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoveLetter;