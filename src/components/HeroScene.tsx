'use client'

import * as THREE from 'three'
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y += 0.005
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main central cube */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#0ea5e9"
          metalness={0.8}
          roughness={0.2}
          emissive="#0ea5e9"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Orbiting smaller cubes */}
      {[0, 1, 2, 3].map(i => (
        <mesh
          key={i}
          position={[Math.cos(i * Math.PI * 0.5) * 3, 0, Math.sin(i * Math.PI * 0.5) * 3]}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial
            color="#d946ef"
            metalness={0.9}
            roughness={0.1}
            emissive="#d946ef"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}

      {/* Wireframe sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshBasicMaterial color="#0ea5e9" wireframe opacity={0.1} transparent />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#d946ef" />

      <Suspense fallback={null}>
        <RotatingCube />
        <Environment preset="city" />
      </Suspense>
    </>
  )
}

export function HeroScene() {
  return (
    <Canvas className="w-full h-full" gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
      <Scene />
    </Canvas>
  )
}
