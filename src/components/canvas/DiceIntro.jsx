/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls} from "@react-three/drei";
import Dice from "./Dice";
import CanvasLoader from '../LoaderProgressBar';

const Bg = () => {
    return(
        <div className=" h-screen w-screen bg-custom bg-cover transition-transform duration-1000">
        </div>
    )
}

const ThrowDice = () => {
    return(
        <div className=" h-screen w-screen bg-custom bg-cover transition-transform duration-1000">
            <Canvas 
                frameloop="demand"
                shadows
                camera={{ position: [200, 40, 50], fov: 7.5}}
                gl={{ preserveDrawingBuffer: true}}
                >
                <Suspense fallback={<CanvasLoader/>}>
                    <Physics>
                        <OrbitControls enableZoom={false} enableRotate={false}/>
                        <directionalLight position={[100, 10, 200]} intensity={6}/>
                        <RigidBody gravityScale={10}>
                            <Dice position={[30, 17, 20]} rotation={[1, -5, 4]}/>
                        </RigidBody>
                        <RigidBody type="fixed">
                            <Box position={[-10,1,-5]} args={[500,0.1,500]}>
                            {/* The alpha map is a grayscale texture that controls the opacity across the surface (black: fully transparent; white: fully opaque) */}
                            {/* the result is that the mesh became transparent */}
                                <meshStandardMaterial alphaMap="black"/>
                            </Box>
                        </RigidBody>
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    )
}

const DiceIntro = () => {
    const [isFinish, setFinish] = useState(false);

    useEffect(() => {
      // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
      const timeoutId = setTimeout(() => {
        setFinish(true);
      }, 750);
  
      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array ensures the effect runs only once

    if(!isFinish) {
        return  <Bg/>       
            
    } else {
        return <ThrowDice/>
    }
}
export default DiceIntro;