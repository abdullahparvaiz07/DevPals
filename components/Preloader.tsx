'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const terminalSteps = [
  'Initializing DevPals Core v3.2...',
  'Compiling high-performance UI engines...',
  'Connecting distributed edge microservices...',
  'Mounting AI agent & automation pipelines...',
  'DevPals systems online & operational.'
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 200);
          setTimeout(() => setShouldRender(false), 900);
          return 100;
        }

        const increment = prev < 25 ? 6 : prev < 65 ? 8 : prev < 85 ? 7 : 12;
        const next = Math.min(prev + increment, 100);

        if (next >= 85) setStepIndex(4);
        else if (next >= 65) setStepIndex(3);
        else if (next >= 40) setStepIndex(2);
        else if (next >= 15) setStepIndex(1);
        else setStepIndex(0);

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[99999] bg-[#070809] text-white flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden"
        >
          {/* Subtle Ambient Radial Glowing Flares */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] h-[320px] sm:h-[540px] bg-[#44DE64]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none -z-10" />

          {/* Top Header: System Status & Version */}
          <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono text-neutral-500 tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#44DE64] animate-ping" />
              <span className="text-neutral-300 font-semibold uppercase">DEVPALS SYS_BOOT</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block">ENV: PRODUCTION</span>
              <span className="text-[#44DE64]">v3.2.0</span>
            </div>
          </div>

          {/* Center: Brand Monogram, Emblem & Progress */}
          <div className="w-full max-w-md mx-auto flex flex-col items-center text-center my-auto">
            {/* Emblem with Glowing Pulsing Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-2xl mb-6 group"
            >
              <div className="absolute inset-0 rounded-3xl bg-[#44DE64]/20 blur-md animate-pulse" />
              <span className="text-[#44DE64] text-4xl sm:text-5xl font-black leading-none relative z-10">
                ✳
              </span>
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1.5 mb-8"
            >
              <h1 className="text-2xl sm:text-3xl font-[850] tracking-tight text-white flex items-center justify-center gap-1.5">
                <span>DevPals</span>
                <span className="text-[#44DE64] text-sm font-mono font-normal">.io</span>
              </h1>
              <p className="text-[11px] sm:text-xs font-medium text-neutral-400 tracking-[0.2em] uppercase">
                Software Studio &amp; Engineering Lab
              </p>
            </motion.div>

            {/* Glowing High-Tech Progress Bar */}
            <div className="w-full space-y-3">
              <div className="relative w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#22C55E] via-[#44DE64] to-[#86EFAC] rounded-full shadow-[0_0_12px_rgba(68,222,100,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Counter & Log Message */}
              <div className="flex items-center justify-between font-mono text-[11px] sm:text-xs">
                <span className="text-neutral-400 flex items-center gap-1.5 text-left truncate mr-2">
                  <span className="text-[#44DE64]">&gt;</span>
                  <span className="truncate">{terminalSteps[stepIndex]}</span>
                </span>
                <span className="text-[#44DE64] font-bold shrink-0">
                  {progress.toString().padStart(3, '0')}%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Footer Details */}
          <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-500 tracking-wider pt-4 border-t border-neutral-900">
            <div className="flex items-center gap-2">
              <span className="text-neutral-400">ARCH: NEXT.JS 15</span>
            </div>
            <div className="text-neutral-400">
              IDEAS ➔ CODE ➔ IMPACT
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
