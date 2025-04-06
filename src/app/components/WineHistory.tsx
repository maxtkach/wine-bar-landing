'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CustomImage from '@/components/CustomImage';

const historyItems = [
  {
    title: "Традиції",
    description: "Вікові традиції виноробства, що передаються з покоління в покоління",
    image: "/history/history1.jpg"
  },
  {
    title: "Спадщина",
    description: "Багата історія та культурна спадщина виноробного мистецтва",
    image: "/history/history2.jpg"
  },
  {
    title: "Колекція",
    description: "Унікальна колекція вин з найкращих виноробень світу",
    image: "/history/history3.jpg"
  },
  {
    title: "Винний льох",
    description: "Ідеальні умови зберігання у нашому винному льоху",
    image: "/history/history4.jpg"
  }
];

export default function WineHistory() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="історія" className="py-32 relative overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <CustomImage
          src="/history/history-bg.jpg"
          alt="History background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-dark-wine/30 via-transparent to-dark-wine/20"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-light tracking-wider mb-16 text-center"
        >
          ІСТОРІЯ
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {historyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-6">
                <CustomImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl mb-3 text-gold">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 