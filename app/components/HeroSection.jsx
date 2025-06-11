'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroVideo from './HeroVideo';
import NavBar from './NavBar';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
        <NavBar />
        <HeroVideo />

      {/* Overlay gradient (optional for better text contrast) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-white/60"></div>

      {/* Overlay Text & Buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Save 20% on AI glasses
        </h1>
        <p className="text-white text-lg md:text-xl mb-2">
          Offer valid for all Ray-Ban Meta glasses.{' '}
          <Link href="#" className="underline">
            Terms apply.
          </Link>
        </p>
        <p className="text-white text-sm mb-6">Ends on 16/06/2025.</p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
            Shop AI glasses
          </button>
          <button className="bg-orange-100 text-orange-700 px-6 py-3 rounded-full hover:bg-orange-200 transition">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
