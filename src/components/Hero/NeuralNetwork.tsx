import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

const NeuralNetwork: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  const nodeCount = 50;
  
  const [positions, connections] = useMemo(() => {
    const positions = new Float32Array(nodeCount * 3);
    const connections: [number, number][] = [];

    // Create nodes in 3D space
    for (let i = 0; i < nodeCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < 4 && Math.random() > 0.7) {
          connections.push([i, j]);
        }
      }
    }

    return [positions, connections];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      pointsRef.current.rotation.x = mouse.y * viewport.height * 0.0002;
      pointsRef.current.rotation.z = mouse.x * viewport.width * 0.0002;
    }
    
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      linesRef.current.rotation.x = mouse.y * viewport.height * 0.0002;
      linesRef.current.rotation.z = mouse.x * viewport.width * 0.0002;
    }
  });

  return (
    <group>
      {/* Neural Network Nodes */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#14b8a6"
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Neural Network Connections */}
      <group ref={linesRef}>
        {connections.map(([start, end], index) => {
          const startPos = [
            positions[start * 3],
            positions[start * 3 + 1],
            positions[start * 3 + 2]
          ] as [number, number, number];
          
          const endPos = [
            positions[end * 3],
            positions[end * 3 + 1],
            positions[end * 3 + 2]
          ] as [number, number, number];

          return (
            <Line
              key={index}
              points={[startPos, endPos]}
              color="#14b8a6"
              opacity={0.3}
              transparent
              lineWidth={1}
            />
          );
        })}
      </group>

      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#14b8a6" />
    </group>
  );
};

export default NeuralNetwork;