'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: "Авторський інтер'єр",
    description: "Елегантний дизайн з використанням натуральних матеріалів створює неповторну атмосферу"
  },
  {
    title: "Жива музика",
    description: "Щовечора виступи музикантів додають особливого шарму вашому відпочинку"
  },
  {
    title: "Затишні зони",
    description: "Комфортні місця для невеликих компаній та романтичних побачень"
  }
];

export default function Atmosphere() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="relative py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 70% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 30% 80%, rgba(139, 0, 0, 0.2) 0%, transparent 60%),
            linear-gradient(to bottom, rgba(10, 5, 6, 0.95), rgba(44, 11, 20, 0.95))
          `
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-center mb-16 tracking-wider gradient-text"
          >
            АТМОСФЕРА
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="group"
                >
                  <div className="relative p-6 rounded-lg border border-gold/20 backdrop-blur-sm
                               bg-black/30 transition-all duration-500 group-hover:border-gold/40">
                    <h3 className="text-xl mb-3 text-gold/80 group-hover:text-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {feature.description}
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-gold/40 to-transparent"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src="/atmosphere.jpg"
                alt="Wine bar atmosphere"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 