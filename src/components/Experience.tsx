import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Neural Network Nodes Component
function NeuralNodes() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = new Float32Array(2000 * 3);
  for (let i = 0; i < 2000; i++) {
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 20;
    
    particlesPosition[i * 3] = x;
    particlesPosition[i * 3 + 1] = y;
    particlesPosition[i * 3 + 2] = z;
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8AB4FF"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

// Floating Geometric Shapes
function FloatingShapes() {
  const icosahedronRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      icosahedronRef.current.rotation.y = t * 0.2;
      icosahedronRef.current.position.y = Math.sin(t * 0.4) * 0.5;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.15;
      torusRef.current.rotation.z = Math.sin(t * 0.25) * 0.3;
      torusRef.current.position.x = Math.sin(t * 0.3) * 2;
    }
    
    if (octahedronRef.current) {
      octahedronRef.current.rotation.y = t * 0.25;
      octahedronRef.current.rotation.z = Math.cos(t * 0.2) * 0.2;
      octahedronRef.current.position.z = Math.cos(t * 0.35) * 1.5;
    }
  });

  const sharedMaterial = (
    <meshPhongMaterial
      color="#8AB4FF"
      transparent
      opacity={0.6}
      wireframe={false}
    />
  );

  return (
    <>
      <mesh ref={icosahedronRef} position={[-3, 1, -2]}>
        <icosahedronGeometry args={[0.8]} />
        {sharedMaterial}
      </mesh>
      
      <mesh ref={torusRef} position={[2, -1, -1]}>
        <torusGeometry args={[0.6, 0.25, 16, 32]} />
        {sharedMaterial}
      </mesh>
      
      <mesh ref={octahedronRef} position={[0, 2, -3]}>
        <octahedronGeometry args={[0.7]} />
        {sharedMaterial}
      </mesh>
    </>
  );
}

// Main 3D Scene Component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#8AB4FF" />
      
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={2}
        saturation={0}
        fade
      />
      
      <NeuralNodes />
      <FloatingShapes />
      
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

// Main Experience Component with Fallback
const Experience = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Experience;