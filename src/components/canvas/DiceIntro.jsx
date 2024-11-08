/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls} from "@react-three/drei";
import { useAnimate } from "framer-motion";
import Dice from "./Dice";
import { CanvasLoader } from '../index.js';


const ThrowDice = ({isStart, setIsStart}) => {
    var w = window.visualViewport ? window.visualViewport.width : window.innerWidth
    var h = window.visualViewport ? window.visualViewport.height : window.innerHeight
    const [scope, animate] = useAnimate();
    const isMobile = h>w ? true : false;

    useEffect(() => {
        // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
        const timerDiceIntro = setTimeout(() => {
            const handleAnimate = async () => {
                await animate(scope.current, {scale: w<450 ? 0.3 : 0.4})

                // Menghitung posisi objek dengan jarak dinamis 
                const offsetX = w * 0.03; 
                const offsetY = h * 0.05; 

                // Menghitung posisi target
                const targetX = w/ (isMobile? 2.2 : 2.02) - offsetX;
                const targetY = h/2.2 - offsetY;
                
                // await animate(scope.current, {x:isMobile? (w/2 - 65) : (w/2 - 50), y:isMobile? (h/2 - 68) : (h/2 - 58), duration: 4})
                // Animasikan objek ke pojok kanan bawah dengan jarak dinamis
                await animate(scope.current, {
                    x: targetX, // Menghitung posisi x secara dinamis
                    y: targetY, // Menghitung posisi y secara dinamis
                    duration: 4,
                });

            }
            handleAnimate()   
        }, 3200);
        // Cleanup function to clear the timeout if the component unmounts
        return () => {clearTimeout(timerDiceIntro); };
    }, []);

    return(
        <>
        <div className="h-screen w-screen absolute my-auto z-0">
            <Canvas 
                frameloop="always"
                shadows={false}
                camera={{ position: [200, 40, 50], fov: 7.5}}
                gl={{ preserveDrawingBuffer: true, antialias: false}}
                dpr={window.devicePixelRatio} 
                ref={scope} 
                >
                <Suspense fallback={<CanvasLoader all/>}>
                    <Physics>
                        <OrbitControls enableZoom={false} enableRotate={false}/>
                        <directionalLight position={[100, 10, 200]} intensity={6}/>
                        <RigidBody gravityScale={10}>
                            <Dice position={isMobile ? [30, 12, 15] : [30, 17, 20]} rotation={[1, -5, 4]} isMobile={isMobile} isStart={isStart} setIsStart={setIsStart}/>
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
        </>
    )
}

const DiceIntro = ({isStart, setIsStart}) => {
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
        return <ThrowDice isStart={isStart} setIsStart={setIsStart}/>
    }
}
export default DiceIntro;