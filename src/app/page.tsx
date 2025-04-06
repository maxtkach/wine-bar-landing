'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import WineCard from "./components/WineCard";
import WineAnimation from "./components/WineAnimation";
import WineHistory from "./components/WineHistory";
import WineMaking from "./components/WineMaking";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";
import BookingForm from "./components/BookingForm";
import Atmosphere from "./components/Atmosphere";
import Events from "./components/Events";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Navigation = ({ onBookingClick }: { onBookingClick: () => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/20"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="logo-text"
            >
              WINE·VERSE
            </motion.a>
            <div className="hidden md:flex space-x-12">
              {[
                { title: 'Меню', href: 'menu' },
                { title: 'Історія', href: 'історія' },
                { title: 'Виноробство', href: 'виноробство' },
                { title: 'Про нас', href: 'про-нас' },
                { title: 'Галерея', href: 'галерея' },
                { title: 'Контакти', href: 'контакти' }
              ].map((item, i) => (
                <motion.a
                  key={item.title}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  href={`#${item.href}`}
                  className="text-sm tracking-widest hover:text-gold transition-colors duration-300"
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookingClick}
                className="hidden md:block px-6 py-2 border border-gold/30 hover:border-gold text-sm tracking-widest transition-all duration-300"
              >
                Бронювати
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden text-2xl"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                ☰
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-[#0a0506] relative">
        <WineAnimation />
        <div className="relative z-10">
          <Navigation onBookingClick={() => setIsBookingOpen(true)} />
          
          {/* Hero Section */}
          <section className="h-screen flex items-center justify-center relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src="/hero-bg.jpg"
                alt="Wine background"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="relative text-center px-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="hero-title"
              >
                WINE·VERSE
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-gold/80 text-lg tracking-widest"
              >
                ВИННИЙ БАР · КИЇВ
              </motion.p>
            </div>
          </section>

          {/* Menu Section */}
          <section id="menu" className="py-32 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-b from-dark-wine/30 via-transparent to-dark-wine/20"
            />
            <div className="container mx-auto px-6">
              <motion.h2
                {...fadeIn}
                className="text-3xl font-light tracking-wider mb-16 text-center"
              >
                КОЛЕКЦІЯ ВИН
              </motion.h2>
              <motion.div
                variants={stagger}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <WineCard name="Château Margaux" year="2018" region="Бордо" price="₴12,000" />
                <WineCard name="Brunello di Montalcino" year="2017" region="Тоскана" price="₴8,500" />
                <WineCard name="Vega Sicilia Unico" year="2015" region="Рібера-дель-Дуеро" price="₴15,000" />
                <WineCard name="Opus One" year="2019" region="Напа Веллі" price="₴18,000" />
                <WineCard name="Sassicaia" year="2016" region="Тоскана" price="₴14,500" />
                <WineCard name="Dom Pérignon" year="2012" region="Шампань" price="₴21,000" />
              </motion.div>
            </div>
          </section>

          {/* Wine History Section */}
          <WineHistory />

          {/* Wine Making Section */}
          <WineMaking />

          {/* Atmosphere Section */}
          <Atmosphere />

          {/* Events Section */}
          <Events />

          {/* About Section */}
          <section id="про-нас" className="py-32 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(139, 0, 0, 0.3) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)'
              }}
            />
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                  {...fadeIn}
                  className="text-3xl font-light tracking-wider mb-12"
                >
                  ПРО НАС
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-gray-400 leading-relaxed mb-8"
                >
                  Wine·Verse — це унікальний простір, де сучасна елегантність 
                  зустрічається з віковими традиціями виноробства. Ми створили атмосферу, 
                  в якій кожен келих вина стає особливим моментом.
                </motion.p>
                <motion.div
                  variants={stagger}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="flex justify-center space-x-6 text-sm"
                >
                  {[
                    { number: "350+", text: "Вин у колекції" },
                    { number: "15", text: "Країн походження" },
                    { number: "2023", text: "Рік заснування" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeIn}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div className="text-gold mb-2">{item.number}</div>
                      <div className="text-gray-500">{item.text}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="галерея" className="py-32 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-dark-wine/20 via-transparent to-dark-wine/20"
            />
            <div className="container mx-auto px-6">
              <motion.h2
                {...fadeIn}
                className="text-3xl font-light tracking-wider mb-16 text-center"
              >
                ГАЛЕРЕЯ
              </motion.h2>
              <motion.div
                variants={stagger}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-1"
              >
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="aspect-square relative group overflow-hidden"
                  >
                    <Image
                      src={`/gallery${i}.jpg`}
                      alt={`Gallery image ${i}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="контакти" className="py-32 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139, 0, 0, 0.1) 0%, transparent 50%)'
              }}
            />
            <div className="container mx-auto px-6">
              <div className="max-w-xl mx-auto text-center">
                <motion.h2
                  {...fadeIn}
                  className="text-3xl font-light tracking-wider mb-12"
                >
                  КОНТАКТИ
                </motion.h2>
                <motion.div
                  variants={stagger}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-6 text-gray-400"
                >
                  {[
                    { label: "Адреса", value: "вул. Винна, 123, Київ" },
                    { label: "Телефон", value: "+380 44 123-45-67" },
                    { label: "Email", value: "info@wineverse.ua" }
                  ].map((item, i) => (
                    <motion.p
                      key={i}
                      variants={fadeIn}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="text-gold">{item.label}</span>
                      {item.value}
                    </motion.p>
                  ))}
                  <motion.div
                    variants={fadeIn}
                    className="pt-8"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        const phoneNumber = '+380441234567';
                        window.location.href = `tel:${phoneNumber}`;
                      }}
                      className="px-8 py-3 border border-gold/30 hover:border-gold text-sm tracking-widest transition-all duration-300"
                    >
                      Забронювати столик
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 border-t border-white/5">
            <div className="container mx-auto px-6 text-center text-sm text-gray-500">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                © 2024 Wine·Verse. Всі права захищені.
              </motion.p>
            </div>
          </footer>
        </div>
      </div>
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
