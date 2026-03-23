'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane, View } from '@react-three/drei';
import * as THREE from 'three';

function NebulaBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const vertexShader = `
    varying vec2 vUv;
    varying float vZ;
    uniform float uTime;
    uniform vec2 uMouse;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Calculate distance from mouse for interaction
      float dist = distance(uv, uMouse);
      float glow = 1.0 - smoothstep(0.0, 1.2, dist);
      
      // Multi-layered Wave effect
      float wave = sin(uv.x * 8.0 + uTime * 0.5) * cos(uv.y * 8.0 + uTime * 0.5) * 0.3;
      wave += sin(uv.x * 20.0 - uTime * 0.8) * 0.1;
      
      pos.z += wave + (glow * 0.8);
      
      vZ = pos.z;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    varying float vZ;
    uniform float uTime;
    uniform vec2 uMouse;

    // Pseudo-noise function
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      // Create a grid pattern
      vec2 grid = abs(fract(vUv * 30.0 - 0.5) - 0.5) / fwidth(vUv * 30.0);
      float line = min(grid.x, grid.y);
      float gridAlpha = 1.0 - smoothstep(0.0, 1.0, line);
      
      // Nebula cloud noise
      float n = noise(vUv * 3.0 + uTime * 0.1);
      float n2 = noise(vUv * 5.0 - uTime * 0.05);
      float nebula = smoothstep(0.4, 0.6, (n + n2) * 0.5);
      
      // Dynamic colors
      vec3 baseColor = vec3(0.01, 0.01, 0.02); // Deep Obsidian
      vec3 blueNebula = vec3(0.05, 0.4, 0.8) * 0.2; // Dim Blue
      vec3 limeGlow = vec3(0.75, 1.0, 0.0) * 0.05; // Faint Neon Lime
      
      vec3 finalColor = mix(baseColor, blueNebula, nebula);
      finalColor = mix(finalColor, limeGlow, vZ * 0.5);
      
      // Add pulsing glow to grid lines
      float pulse = (sin(uTime * 1.5) * 0.5 + 0.5) * 0.05;
      float alpha = (gridAlpha * 0.05) + pulse + (vZ * 0.1);
      
      // Mouse interaction glow
      float dist = distance(vUv, uMouse);
      float mouseGlow = 1.0 - smoothstep(0.0, 0.6, dist);
      finalColor += vec3(0.05, 0.2, 0.5) * mouseGlow * 0.3;
      
      gl_FragColor = vec4(finalColor, alpha * 0.8);
    }
  `;

  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) }
  });

  useFrame((state) => {
    const { clock, mouse: stateMouse } = state;
    uniforms.current.uTime.value = clock.getElapsedTime();
    
    // Smoothly interpolate mouse position
    mouse.current.x += (stateMouse.x * 0.5 + 0.5 - mouse.current.x) * 0.05;
    mouse.current.y += (stateMouse.y * 0.5 + 0.5 - mouse.current.y) * 0.05;
    uniforms.current.uMouse.value.set(mouse.current.x, mouse.current.y);

    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <Plane ref={meshRef} args={[25, 25, 24, 24]} rotation={[-Math.PI / 4, 0, 0]}>
      <shaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </Plane>
  );
}

export default function AnimatedBackgroundMesh() {
  const [mounted, setMounted] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered initialization to avoid blocking the main thread during hydration
    const timer = setTimeout(() => setMounted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-black" />;

  return (
    <div ref={container} className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      <View track={container as any}>
        <NebulaBackground />
      </View>
    </div>
  );
}
