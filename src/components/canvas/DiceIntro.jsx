/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls} from "@react-three/drei";
import Dice from "./Dice";
import CanvasLoader from '../LoaderProgressBar';
import { motion } from "framer-motion";

const DiceIntro = () => {
    return (
        <motion.div className=" w-screen h-screen bg-custom bg-cover"
            initial={{ opacity: 0.7, backgroundColor: '#000000' }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 5,
                delay: 0,
                ease: [0, 0.1, 0.1, 0.1]
            }}
        >
            <Canvas 
                frameloop="demand"
                shadows
                camera={{ position: [200, 40, 50], fov: 7.5}}
                gl={{ preserveDrawingBuffer: true}}
                >
                <Suspense fallback={<CanvasLoader all/>}>
                    <Physics>
                        <OrbitControls enableZoom={false} enableRotate={false}/>
                        <directionalLight position={[100, 10, 200]} intensity={6}/>
                        <RigidBody gravityScale={10}>
                            <Dice position={[30, 17, 20]} rotation={[1, -5, 4]}/>
                        </RigidBody>
                        <RigidBody type="fixed">
                            <Box position={[-10,1,-5]} args={[500,0.1,500]}>
                                <meshStandardMaterial color="black"/>
                            </Box>
                        </RigidBody>
                    </Physics>
                </Suspense>
            </Canvas>
        </motion.div>
    )
}
export default DiceIntro;