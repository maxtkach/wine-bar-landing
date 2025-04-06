'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    guests: '2',
    date: '',
    time: '',
    name: '',
    phone: '',
    wishes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={formVariants}
            className="bg-[#0f0708] p-8 rounded-sm max-w-md w-full border border-gold/20"
            onClick={e => e.stopPropagation()}
          >
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-2xl font-light mb-6 text-center">Бронювання столика</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gold mb-2">Кількість гостей</label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-gold/30 p-3 text-sm focus:border-gold outline-none transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gold mb-2">Дата</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-gold/30 p-3 text-sm focus:border-gold outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gold mb-2">Час</label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-gold/30 p-3 text-sm focus:border-gold outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 border border-gold/30 hover:border-gold text-sm tracking-widest transition-all duration-300 mt-6"
                    type="submit"
                  >
                    Продовжити
                  </motion.button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-2xl font-light mb-6 text-center">Контактні дані</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gold mb-2">Ваше ім'я</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-gold/30 p-3 text-sm focus:border-gold outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gold mb-2">Телефон</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-gold/30 p-3 text-sm focus:border-gold outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gold mb-2">Побажання</label>
                      <textarea
                        name="wishes"
                        value={formData.wishes}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-gold/30 p-3 text-sm focus:border-gold outline-none transition-colors h-24 resize-none"
                      />
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 border border-gold/30 hover:border-gold text-sm tracking-widest transition-all duration-300 mt-6"
                    type="submit"
                  >
                    Забронювати
                  </motion.button>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl text-gold mb-6"
                >
                  ✓
                </motion.div>
                <h3 className="text-2xl font-light mb-4">Дякуємо за бронювання!</h3>
                <p className="text-gray-400 mb-8">
                  Ми зв'яжемося з вами найближчим часом для підтвердження.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-8 py-3 border border-gold/30 hover:border-gold text-sm tracking-widest transition-all duration-300"
                >
                  Закрити
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 