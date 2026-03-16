'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const target = e.target as HTMLElement;
      
      // Select all interactive elements
      const interactive = target?.closest('button, a, .magnetic-wrap, [data-cursor-text], input, select, textarea');

      if (interactive) {
        const isMagnetic = interactive.classList.contains('magnetic-wrap') || 
                          ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'].includes(interactive.tagName);
        const cursorText = (interactive as HTMLElement).getAttribute('data-cursor-text');

        if (isMagnetic) {
          gsap.to(cursor, {
            scale: 2.5,
            opacity: 0.15,
            backgroundColor: '#0ea5e9',
            duration: 0.3
          });
          gsap.to(follower, {
            x,
            y,
            scale: 1.5,
            borderColor: '#0ea5e9',
            borderWidth: '2px',
            backgroundColor: 'rgba(14, 165, 233, 0.05)',
            duration: 0.3
          });
        } else if (cursorText) {
          gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.2 });
          gsap.to(follower, {
            x,
            y,
            scale: 4,
            backgroundColor: 'rgba(14, 165, 233, 0.1)',
            borderColor: '#0ea5e9',
            duration: 0.3
          });
          
          const textEl = follower.querySelector('.cursor-text');
          if (textEl) {
            textEl.textContent = cursorText;
            gsap.to(textEl, { opacity: 1, scale: 1, duration: 0.3 });
          }
        }
      } else {
        // Default state
        gsap.to(cursor, {
          x,
          y,
          scale: 1,
          opacity: 1,
          backgroundColor: '#0ea5e9',
          duration: 0.1,
          ease: 'none'
        });

        gsap.to(follower, {
          x,
          y,
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderWidth: '1px',
          duration: 0.4,
          ease: 'power3.out'
        });

        const textEl = follower.querySelector('.cursor-text');
        if (textEl) {
          gsap.to(textEl, { opacity: 0, scale: 0.5, duration: 0.2 });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-screen"
        style={{ boxShadow: '0 0 10px #0ea5e9' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[9998] hidden md:block flex items-center justify-center overflow-hidden"
      >
        <span className="cursor-text text-[6px] font-mono font-bold text-blue-400 opacity-0 scale-50 uppercase tracking-tighter" />
      </div>
    </>
  );
}
