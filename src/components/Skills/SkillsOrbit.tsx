import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const SkillsOrbit: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const skills = [
    { name: 'Python', color: '#3776ab', position: [3, 0, 0] },
    { name: 'TensorFlow', color: '#ff6f00', position: [0, 3, 0] },
    { name: 'React', color: '#61dafb', position: [-3, 0, 0] },
    { name: 'SQL', color: '#336791', position: [0, -3, 0] },
    { name: 'Scikit-learn', color: '#f7931e', position: [2.1, 2.1, 0] },
    { name: 'Node.js', color: '#339933', position: [-2.1, 2.1, 0] },
    { name: 'MongoDB', color: '#47a248', position: [-2.1, -2.1, 0] },
    { name: 'OpenCV', color: '#5c3ee8', position: [2.1, -2.1, 0] },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <group key={skill.name} position={skill.position as [number, number, number]}>
          <Sphere args={[0.3]} position={[0, 0, 0]}>
            <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.2} />
          </Sphere>
          <Text
            position={[0, -0.6, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          >
            {skill.name}
          </Text>
        </group>
      ))}
      
      {/* Central core */}
      <Sphere args={[0.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.3} />
      </Sphere>
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </group>
  );
};

export default SkillsOrbit;