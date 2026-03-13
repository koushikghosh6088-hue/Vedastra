'use client'

import { Suspense, lazy, useEffect, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Delay mount so the page loads first, then 3D initializes
    const timer = setTimeout(() => setShouldRender(true), 800)
    return () => clearTimeout(timer)
  }, [])

  if (!shouldRender) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <span className="loader"></span>
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Loading 3D</span>
        </div>
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <span className="loader"></span>
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Loading 3D</span>
          </div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
