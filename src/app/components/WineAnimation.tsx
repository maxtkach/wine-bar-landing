'use client';

import { motion } from "framer-motion";

export default function WineAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <radialGradient
              id="wine-gradient"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop
                offset="0%"
                style={{ stopColor: 'var(--wine)', stopOpacity: 0.5 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: 'var(--wine)', stopOpacity: 0 }}
              />
            </radialGradient>
          </defs>
          <motion.path
            d="M0,100 C20,90 50,95 100,100 L100,0 C70,5 30,0 0,0 Z"
            fill="url(#wine-gradient)"
            className="wine-wave"
            animate={{
              d: [
                "M0,100 C20,90 50,95 100,100 L100,0 C70,5 30,0 0,0 Z",
                "M0,100 C40,95 60,90 100,100 L100,0 C50,5 20,0 0,0 Z",
                "M0,100 C20,90 50,95 100,100 L100,0 C70,5 30,0 0,0 Z"
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.path
            d="M0,100 C30,95 70,90 100,100 L100,0 C50,5 20,0 0,0 Z"
            fill="url(#wine-gradient)"
            className="wine-wave"
            style={{ opacity: 0.5 }}
            animate={{
              d: [
                "M0,100 C30,95 70,90 100,100 L100,0 C50,5 20,0 0,0 Z",
                "M0,100 C50,90 80,95 100,100 L100,0 C30,5 40,0 0,0 Z",
                "M0,100 C30,95 70,90 100,100 L100,0 C50,5 20,0 0,0 Z"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
} 