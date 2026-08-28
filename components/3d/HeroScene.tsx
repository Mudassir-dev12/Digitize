"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

// Inner Kinetic Core Object with Responsive Scaling
function MorphingCore({ mousePosRef }: { mousePosRef: React.MutableRefObject<{ normX: number; normY: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const { size } = useThree();

  // Compute responsive scale factor based on screen width
  const responsiveScale = useMemo(() => {
    const width = size.width;
    if (width < 480) return 0.52;        // Small Mobile (iPhone, SE)
    if (width < 640) return 0.62;        // Standard Mobile
    if (width < 768) return 0.72;        // Large Mobile / Mini Tablet
    if (width < 1024) return 0.82;       // Tablet / iPad
    if (width < 1440) return 0.95;       // Laptop / Desktop
    return 1.1;                          // Ultra-wide / 4K Displays
  }, [size.width]);

  useFrame((state, delta) => {
    const targetX = mousePosRef.current.normX * 0.4;
    const targetY = mousePosRef.current.normY * 0.4;

    // Smoothly lerp group scale for fluid resize & orientation change transitions
    if (groupRef.current) {
      groupRef.current.scale.lerp(
        new THREE.Vector3(responsiveScale, responsiveScale, responsiveScale),
        0.05
      );
    }

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, meshRef.current.rotation.x + targetY * 0.1, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, meshRef.current.rotation.y + targetX * 0.1, 0.05);
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y -= delta * 0.25;
      wireframeRef.current.rotation.z += delta * 0.1;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.4;
      ringRef1.current.rotation.y += delta * 0.2;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.x -= delta * 0.3;
      ringRef2.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Inner Distorted Crystalline Mesh */}
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#2563eb"
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={2.2}
          wireframe={false}
        />
      </mesh>

      {/* Outer Geometric Wireframe Cage */}
      <mesh ref={wireframeRef} scale={2.4}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#1d4ed8"
          wireframe
          transparent
          opacity={0.4}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Orbital Tech Ring 1 */}
      <mesh ref={ringRef1} scale={3.1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1, 0.012, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
      </mesh>

      {/* Orbital Tech Ring 2 */}
      <mesh ref={ringRef2} scale={3.6} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[1, 0.008, 16, 100]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

// Surrounding Interactive Particle Dust Field with Dynamic Density
function ParticleField({ mousePosRef }: { mousePosRef: React.MutableRefObject<{ normX: number; normY: number }> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { size } = useThree();

  const particleCount = useMemo(() => {
    if (size.width < 640) return 140;   // Optimized for mobile GPUs
    if (size.width < 1024) return 200;  // Optimized for tablets
    return 280;                         // Full density for desktop
  }, [size.width]);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const color1 = new THREE.Color("#2563eb");
    const color2 = new THREE.Color("#1d4ed8");
    const color3 = new THREE.Color("#60a5fa");

    const baseRadius = size.width < 640 ? 2.5 : 3.5;
    const spreadRadius = size.width < 640 ? 3.5 : 5.5;

    for (let i = 0; i < particleCount; i++) {
      const radius = baseRadius + Math.random() * spreadRadius;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? color1 : Math.random() > 0.5 ? color2 : color3;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [particleCount, size.width]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      mousePosRef.current.normY * 0.15,
      0.05
    );
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(
      pointsRef.current.rotation.y,
      pointsRef.current.rotation.y + mousePosRef.current.normX * 0.02,
      0.05
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size.width < 640 ? 0.045 : 0.035}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Camera Rig with Screen-Adaptive Parallax
function CameraRig({ mousePosRef }: { mousePosRef: React.MutableRefObject<{ normX: number; normY: number }> }) {
  const { size } = useThree();

  useFrame((state) => {
    // Dampen parallax displacement on smaller screens to keep object framed
    const parallaxMult = size.width < 640 ? 0.35 : size.width < 1024 ? 0.55 : 0.8;
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      mousePosRef.current.normX * parallaxMult,
      0.04
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      mousePosRef.current.normY * (parallaxMult * 0.75),
      0.04
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  const { mousePosRef } = useMousePosition();

  return (
    <div className="w-full h-full relative pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.8} color="#2563eb" />
        <pointLight position={[-10, -10, -5]} intensity={1.4} color="#1d4ed8" />
        <pointLight position={[0, -5, 5]} intensity={1.0} color="#3b82f6" />

        <CameraRig mousePosRef={mousePosRef} />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <MorphingCore mousePosRef={mousePosRef} />
        </Float>

        <ParticleField mousePosRef={mousePosRef} />
      </Canvas>
    </div>
  );
}

