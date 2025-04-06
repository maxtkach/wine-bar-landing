'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function WineAnimation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Плавные значения для анимации
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 });
  
  // Трансформация значений скролла и позиции мыши
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const waveScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const waveRotate = useTransform(smoothMouseX, [-1000, 1000], [-5, 5]);
  const waveY = useTransform(smoothMouseY, [-1000, 1000], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = containerRef.current?.getBoundingClientRect() || 
        { left: 0, top: 0, width: 0, height: 0 };
      
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.svg
        className="absolute w-[140%] h-[140%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 140 140"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          scale: waveScale,
          rotateZ: waveRotate,
          y: waveY
        }}
      >
        <defs>
          <linearGradient id="wineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2c0b14', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#8B0000', stopOpacity: 0.5 }} />
          </linearGradient>
          <filter id="turbulence">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.02"
              numOctaves="3"
              result="noise"
              seed="1"
            >
              <animate
                attributeName="seed"
                from="1"
                to="2"
                dur="8s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
          </filter>
        </defs>

        <motion.g 
          className="wine-waves" 
          filter="url(#turbulence)"
          style={{ y: yOffset }}
        >
          <motion.path
            className="wine-wave"
            fill="url(#wineGradient)"
            d="M0 60 Q 35 55, 70 60 T 140 60 V 140 H 0 Z"
            animate={{
              d: [
                "M0 60 Q 35 55, 70 60 T 140 60 V 140 H 0 Z",
                "M0 60 Q 35 65, 70 60 T 140 60 V 140 H 0 Z",
                "M0 60 Q 35 55, 70 60 T 140 60 V 140 H 0 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            className="wine-wave"
            fill="url(#wineGradient)"
            d="M0 70 Q 35 65, 70 70 T 140 70 V 140 H 0 Z"
            animate={{
              d: [
                "M0 70 Q 35 65, 70 70 T 140 70 V 140 H 0 Z",
                "M0 70 Q 35 75, 70 70 T 140 70 V 140 H 0 Z",
                "M0 70 Q 35 65, 70 70 T 140 70 V 140 H 0 Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ opacity: 0.7 }}
          />
        </motion.g>
      </motion.svg>
    </div>
  );
} 