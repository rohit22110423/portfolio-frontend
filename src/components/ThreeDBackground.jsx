import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// This component creates the starfield background
function Starfield() {
  return (
    <Stars 
      radius={100} 
      depth={50} 
      count={5000} 
      factor={4} 
      saturation={0} 
      fade 
    />
  );
}

// This component is for the rotating 3D shape and mouse-aware lighting
function Scene() {
  const meshRef = useRef();
  const lightRef = useRef();
  const { viewport, mouse } = useThree();

  useFrame((state, delta) => {
    // Animate the shape's rotation
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.2;
    }
    
    // Make the light follow the mouse position
    if (lightRef.current) {
      lightRef.current.position.x = (mouse.x * viewport.width) / 2;
      lightRef.current.position.y = (mouse.y * viewport.height) / 2;
    }
  });

  return (
    <>
      {/* A soft ambient light for the whole scene */}
      <ambientLight intensity={0.2} />
      {/* The point light that will follow the mouse */}
      <pointLight ref={lightRef} position={[0, 0, 5]} intensity={1.5} color="#64ffda" />

      {/* The main rotating shape */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial 
          wireframe 
          color="#64ffda" // Your neon-green accent
          emissive="#0a192f"
          roughness={0.75}
        />
      </mesh>
    </>
  );
}

// This is the main component that sets up the 3D scene
const ThreeDBackground = () => {
  return (
    <div className="three-d-background">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Starfield />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;