import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function NeuralOrb() {
  const meshRef = useRef()
  const particlesRef = useRef()

  const particlePositions = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.2 + Math.random() * 1.2
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
  }, [])

  const particleSizes = useMemo(() => {
    const count = 200
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      sizes[i] = Math.random() * 0.03 + 0.01
    }
    return sizes
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.2
      meshRef.current.rotation.y = t * 0.08
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.03
      particlesRef.current.rotation.x = Math.sin(t * 0.1) * 0.1
    }
  })

  return (
    <group>
      {/* Central orb */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 8]} />
          <MeshDistortMaterial
            color="#1a1a2e"
            roughness={0.2}
            metalness={0.9}
            distort={0.25}
            speed={1.5}
            envMapIntensity={0.8}
          />
        </mesh>
      </Float>

      {/* Inner glow sphere */}
      <mesh scale={1.6}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#4f7df5" transparent opacity={0.04} />
      </mesh>

      {/* Orbital ring 1 */}
      <mesh rotation={[Math.PI / 3, 0, 0]} scale={2.8}>
        <torusGeometry args={[1, 0.003, 16, 100]} />
        <meshBasicMaterial color="#4f7df5" transparent opacity={0.2} />
      </mesh>

      {/* Orbital ring 2 */}
      <mesh rotation={[Math.PI / 5, Math.PI / 4, 0]} scale={3.2}>
        <torusGeometry args={[1, 0.002, 16, 100]} />
        <meshBasicMaterial color="#7c5bf5" transparent opacity={0.12} />
      </mesh>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={200}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#4f7df5"
          transparent
          opacity={0.6}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

export default function HeroScene() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#4f7df5" />
        <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#7c5bf5" />
        <pointLight position={[0, 0, 3]} intensity={0.4} color="#4f7df5" />
        <NeuralOrb />
      </Canvas>
    </div>
  )
}
