import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from '../components/Confetti';

const Celebration = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [balloonsPoped, setBalloonsPoped] = useState<number[]>([]);

  const balloons = [
    { id: 1, color: 'bg-pink-400', emoji: '🎈' },
    { id: 2, color: 'bg-red-400', emoji: '🎈' },
    { id: 3, color: 'bg-purple-400', emoji: '🎈' },
    { id: 4, color: 'bg-yellow-400', emoji: '🎈' },
    { id: 5, color: 'bg-blue-400', emoji: '🎈' },
    { id: 6, color: 'bg-green-400', emoji: '🎈' },
  ];

  const popBalloon = (id: number) => {
    setBalloonsPoped(prev => [...prev, id]);
    if (balloonsPoped.length === balloons.length - 1) {
      setShowConfetti(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 px-4 pb-8 relative"
    >
      {showConfetti && <Confetti />}
      
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 mb-4">
            🎉 IT'S PARTY TIME! 🎉
          </h2>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-8"
          >
            🎂
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Pop all the balloons to start the ultimate birthday celebration! 
          Each balloon contains a special wish for your amazing year ahead! 🎈
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {balloons.map((balloon, index) => (
            <motion.div
              key={balloon.id}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex justify-center"
            >
              {!balloonsPoped.includes(balloon.id) ? (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => popBalloon(balloon.id)}
                  className="text-8xl hover:scale-110 transition-transform cursor-pointer"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {balloon.emoji}
                </motion.button>
              ) : (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl"
                >
                  💥
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {balloonsPoped.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-pink-200/30"
          >
            <h3 className="text-2xl font-bold text-rose-600 mb-4">
              Birthday Wishes Unlocked! ✨
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-700">
              {balloonsPoped.map((id, index) => {
                const wishes = [
                  "May all your dreams come true! 🌟",
                  "Endless happiness surrounds you! 😊",
                  "Adventure awaits in every corner! 🗺️",
                  "Love multiplies in your life! 💕",
                  "Success follows your every step! 🏆",
                  "Magic happens in ordinary moments! ✨"
                ];
                return (
                  <motion.div
                    key={id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-r from-pink-100 to-rose-100 p-4 rounded-lg"
                  >
                    {wishes[id - 1]}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {showConfetti && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4">
              🎊 CELEBRATION COMPLETE! 🎊
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              May this year be your most amazing one yet!
            </p>
            <div className="text-4xl">
              🎂🎈🎁🌟💖🎉
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Celebration;