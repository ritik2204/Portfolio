import { motion } from "framer-motion";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Animated data nodes component
function DataNodes() {
  const ref = useRef<THREE.Points>(null!);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    const colors = new Float32Array(1000 * 3);
    
    for (let i = 0; i < 1000; i++) {
      // Create clusters representing different data domains
      const cluster = Math.floor(Math.random() * 4);
      const clusterCenter = [
        [-2, 1, 0],   // ML cluster
        [2, 1, 0],    // Computer Vision cluster  
        [0, -1, 2],   // NLP cluster
        [0, 1, -2]    // Analytics cluster
      ][cluster];
      
      positions[i * 3] = clusterCenter[0] + (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = clusterCenter[1] + (Math.random() - 0.5) * 2;
      positions[i * 3 + 2] = clusterCenter[2] + (Math.random() - 0.5) * 2;
      
      // Color coding for different data types
      const color = [
        [0.2, 0.6, 1],    // Blue for ML
        [0.8, 0.2, 0.9],  // Purple for CV
        [0.2, 0.9, 0.4],  // Green for NLP
        [0.9, 0.6, 0.2]   // Orange for Analytics
      ][cluster];
      
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={2}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Neural network connections
function NeuralConnections() {
  const ref = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < 20; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
      lines.push({ start, end });
    }
    return lines;
  }, []);

  return (
    <group ref={ref}>
      {connections.map((connection, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                connection.start.x, connection.start.y, connection.start.z,
                connection.end.x, connection.end.y, connection.end.z
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#4F46E5" 
            transparent 
            opacity={0.2} 
            linewidth={1}
          />
        </line>
      ))}
    </group>
  );
}

const DataVisualization = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        className="absolute inset-0"
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#4F46E5" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#7C3AED" />
        
        <DataNodes />
        <NeuralConnections />
        
        {/* Floating geometric shapes */}
        <group>
          <mesh position={[3, 2, -2]}>
            <icosahedronGeometry args={[0.3]} />
            <meshPhongMaterial 
              color="#4F46E5" 
              transparent 
              opacity={0.6} 
              wireframe 
            />
          </mesh>
          <mesh position={[-3, -1, 1]}>
            <octahedronGeometry args={[0.4]} />
            <meshPhongMaterial 
              color="#7C3AED" 
              transparent 
              opacity={0.5} 
              wireframe 
            />
          </mesh>
          <mesh position={[0, 2, -3]}>
            <dodecahedronGeometry args={[0.35]} />
            <meshPhongMaterial 
              color="#EC4899" 
              transparent 
              opacity={0.4} 
              wireframe 
            />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
};

export default DataVisualization;