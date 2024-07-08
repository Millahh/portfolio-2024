/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Dice = ({ position }) => {
    const dice = useGLTF('./dice/scene.gltf')
    const ref = useRef()

    useFrame((delta) => {
      ref.current.y += delta
    })
    return (
        <mesh position={position} ref={ref}>
            <directionalLight position={[0, 10, 5]} intensity={7}/>
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
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas 
                frameloop="demand"
                shadows
                camera={{ position: [150, 40, -150], fov: 8}}
                gl={{ preserveDrawingBuffer: true}}
                >
                <Suspense fallback={<CanvasLoader />}>
                    <Physics>
                        <OrbitControls enableZoom={false}/>
                        <RigidBody gravityScale={10}>
                            <Dice position={[25, 10, -10]}/>
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