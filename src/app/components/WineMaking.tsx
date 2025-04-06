'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    id: 1,
    title: "Збір винограду",
    description: "Ретельний відбір найкращих ягід в оптимальний момент дозрівання.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path d="M12 3c-4 0-8 3-8 8 0 3 2 6 5 7h6c3-1 5-4 5-7 0-5-4-8-8-8z" strokeWidth="1.5" />
        <path d="M12 7c-2 0-4 1.5-4 4 0 1.5 1 3 2.5 3.5h3c1.5-.5 2.5-2 2.5-3.5 0-2.5-2-4-4-4z" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Пресування",
    description: "Дбайливе вилучення соку з винограду для збереження смакових якостей.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path d="M12 3L4 8v8l8 5 8-5V8l-8-5z" strokeWidth="1.5" />
        <path d="M4 8l8 5 8-5M12 13v8" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Ферментація",
    description: "Перетворення виноградного соку на вино під дією натуральних дріжджів.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path d="M9 3h6l2 4-5 14-5-14 2-4z" strokeWidth="1.5" />
        <path d="M7 7h10M9.5 11h5M10 15h4" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Витримка",
    description: "Дозрівання вина в дубових бочках для розвитку складного букету.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path d="M5 6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6z" strokeWidth="1.5" />
        <path d="M8 4v16M16 4v16M5 9h14M5 15h14" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Розлив",
    description: "Розлив готового вина по пляшках з дотриманням усіх стандартів якості.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path d="M12 3v4M9 7h6l1 2v10c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V9l1-2z" strokeWidth="1.5" />
        <path d="M9 12h6M9 16h6" strokeWidth="1.5" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function WineMaking() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="relative py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(139, 0, 0, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(44, 11, 20, 0.9), rgba(10, 5, 6, 0.9))
          `
        }}
      />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-center mb-16 tracking-wider gradient-text"
        >
          МИСТЕЦТВО ВИНОРОБСТВА
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative z-10 bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gold/20 
                           transform transition-all duration-500 group-hover:scale-105 group-hover:border-gold/40">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="text-gold mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl mb-3 text-gold/80 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {step.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 
                             group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              </div>
              
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: index * 0.3, duration: 1 }}
                  className="hidden md:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-gold/40 to-transparent -translate-y-1/2 transform"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 