import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleGalaxy: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();

  const particlesCount = 3000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      
      // Galaxy spiral pattern
      const radius = Math.random() * 20;
      const spinAngle = radius * 0.3;
      const branchAngle = (i % 3) * (Math.PI * 2) / 3;

      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1);
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1);
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1);

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color gradient from center to edge
      const mixedColor = new THREE.Color();
      const innerColor = new THREE.Color('#0ea5e9');
      const outerColor = new THREE.Color('#8b5cf6');
      
      mixedColor.lerpColors(innerColor, outerColor, radius / 20);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Slow rotation
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Mouse interaction
      ref.current.rotation.x = mouse.y * viewport.height * 0.0001;
      ref.current.rotation.z = mouse.x * viewport.width * 0.0001;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
        <bufferAttribute
          attach="geometry-attributes-color"
          args={[colors, 3]}
        />
      </Points>
    </group>
  );
};

export default ParticleGalaxy;