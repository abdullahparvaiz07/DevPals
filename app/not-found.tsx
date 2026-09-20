'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-neutral-950 flex flex-col items-center justify-center px-6 py-20 text-center selection:bg-orange-100 selection:text-orange-950">
      
      {/* Background glow */}
      <div className="absolute w-[350px] sm:w-[500px] h-[350px] bg-gradient-to-tr from-emerald-200/40 via-orange-100/30 to-blue-100/30 blur-3xl -z-10 rounded-full" />

      {/* 404 Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-semibold tracking-wide shadow-md mb-6">
        <span className="w-2 h-2 rounded-full bg-[#44DE64] animate-pulse"></span>
        <span className="uppercase tracking-wider">PAGE NOT FOUND</span>
      </div>

      <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-neutral-950">
        404
      </h1>

      <h2 className="text-xl sm:text-2xl font-bold text-neutral-800 mt-4 tracking-tight">
        Lost in Digital Space?
      </h2>

      <p className="text-sm sm:text-base text-neutral-600 max-w-md mt-2 leading-relaxed">
        The page you are looking for might have been moved, renamed, or doesn&apos;t exist in this dimension.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-neutral-950 text-white font-semibold text-sm hover:bg-neutral-800 transition-all shadow-md inline-flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <Link
          href="/projects"
          className="px-6 py-3 rounded-full bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-100 transition-all border border-neutral-200 shadow-xs inline-flex items-center gap-2"
        >
          <span>View Projects</span>
        </Link>
      </div>

      {/* Brand Watermark */}
      <div className="mt-16 text-xs text-neutral-400 font-semibold flex items-center gap-2">
        <Image src="/logo.png" alt="DevPals Logo" width={20} height={20} className="w-5 h-5 object-contain rounded-md" />
        <span>DevPals Digital Studio</span>
      </div>

    </div>
  );
}
