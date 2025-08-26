import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FlowerPetals from '../components/FlowerPetals';

const BirthdayMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const messages = [
    "On this special day, I want you to know...",
    "You are the sunshine that brightens my darkest days",
    "Your smile is my favorite sight in the world",
    "Every moment with you is a treasure I cherish",
    "May this new year of your life be filled with endless joy",
    "Happy Birthday to the most amazing person I know! 💕"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative"
    >
      <FlowerPetals />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200/30"
        >
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-rose-600 mb-8"
          >
            A Special Message For You
          </motion.h2>

          {showMessage && (
            <div className="space-y-6">
              {messages.map((message, index) => (
                <motion.p
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.5 + 0.5 }}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed"
                >
                  {message}
                </motion.p>
              ))}
            </div>
          )}

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 4, type: "spring", stiffness: 200 }}
            className="mt-8 text-4xl"
          >
            🎉🎂🌹💖🎈
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BirthdayMessage;