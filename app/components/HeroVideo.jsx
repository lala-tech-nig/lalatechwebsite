'use client';

import { useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full h-screen">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/Hero1.mp4" // Replace this with your video file in public/
        autoPlay
        loop
        muted
        playsInline
      />
      <button
        onClick={togglePlay}
        className="absolute bottom-4 right-4 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
      </button>
    </div>
  );
}
