/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls} from "@react-three/drei";
import DiceCanvas from "./Dice";
import CanvasLoader from '../LoaderProgressBar';

const DiceIntro = () => {
    return (
        <div style={{ width: "100vw", height: "100vh"}}>
            <Canvas 
                frameloop="demand"
                shadows
                camera={{ position: [200, 40, 50], fov: 8}}
                gl={{ preserveDrawingBuffer: true}}
                >
                <Suspense fallback={<CanvasLoader all/>}>
                    <Physics>
                        <OrbitControls enableZoom={false} enableRotate={false}/>
                        <RigidBody gravityScale={10}>
                            <DiceCanvas position={[30, 17, 20]}/>
                        </RigidBody>
                        <RigidBody type="fixed">
                            <ambientLight intensity={10}/>
                            <Box position={[-10,1,-5]} args={[500,0.1,500]}>
                                <meshStandardMaterial color="black"/>
                            </Box>
                        </RigidBody>
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    )
}
export default DiceIntro;