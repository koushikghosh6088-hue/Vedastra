'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Initialize trail particles
    const particles: HTMLDivElement[] = [];
    const particleCount = 20; // High count for smooth trail
    
    const trailContainer = document.createElement('div');
    trailContainer.className = "fixed inset-0 pointer-events-none z-[9997]";
    document.body.appendChild(trailContainer);

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.style.cssText = `
        position: absolute;
        width: ${4 - (i * 0.15)}px;
        height: ${4 - (i * 0.15)}px;
        background: #0ea5e9;
        border-radius: 50%;
        opacity: ${0.4 - (i * 0.02)};
        pointer-events: none;
      `;
      trailContainer.appendChild(p);
      particles.push(p);
    }
    trailRef.current = particles;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const target = e.target as HTMLElement;
      const interactive = target?.closest('button, a, .magnetic-wrap, [data-cursor-text]');

      if (interactive) {
        const isMagnetic = interactive.classList.contains('magnetic-wrap') || interactive.tagName === 'BUTTON' || interactive.tagName === 'A';
        const cursorText = (interactive as HTMLElement).getAttribute('data-cursor-text');

        if (isMagnetic) {
          const bounds = interactive.getBoundingClientRect();
          const centerX = bounds.left + bounds.width / 2;
          const centerY = bounds.top + bounds.height / 2;

          // Snap follower to center
          gsap.to(follower, {
            x: centerX,
            y: centerY,
            scale: 2,
            backgroundColor: 'rgba(14, 165, 233, 0.1)',
            borderColor: 'rgba(14, 165, 233, 0.5)',
            duration: 0.3,
            ease: 'power2.out'
          });
          
          gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.2 });
        } else if (cursorText) {
          // Expand for text
          gsap.to(follower, {
            x,
            y,
            scale: 3,
            backgroundColor: 'rgba(14, 165, 233, 0.2)',
            borderColor: 'rgba(14, 165, 233, 0.8)',
            duration: 0.3
          });
          gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.2 });
          
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
          duration: 0.1,
          ease: 'power2.out'
        });

        gsap.to(follower, {
          x,
          y,
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          duration: 0.4,
          ease: 'power3.out'
        });

        const textEl = follower.querySelector('.cursor-text');
        if (textEl) {
          gsap.to(textEl, { opacity: 0, scale: 0.5, duration: 0.2 });
        }
      }

      // Trail
      particles.forEach((p, i) => {
        gsap.to(p, {
          x,
          y,
          duration: 0.15 + (i * 0.02),
          ease: 'power1.out'
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trailContainer.remove();
    };
  }, []);

  return (
    <>
      {/* Main Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-screen"
        style={{ boxShadow: '0 0 10px #0ea5e9' }}
      />
      {/* Follower Lens */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block backdrop-blur-[2px] flex items-center justify-center overflow-hidden"
      >
        <span className="cursor-text text-[8px] font-mono font-bold text-blue-400 opacity-0 scale-50 uppercase tracking-tighter" />
      </div>
    </>
  );
}
