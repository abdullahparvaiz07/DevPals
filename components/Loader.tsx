'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (!loading) {
      setShouldRender(false);
    }
  };

  if (!shouldRender) return null;

  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {loading && (
        <motion.div
          key="cube-page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0A0B0D] flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden"
        >
          {/* Subtle background ambient radial glow */}
          <div className="absolute w-[360px] sm:w-[540px] h-[360px] sm:h-[540px] bg-[#44DE64]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* DevPals Brand Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-10"
          >
            <Image
              src="/logo.png"
              alt="DevPals Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain rounded-lg shadow-md"
              priority
            />
            <span className="text-white font-bold text-lg tracking-tight">DevPals</span>
          </motion.div>

          {/* 3D Cube Loader (From Uiverse.io by dexter-st) */}
          <div className="wrapper-grid my-2">
            {letters.map((char, index) => (
              <div key={index} className="cube">
                <div className="face face-front">{char}</div>
                <div className="face face-back"></div>
                <div className="face face-right"></div>
                <div className="face face-left"></div>
                <div className="face face-top"></div>
                <div className="face face-bottom"></div>
              </div>
            ))}
          </div>

          {/* Subtitle Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#44DE64] animate-pulse" />
            <span>Digital Product Studio</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
