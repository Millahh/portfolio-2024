/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls} from "@react-three/drei";
import { Dice } from "./canvas";
import Loader from "./LoaderProgressBar";
import { motion } from "framer-motion";

const Intro = () => {
    return (
        <div className="bg-custom bg-cover min-h-screen w-screen transition-all ease-in-out duration-75"
            // initial={{ opacity: 0.7, backgroundColor: '#000000' }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //     duration: 5,
            //     delay: 0,
            //     ease: [0, 0.1, 0.1, 0.1]
            // }}
        >
            <div style={{ width: "100vw", height: "100vh"}}
              >
                <Canvas 
                    frameloop="demand"
                    shadows
                    camera={{ position: [200, 40, 50], fov: 6.7}}
                    gl={{ preserveDrawingBuffer: true}}
                    >
                    <Suspense fallback={<Loader all/>}>
                    <directionalLight position={[200, 30, 200]} intensity={6}/>
                    <OrbitControls enableZoom={false} enableRotate={false}/>
                    <Dice position={[-3, -0.2, 0]} rotation={[3.1, 0.1, 4.7]}/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}
export default Intro;
