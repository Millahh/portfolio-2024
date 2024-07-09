/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "./LoaderProgressBar";

const Dice = ({ position }) => {
    const dice = useGLTF('./dice/scene.gltf')
    return (
        <mesh position={position}>
            <directionalLight position={[30, 0, -200]} intensity={7}/>
            <primitive 
                object={dice.scene} 
                scale={500} 
                position={[0, 0, 0]} 
                rotation={[0, 0, -1.5]}
                />    
        </mesh>
    )
}

const Intro = () => {
    return (
        <div style={{ width: "100vw", height: "100vh"}}>
            <Canvas 
                frameloop="demand"
                shadows
                camera={{ position: [200, 40, 50], fov: 10}}
                gl={{ preserveDrawingBuffer: true}}
                >
                {/* <Suspense fallback={<Loader all/>}>
                    <Physics>
                        <OrbitControls enableZoom={false} enableRotate={false}/>
                        <RigidBody gravityScale={10}>
                            <Dice position={[30, 17, 20]}/>
                        </RigidBody>
                        <RigidBody type="fixed">
                            <ambientLight intensity={10}/>
                            <Box position={[-10,1,-5]} args={[500,0.1,500]}>
                                <meshStandardMaterial color="black"/>
                            </Box>
                        </RigidBody>
                    </Physics>
                </Suspense> */}
                <OrbitControls enableZoom={false} enableRotate={true}/>
                <Dice position={[1, 1, 1]}/>
            </Canvas>
        </div>
    )
}
export default Intro;
