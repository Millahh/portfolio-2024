/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Dice = () => {
    const dice = useGLTF('./dice/scene.gltf')
    return (
        <mesh>
            <directionalLight position={[1, 2, 2]} intensity={10}/>
            <primitive 
                object={dice.scene} 
                scale={500} 
                position={[0, 0, 0]} 
                rotation={[0, -0.2, -0.1]}
                />    
        </mesh>
    )
}

const DiceCanvas = () => {
    return (
        <Canvas 
            frameloop="demand"
            shadows
            camera={{ position: [200, 100, 100], fov: 5}}
            gl={{ preserveDrawingBuffer: true}}
            >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Dice />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}
export default DiceCanvas;