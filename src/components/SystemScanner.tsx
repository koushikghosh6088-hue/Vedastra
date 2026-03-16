'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function SystemScanner() {
  const meshRef = useRef<THREE.Mesh>(null);
  const beamRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);

  // Generate data-stream particles
  const particles = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 60; i++) {
      pts.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        ),
        speed: 0.01 + Math.random() * 0.02
      });
    }
    return pts;
  }, []);

  useFrame((state) => {
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
        child.position.y += particles[i].speed;
        if (child.position.y > 2) child.position.y = -2;
        child.rotation.x += 0.01;
        child.rotation.z += 0.01;
      });
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* The Diagnostic Computer/Terminal Model */}
        <group ref={meshRef}>
          {/* Main Monitor Case */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2.5, 1.8, 0.4]} />
            <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={0.8} />
          </mesh>

          {/* Screen Surface (Glowing) */}
          <mesh position={[0, 0, 0.21]}>
            <planeGeometry args={[2.3, 1.6]} />
            <MeshTransmissionMaterial
              backside
              samples={2}
              thickness={0.5}
              chromaticAberration={0.05}
              anisotropy={0.1}
              distortion={0.2}
              distortionScale={0.5}
              temporalDistortion={0.1}
              color="#0ea5e9"
              transparent
              opacity={0.8}
            />
          </mesh>

          {/* Inner Electronic "Core" (Visible through screen) */}
          <mesh position={[0, 0, 0.05]}>
            <boxGeometry args={[2.1, 1.4, 0.1]} />
            <MeshDistortMaterial
              color="#0ea5e9"
              speed={2}
              distort={0.3}
              radius={1}
              wireframe
              transparent
              opacity={0.1}
            />
          </mesh>

          {/* Monitor Stand */}
          <mesh position={[0, -1.2, -0.1]}>
            <boxGeometry args={[0.3, 0.8, 0.1]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
          <mesh position={[0, -1.6, 0]}>
            <boxGeometry args={[1, 0.1, 0.8]} />
            <meshStandardMaterial color="#0f172a" />
          </mesh>

          {/* Glowing Status Lights */}
          <mesh position={[-1.0, -0.7, 0.22]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshBasicMaterial color="#ef4444" />
          </mesh>
          <mesh position={[-0.9, -0.7, 0.22]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshBasicMaterial color="#10b981" />
          </mesh>
        </group>

        {/* Scanning Beam Visual */}
        <group ref={beamRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[2.6, 2.65, 32]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.6} side={THREE.DoubleSide} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.01]}>
            <ringGeometry args={[0, 2.6, 32]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.05} side={THREE.DoubleSide} />
          </mesh>
          <pointLight color="#ef4444" intensity={8} distance={4} />
        </group>

        {/* Neural Data Particles */}
        <group ref={particlesRef}>
          {particles.map((p, i) => (
            <mesh key={i} position={p.position}>
              <boxGeometry args={[0.02, 0.02, 0.02]} />
              <meshBasicMaterial color={i % 2 === 0 ? "#0ea5e9" : "#ef4444"} transparent opacity={0.4} />
            </mesh>
          ))}
        </group>

        {/* Ambient background grid lines */}
        <gridHelper args={[10, 20, "#1e293b", "#0f172a"]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -2]} />
      </group>
    </Float>
  );
}
