import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gift, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-rose-600 bg-clip-text text-transparent mb-4">
            Happy Birthday
          </h1>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl mb-6"
          >
            🎂✨
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
        >
          To the most beautiful soul who makes every day brighter. 
          This special day is all about celebrating the amazing person you are.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/birthday-message">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Gift size={20} />
              <span>Open Your Gift</span>
            </motion.button>
          </Link>
          
          <Link to="/celebration">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Sparkles size={20} />
              <span>Let's Celebrate!</span>
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.6, type: "spring" }}
          className="mt-12"
        >
          <div className="text-6xl">🌹💕🌹</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;