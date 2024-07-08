/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Dice = ({ position }) => {
    const dice = useGLTF('./dice/scene.gltf')
    return (
        <mesh position={position}>
            <directionalLight position={[30, 0, -200]} intensity={7}/>
            <primitive 
                object={dice.scene} 
                scale={500} 
                position={[0, 0, 0]} 
                rotation={[1, -5, 4]}
                />    
        </mesh>
    )
}

const DiceCanvas = () => {
    return (
        <div style={{ width: "100vw", height: "100vh"}}>
            <Canvas 
                frameloop="demand"
                shadows
                camera={{ position: [200, 40, 50], fov: 8}}
                gl={{ preserveDrawingBuffer: true}}
                >
                <Suspense fallback={<CanvasLoader />}>
                    <Physics>
                        <OrbitControls enableZoom={false} enableRotate={false}/>
                        <RigidBody gravityScale={10}>
                            <Dice position={[25, 17, 20]}/>
                        </RigidBody>
                        <RigidBody type="fixed">
                            <ambientLight intensity={10}/>
                            <Box position={[-10,1,-5]} args={[500,0.1,500]}>
                                <meshStandardMaterial color="black"/>
                            </Box>
                        </RigidBody>
                    </Physics>
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}
export default DiceCanvas;