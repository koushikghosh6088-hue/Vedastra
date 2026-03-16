'use client';

import { Canvas } from '@react-three/fiber';
import { View, Preload } from '@react-three/drei';
import { useRef } from 'react';

export default function PerformanceManager({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} className="relative w-full">
      {children}
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: -1,
        }}
        eventSource={container as any}
        frameloop="always" // Use always for smooth transitions, but keep DPR low
        dpr={[1, 1.5]}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false
        }}
        performance={{ min: 0.5 }}
      >
        <View.Port />
        <Preload all />
      </Canvas>
    </div>
  );
}
