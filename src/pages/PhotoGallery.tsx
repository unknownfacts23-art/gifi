import React from 'react';
import { motion } from 'framer-motion';

const PhotoGallery = () => {
  const photos = [
    { id: 1, title: "Our First Meeting", emoji: "🥰" },
    { id: 2, title: "Sunset Together", emoji: "🌅" },
    { id: 3, title: "Laughing Together", emoji: "😂" },
    { id: 4, title: "Adventure Time", emoji: "🏔️" },
    { id: 5, title: "Cozy Evening", emoji: "🕯️" },
    { id: 6, title: "Dancing Night", emoji: "💃" },
    { id: 7, title: "Beach Day", emoji: "🏖️" },
    { id: 8, title: "Winter Wonderland", emoji: "❄️" },
    { id: 9, title: "Picnic Day", emoji: "🧺" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 px-4 pb-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-12"
        >
          Our Beautiful Memories 💕
        </motion.h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(236, 72, 153, 0.3)"
              }}
              className="bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-pink-200/30 cursor-pointer"
            >
              <div className="h-64 bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl"
                >
                  {photo.emoji}
                </motion.div>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700 text-center">
                  {photo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-600 italic">
            "Soon we will cover all these with our love" 💖
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PhotoGallery;