'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const SCAN_PARTICLES = Array.from({ length: 60 }).map(() => ({
  position: new THREE.Vector3(
    (Math.random() - 0.5) * 4,
    (Math.random() - 0.5) * 4,
    (Math.random() - 0.5) * 4
  ),
  speed: 0.01 + Math.random() * 0.02
}));

export default function SystemScanner() {
  const meshRef = useRef<THREE.Mesh>(null);
  const beamRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);
  const isInView = useRef(true);

  useFrame((state) => {
    if (!isInView.current) return;
    const t = state.clock.getElapsedTime();
    
    // Animate scanning beam
    if (beamRef.current) {
      beamRef.current.position.y = Math.sin(t * 1.5) * 2;
    }

    // Rotate computer model slightly
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.cos(t * 0.3) * 0.1;
    }

    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        child.position.y += SCAN_PARTICLES[i].speed;
        if (child.position.y > 2) child.position.y = -2;
        child.rotation.x += 0.01;
        child.rotation.z += 0.01;
      });
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group 
        onPointerEnter={() => { isInView.current = true; }}
        onPointerLeave={() => { /* keep active */ }}
      >
        {/* The Diagnostic Luxury Mainframe (Red & Chrome - High Visibility) */}
        <group ref={meshRef}>
          {/* Main Chassis: Polished Red & Chrome */}
          <mesh position={[0, -0.2, 0]}>
            <boxGeometry args={[4.5, 2.2, 0.4]} />
            <meshStandardMaterial 
              color="#ef4444" 
              roughness={0.05} 
              metalness={1} 
              emissive="#ef4444"
              emissiveIntensity={0.05}
            />
          </mesh>

          {/* Platinum Internal Frame */}
          <mesh position={[0, -0.2, 0.05]}>
            <boxGeometry args={[4.3, 2.0, 0.35]} />
            <meshStandardMaterial 
              color="#ffffff" 
              roughness={0.1} 
              metalness={1}
            />
          </mesh>

          {/* High-Contrast Glass Display Overlay */}
          <mesh position={[0, -0.2, 0.25]}>
            <planeGeometry args={[4.1, 1.8]} />
            <MeshTransmissionMaterial
              backside
              samples={8}
              thickness={0.1}
              chromaticAberration={0.05}
              anisotropy={1}
              distortion={0}
              color="#000000"
              transmission={0.8}
            />
          </mesh>

          {/* Luxury Detail: Red Side Pylons */}
          <mesh position={[-2.4, -0.2, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 2.6, 6]} />
            <meshStandardMaterial color="#ef4444" metalness={1} roughness={0.1} />
          </mesh>
          <mesh position={[2.4, -0.2, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 2.6, 6]} />
            <meshStandardMaterial color="#ef4444" metalness={1} roughness={0.1} />
          </mesh>

          {/* Floating Red Neon "Brain" Core */}
          <group position={[0, -0.2, 0.1]}>
             <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <MeshDistortMaterial
                  color="#ef4444"
                  speed={4}
                  distort={0.4}
                  radius={1}
                  emissive="#ef4444"
                  emissiveIntensity={2}
                />
             </mesh>
             <pointLight color="#ef4444" intensity={15} distance={3} />
          </group>

          {/* Technical Detail: Red Mechanical Blades (Base) */}
          <mesh position={[0, -1.8, -0.2]}>
             <boxGeometry args={[1.5, 1.2, 0.05]} />
             <meshStandardMaterial color="#ef4444" metalness={1} roughness={0.05} />
          </mesh>
          <mesh position={[0, -2.4, 0]}>
             <boxGeometry args={[3.5, 0.1, 2.5]} />
             <meshStandardMaterial color="#050505" roughness={0} metalness={1} />
          </mesh>

          {/* Status Indicators: White LEDs */}
          <mesh position={[-1.9, -1.0, 0.26]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[-1.75, -1.0, 0.26]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#ffffff" opacity={0.4} transparent />
          </mesh>
        </group>

        {/* Orbiting Tech Rings (High-Impact Red) */}
        <group rotation={[Math.PI / 3, 0, 0]}>
          <mesh>
            <torusGeometry args={[5.2, 0.02, 16, 100]} />
            <meshStandardMaterial color="#ef4444" metalness={1} roughness={0.1} emissive="#ef4444" emissiveIntensity={0.2} />
          </mesh>
        </group>

        {/* The Scanning Ring (Restored Intense Red for Diagnostic Impact) */}
        <group ref={beamRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[4.2, 4.3, 64]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.95} side={THREE.DoubleSide} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.01]}>
            <ringGeometry args={[0, 4.2, 64]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.15} side={THREE.DoubleSide} />
          </mesh>
          <pointLight color="#ef4444" intensity={20} distance={8} />
        </group>


        {/* Data Stream Particles (High Visibility Platinum) */}
        <group ref={particlesRef}>
          {SCAN_PARTICLES.map((p, i) => (
            <mesh key={i} position={p.position}>
              <boxGeometry args={[0.02, 0.02, 0.02]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
            </mesh>
          ))}
        </group>

        {/* Ambient background grid lines */}
        <gridHelper args={[10, 20, "#1e293b", "#0f172a"]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -2]} />
      </group>
    </Float>
  );
}
