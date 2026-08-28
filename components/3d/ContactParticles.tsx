"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

function ReactiveGrid({ mousePosRef }: { mousePosRef: React.MutableRefObject<{ normX: number; normY: number }> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { size } = useThree();

  const { rows, cols, spacing } = useMemo(() => {
    if (size.width < 640) return { rows: 22, cols: 22, spacing: 0.35 };
    if (size.width < 1024) return { rows: 28, cols: 28, spacing: 0.40 };
    return { rows: 35, cols: 35, spacing: 0.45 };
  }, [size.width]);

  const count = rows * cols;

  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initPos = new Float32Array(count * 3);

    let idx = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = (j - cols / 2) * spacing;
        const y = (i - rows / 2) * spacing;
        const z = 0;

        pos[idx * 3] = x;
        pos[idx * 3 + 1] = y;
        pos[idx * 3 + 2] = z;

        initPos[idx * 3] = x;
        initPos[idx * 3 + 1] = y;
        initPos[idx * 3 + 2] = z;
        idx++;
      }
    }
    return [pos, initPos];
  }, [count, rows, cols, spacing]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const geometry = pointsRef.current.geometry;
    const positionAttr = geometry.attributes.position;
    const time = state.clock.getElapsedTime();

    const mouseX = mousePosRef.current.normX * 6;
    const mouseY = mousePosRef.current.normY * 6;

    for (let i = 0; i < count; i++) {
      const ix = initialPositions[i * 3];
      const iy = initialPositions[i * 3 + 1];

      // Distance to cursor
      const dx = ix - mouseX;
      const dy = iy - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Wave ripple equation
      const wave = Math.sin(dist * 2.0 - time * 3.0) * 0.25;
      const mouseDistortion = Math.max(0, 1.2 - dist * 0.5) * 0.8;

      positionAttr.setZ(i, wave + mouseDistortion);
    }

    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} position={[0, 0, 0]} rotation={[-Math.PI / 4, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size.width < 640 ? 0.045 : 0.035}
        color="#2563eb"
        transparent
        opacity={0.75}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ContactParticles() {
  const { mousePosRef } = useMousePosition();

  return (
    <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
      <Canvas
        camera={{ position: [0, -3, 8], fov: 50 }}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        dpr={[1, 1]}
      >
        <ReactiveGrid mousePosRef={mousePosRef} />
      </Canvas>
    </div>
  );
}

