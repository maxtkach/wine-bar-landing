'use client';

import { motion } from 'framer-motion';

interface WineCardProps {
  name: string;
  year: string;
  region: string;
  price: string;
}

export default function WineCard({ name, year, region, price }: WineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="group relative overflow-hidden rounded-sm bg-white/5"
    >
      <div className="p-6 backdrop-blur-sm">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-light mb-2"
        >
          {name}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-gold/80 mb-1"
        >
          {year} · {region}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm mb-4"
        >
          {price}
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 text-sm tracking-wider border border-gold/30 hover:border-gold button-glow"
        >
          Заказать
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 bg-gradient-to-b from-gold to-transparent pointer-events-none"
      />
    </motion.div>
  );
} 