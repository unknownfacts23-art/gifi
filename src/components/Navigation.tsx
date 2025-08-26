import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Gift, Camera, Mail, Sparkles } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Heart },
    { path: '/birthday-message', label: 'Birthday Message', icon: Gift },
    { path: '/photo-gallery', label: 'Memories', icon: Camera },
    { path: '/love-letter', label: 'Love Letter', icon: Mail },
    { path: '/celebration', label: 'Celebrate', icon: Sparkles },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-b border-pink-200/30"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-center space-x-8">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link key={path} to={path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  location.pathname === path
                    ? 'bg-rose-500 text-white shadow-lg'
                    : 'text-rose-600 hover:bg-rose-100'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{label}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;