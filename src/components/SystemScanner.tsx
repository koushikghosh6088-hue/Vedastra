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

    // Rotate core mesh
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.z = t * 0.1;
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
        {/* The Diagnostic Core */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <MeshDistortMaterial
            color="#0ea5e9"
            speed={3}
            distort={0.4}
            radius={1}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        <mesh scale={0.9}>
          <sphereGeometry args={[1.2, 16, 16]} />
          <MeshTransmissionMaterial
            backside
            samples={2}
            thickness={2}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#0ea5e9"
          />
        </mesh>

        {/* Scanning Beam Visual */}
        <group ref={beamRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.3, 1.35, 32]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.6} side={THREE.DoubleSide} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.01]}>
            <ringGeometry args={[0, 1.3, 32]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.05} side={THREE.DoubleSide} />
          </mesh>
          <pointLight color="#ef4444" intensity={5} distance={3} />
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
