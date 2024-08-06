/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";

const Dice = ({ position, rotation, isMobile, isStart, setIsStart }) => {
    const dice = useGLTF('./objects/dice/scene.gltf')
    const ref = useRef()

    // Use useEffect to set the initial position when isStart changes
    useEffect(() => {
        if (isStart !== "stop") {
            ref.current.rotation.set(1, -5, 4);
        }
    }, [isStart]);

    useFrame(() => {
        if(isStart != "stop"){
            switch (isStart) {
                case 'homeIsVisited':
                    // DICE 1 [7, y, z]
                    (Math.round(ref.current.rotation.y) > 7.1) ? setIsStart("stop") : ref.current.rotation.y += 0.1 * 3; 
                return[setIsStart];

                case 'about':
                    // DICE 2 ([x, 4.5, z])
                    (Math.round(ref.current.rotation.y) > 4.4) ? setIsStart("stop") : ref.current.rotation.y += 0.25;
                return[setIsStart];

                case 'projects':
                    // DICE 3 ([-3, 3.4, 1.4])
                    Math.round(ref.current.rotation.x < -3) ? ref.current.rotation.x : ref.current.rotation.x -= 0.1 * 2;
                    Math.round(ref.current.rotation.y > 3.4) ? ref.current.rotation.y : ref.current.rotation.y += 0.1 *2;
                    Math.round(ref.current.rotation.z < 1.4) ? ref.current.rotation.z : ref.current.rotation.z -= 0.1 * 2; 
                    if (Math.round(ref.current.rotation.x < -3) && Math.round(ref.current.rotation.y > 3.4) && Math.round(ref.current.rotation.z < 1.4)) setIsStart("stop");
                return[setIsStart];

                case 'experiences':
                    // DICE 4 [-2, -1.3, z]
                    Math.round(ref.current.rotation.x < -2) ? ref.current.rotation.x : ref.current.rotation.x -= 0.1;
                    Math.round(ref.current.rotation.y > -1.4) ? ref.current.rotation.y : ref.current.rotation.y += 0.1;
                    if (Math.round(ref.current.rotation.x < -2) && Math.round(ref.current.rotation.y > -1.4)) setIsStart("stop")
                return[setIsStart];

                case 'funfacts':
                    // DICE 5 [4, -4.4, z]
                    Math.round(ref.current.rotation.x > 4.1) ? ref.current.rotation.x : ref.current.rotation.x += 0.1;
                    Math.round(ref.current.rotation.y > -4.5) ? ref.current.rotation.y : ref.current.rotation.y += 0.1;
                    if (Math.round(ref.current.rotation.x > 4.1) && Math.round(ref.current.rotation.y > -4.5)) setIsStart("stop")
                return[setIsStart];

                case 'contact':
                    // DICE 6 [-6, -3.5, 4.9]
                    Math.round(ref.current.rotation.x < -5.9) ? ref.current.rotation.x : ref.current.rotation.x -= 0.1;
                    Math.round(ref.current.rotation.y > -3.5) ? ref.current.rotation.y : ref.current.rotation.y += 0.1;
                    Math.round(ref.current.rotation.z > 4.8) ? ref.current.rotation.z : ref.current.rotation.z += 0.1; 
                    if (Math.round(ref.current.rotation.x < -5.9) && Math.round(ref.current.rotation.y > -3.5) && Math.round(ref.current.rotation.z < 4.8)) setIsStart("stop")
                return[setIsStart];

                default:
                break;
            }
        }
    },[isStart, setIsStart]);
    
    return (
        <mesh position={position}>
            {/* <directionalLight position={[30, 0, -200]} intensity={7}/> */}
            <primitive 
                ref={ref}
                object={dice.scene} 
                scale={isMobile? 400 : 500} 
                position={[0, 0, 0]} 
                rotation={rotation}
                /> 
        </mesh>
    )
}

export default Dice;