'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const historyItems = [
  {
    title: "Традиції",
    description: "Вікові традиції виноробства, що передаються з покоління в покоління. Кожна пляшка вина у нашій колекції - це історія, що розповідає про майстерність та відданість виноробів.",
    year: "1800"
  },
  {
    title: "Спадщина",
    description: "Багата історія та культурна спадщина виноробного мистецтва. Ми зберігаємо та передаємо знання про найкращі вина світу та їх унікальні особливості.",
    year: "1900"
  },
  {
    title: "Колекція",
    description: "Унікальна колекція вин з найкращих виноробень світу. Ретельно відібрані екземпляри, що представляють різні регіони та стилі виноробства.",
    year: "1950"
  },
  {
    title: "Винний льох",
    description: "Ідеальні умови зберігання у нашому винному льоху. Температура, вологість та освітлення контролюються для забезпечення найкращої якості кожної пляшки.",
    year: "2000"
  }
];

export default function WineHistory() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="історія" className="py-32 relative overflow-hidden">
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
          ІСТОРІЯ ВИНА
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {historyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0 w-24 text-gold opacity-50 text-5xl font-light">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-2xl mb-4 text-gold font-light tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-6 h-px bg-gradient-to-r from-gold/50 to-transparent w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 