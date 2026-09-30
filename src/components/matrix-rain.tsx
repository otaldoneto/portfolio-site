'use client';

import { useEffect, useRef } from 'react';

const CHARACTERS = '0123456789ABCDEFアイウエオカキクケコサシスセソタチツテト';

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      columns = Math.floor(canvas!.width / fontSize);
      drops = Array(columns).fill(1);
    }

    resize();
    window.addEventListener('resize', resize);

    function draw() {
      context!.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context!.fillRect(0, 0, canvas!.width, canvas!.height);

      context!.fillStyle = '#D4AF37';
      context!.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const character = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        context!.fillText(character, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-40" />;
}
