'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const events = [
  {
    title: "Дегустації",
    date: "Щочетверга",
    time: "19:00",
    description: "Знайомство з новими винами у супроводі сомельє та легких закусок",
    image: "url('/events/tasting.jpg')",
    link: "https://forms.google.com/wine-tasting-registration"
  },
  {
    title: "Джазові вечори",
    date: "Щоп'ятниці",
    time: "20:00",
    description: "Живі виступи джазових музикантів у поєднанні з вишуканими винами",
    image: "url('/events/jazz.jpg')",
    link: "https://forms.google.com/jazz-evening-registration"
  },
  {
    title: "Майстер-класи",
    date: "Щосуботи",
    time: "18:00",
    description: "Навчання мистецтву виноробства та дегустації від експертів",
    image: "url('/events/masterclass.jpg')",
    link: "https://forms.google.com/masterclass-registration"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function Events() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="relative py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(139, 0, 0, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(10, 5, 6, 0.98), rgba(44, 11, 20, 0.98))
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
            ПОДІЇ
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                variants={itemVariants}
                className="group relative min-h-[400px] rounded-lg overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 
                           group-hover:scale-110 group-hover:rotate-1"
                  style={{ backgroundImage: event.image }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        className="px-3 py-1 rounded border border-gold/30 backdrop-blur-sm"
                      >
                        <span className="text-gold text-sm">{event.date}</span>
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        className="px-3 py-1 rounded border border-gold/30 backdrop-blur-sm"
                      >
                        <span className="text-gold text-sm">{event.time}</span>
                      </motion.div>
                    </div>
                    
                    <h3 className="text-2xl mb-3 text-white group-hover:text-gold transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {event.description}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open(event.link, '_blank')}
                    className="mt-6 px-6 py-2 border border-gold/30 hover:border-gold text-sm 
                             tracking-wider transition-all duration-300 backdrop-blur-sm
                             opacity-0 group-hover:opacity-100 transform translate-y-4
                             group-hover:translate-y-0 transition-all"
                  >
                    Зареєструватися
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 