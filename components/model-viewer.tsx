"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Center } from "@react-three/drei"
import { Suspense } from "react"

function Model({ modelPath }: { modelPath: string }) {
  const model = useGLTF(modelPath)

  return (
    <Center>
      <primitive object={model.scene} scale={2} />
    </Center>
  )
}

export default function ModelViewer({ modelPath }: { modelPath: string }) {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 45 }} className="w-full h-full">
      <color attach="background" args={["#f0f0f0"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  )
}

