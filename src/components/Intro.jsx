/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls} from "@react-three/drei";
import { Dice } from "./canvas";
import Loader from "./LoaderProgressBar";

const Intro = () => {
    return (
        <div className="bg-custom bg-cover min-h-screen w-screen">
            <Canvas 
                frameloop="demand"
                shadows
                camera={{ position: [200, 40, 50], fov: 8}}
                gl={{ preserveDrawingBuffer: true}}
                >
                <Suspense fallback={<Loader all/>}>
                <Dice position={[30, 17, 20]}/>
                </Suspense>
            </Canvas>
        </div>
    )
}
export default Intro;
