'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  // Cast to any to bypass React 19/18 type conflicts in node_modules
  const LenisProvider = ReactLenis as any;

  return (
    <LenisProvider root options={{ 
      duration: 1.2, 
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    }}>
      {children}
    </LenisProvider>
  );
}
