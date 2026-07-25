import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import { inSphere } from 'maath/random';
import * as THREE from 'three';

const NeuralNetwork = (props) => {
  const ref = useRef();
  // Generate fewer particles for a cleaner look
  const sphere = useMemo(() => inSphere(new Float32Array(200 * 3), { radius: 2 }), []);
  
  // Create connections (lines) between close particles to form a neural network
  const lines = useMemo(() => {
    const tempLines = [];
    // Check a subset of particles for connections
    for (let i = 0; i < 100; i++) {
      for (let j = i + 1; j < 100; j++) {
        const x1 = sphere[i * 3];
        const y1 = sphere[i * 3 + 1];
        const z1 = sphere[i * 3 + 2];
        
        const x2 = sphere[j * 3];
        const y2 = sphere[j * 3 + 1];
        const z2 = sphere[j * 3 + 2];
        
        // Calculate distance
        const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
        
        // Connect if close enough
        if (dist < 0.5) {
          tempLines.push([new THREE.Vector3(x1, y1, z1), new THREE.Vector3(x2, y2, z2)]);
        }
      }
    }
    return tempLines;
  }, [sphere]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00E5FF"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {lines.map((points, index) => (
        <Line 
          key={index}
          points={points}
          color="#B921FF"
          lineWidth={0.5}
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      ))}
    </group>
  );
};

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 3] }}>
          <NeuralNetwork />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default HeroCanvas;
