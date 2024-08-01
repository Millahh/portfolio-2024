/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls} from "@react-three/drei";
import { useAnimate, usePresence } from "framer-motion";
import Dice from "./Dice";
import CanvasLoader from '../LoaderProgressBar';


const ThrowDice = () => {
    var w = window.innerWidth;
    var h = window.innerHeight;
    const [scope, animate] = useAnimate();
    const isMobile = h>w ? true : false;
    const [isNext, setIsNext] = useState(false);
    // setIsNext(true)
    useEffect(() => {
        // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
        const timeoutId = setTimeout(() => {
            const handleAnimate = async () => {
                await animate(scope.current, {scale : 0.4})
                await animate(scope.current, {x:isMobile? (w/2 - 75) : (w/2 - 50), y:isMobile? (h/2 - 88) : (h/2 - 58), duration: 4})
                // await animate(scope.current, { rotate: 360 })
                await setIsNext(true) 

            }
            handleAnimate()   
        }, 3200);
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    return(
        <div className="h-screen w-screen absolute my-auto -z-1">
            <Canvas 
                frameloop="always"
                shadows
                camera={{ position: [200, 40, 50], fov: 7.5}}
                gl={{ preserveDrawingBuffer: true}}
                ref={scope} 
                >
                <Suspense fallback={<CanvasLoader all/>}>
                    <Physics>
                        <OrbitControls enableZoom={false} enableRotate={false}/>
                        <directionalLight position={[100, 10, 200]} intensity={6}/>
                        <RigidBody gravityScale={10}>
                            <Dice position={isMobile ? [30, 12, 15] : [30, 17, 20]} rotation={[1, -5, 4]} isMobile={isMobile} isNext={isNext}/>
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

    if(isFinish) {
        return <ThrowDice/>
    }
}
export default DiceIntro;