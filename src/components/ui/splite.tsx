'use client'

import { Suspense, lazy, useEffect, useState, useRef } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleOnLoad = () => {
    window.dispatchEvent(new CustomEvent('spline-loaded'));
  };

  return (
    <div ref={containerRef} className={className}>
        <Suspense fallback={null}>
          <Spline
            scene={scene}
            className="w-full h-full"
            onLoad={handleOnLoad}
          />
        </Suspense>
    </div>
  )
}
