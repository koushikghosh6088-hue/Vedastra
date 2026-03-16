'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Sphere, Icosahedron, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroEnvironment() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const pointsPositions = useMemo(() => {
    const pos = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const { clock, mouse } = state;
    const t = clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
    }

    if (groupRef.current) {
      // Gentle tilt following mouse
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.3, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.3, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron ref={meshRef} args={[1, 15]} position={[2, 0, 0]}>
          <MeshDistortMaterial
            color="#0ea5e9"
            speed={3}
            distort={0.4}
            radius={1}
            wireframe
            transparent
            opacity={0.3}
          />
        </Icosahedron>
      </Float>

      {/* Internal Core Glow */}
      <Sphere args={[0.5, 32, 32]} position={[2, 0, 0]}>
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.1} />
      </Sphere>

      {/* Floating Particle Field */}
      <Points positions={pointsPositions}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Ambient Lighting */}
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#0ea5e9" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
      <ambientLight intensity={0.5} />
    </group>
  );
}
