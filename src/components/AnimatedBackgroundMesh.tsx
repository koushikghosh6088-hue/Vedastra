'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

function MeshBackground() {
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
      float glow = 1.0 - smoothstep(0.0, 0.8, dist);
      
      // Wave effect
      float wave = sin(uv.x * 12.0 + uTime) * cos(uv.y * 12.0 + uTime) * 0.2;
      pos.z += wave + (glow * 0.5);
      
      vZ = pos.z;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    varying float vZ;
    uniform float uTime;

    void main() {
      // Create a grid pattern
      vec2 grid = abs(fract(vUv * 40.0 - 0.5) - 0.5) / fwidth(vUv * 40.0);
      float line = min(grid.x, grid.y);
      float gridAlpha = 1.0 - smoothstep(0.0, 1.0, line);
      
      // Color based on height (vZ)
      vec3 color = mix(vec3(0.02), vec3(0.05, 0.2, 0.4), vZ + 0.2);
      
      // Add pulsing glow to grid lines
      float pulse = (sin(uTime * 2.0) * 0.5 + 0.5) * 0.1;
      float finalAlpha = (gridAlpha * 0.1) + pulse;
      
      gl_FragColor = vec4(color, finalAlpha);
    }
  `;

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) }
  }), []);

  useFrame((state) => {
    const { clock, mouse: stateMouse } = state;
    uniforms.uTime.value = clock.getElapsedTime();
    
    // Smoothly interpolate mouse position
    mouse.current.x += (stateMouse.x * 0.5 + 0.5 - mouse.current.x) * 0.05;
    mouse.current.y += (stateMouse.y * 0.5 + 0.5 - mouse.current.y) * 0.05;
    uniforms.uMouse.value.set(mouse.current.x, mouse.current.y);

    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Plane ref={meshRef} args={[20, 20, 64, 64]} rotation={[-Math.PI / 3, 0, 0]}>
      <shaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </Plane>
  );
}

import { View } from '@react-three/drei';

export default function AnimatedBackgroundMesh() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      <View track={container as any}>
        <MeshBackground />
      </View>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </div>
  );
}
