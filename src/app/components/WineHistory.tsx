'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const historyItems = [
  {
    year: '6000 до н.е.',
    title: 'Перше вино',
    description: 'Археологічні знахідки свідчать про виробництво вина в регіоні сучасної Грузії.',
    image: '/history1.jpg'
  },
  {
    year: '3000 до н.е.',
    title: 'Єгипетські традиції',
    description: 'Давні єгиптяни розвивають мистецтво виноробства та використовують вино в релігійних церемоніях.',
    image: '/history2.jpg'
  },
  {
    year: '800 до н.е.',
    title: 'Грецька культура',
    description: 'Греки поширюють культуру виноробства по всьому Середземномор\'ю.',
    image: '/history3.jpg'
  },
  {
    year: '100 н.е.',
    title: 'Римська імперія',
    description: 'Римляни вдосконалюють методи виноробства та створюють перші класифікації вин.',
    image: '/history4.jpg'
  }
];

export default function WineHistory() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/history-bg.jpg')] bg-cover bg-center"
      />
      
      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-light tracking-wider mb-16 text-center"
        >
          ІСТОРІЯ ВИНА
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {historyItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-start gap-6 p-6 rounded-sm bg-white/5 backdrop-blur-sm">
                  <div className="text-gold text-sm">{item.year}</div>
                  <div>
                    <h3 className="text-xl font-light mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-sm overflow-hidden"
          >
            {historyItems.map((item, index) => (
              <motion.div
                key={item.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 