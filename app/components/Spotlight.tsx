"use client"
import React, { useState, useEffect } from 'react';

const Spotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute spotlight"  
    style={{ left: position.x - 1161, top: position.y - 965.273 }} ></div>
  );
};

export default Spotlight;
