'use client';
import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [hideSplash, setHideSplash] = useState(false);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setHideSplash(true);
      document.body.style.overflow = 'auto';
      clearTimeout(timer);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (hideSplash) return null;
  return (
    <div className="fixed left-0 top-0 z-40 h-svh w-screen bg-black">
      <video autoPlay muted className="h-full w-full object-cover">
        <source src="/splash-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default SplashScreen;
