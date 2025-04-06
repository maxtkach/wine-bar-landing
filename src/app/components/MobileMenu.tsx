'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = ['Меню', 'История', 'Виноделие', 'О нас', 'Галерея', 'Контакты'];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={onClose}
          />
          
          <div className="relative flex flex-col items-center justify-center h-full">
            <motion.button
              className="absolute top-6 right-6 text-2xl text-white/80 hover:text-white"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            <nav className="flex flex-col items-center space-y-6">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl tracking-widest hover:text-gold transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={onClose}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: menuItems.length * 0.1 }}
              className="mt-12 px-8 py-3 border border-gold/30 hover:border-gold text-sm tracking-widest transition-all duration-300"
              onClick={onClose}
            >
              Забронировать
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 