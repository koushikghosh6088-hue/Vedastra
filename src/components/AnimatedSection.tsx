'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: directionMap[direction].y,
        x: directionMap[direction].x,
        scale: 0.98,
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0,
        scale: 1,
      } : {}}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1], // Cinematic quintic ease
      }}
      className={className}
      style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
    >
      {children}
    </motion.div>
  );
}
