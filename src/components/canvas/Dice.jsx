/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { useTimer } from "use-timer";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Dice = ({ position, rotation, isMobile, isStart, setIsStart }) => {
    const dice = useGLTF('./objects/dice/scene.gltf')
    const ref = useRef()
    let i = 0;
    useFrame(() => {
        if(isStart){
            //SET TO FIRST STATE
            //if (i==0) i++; rotation=[1, -5, 4];

            // DICE 2 ([x, 4.5, z])
            // (Math.round(ref.current.rotation.y) > 4.4) ? setIsStart(false) : ref.current.rotation.y += 0.25; 

            // DICE 3 ([-3, 3.4, 1.4])
            // Math.round(ref.current.rotation.x < -3) ? ref.current.rotation.x : ref.current.rotation.x -= 0.1 * 2;
            // Math.round(ref.current.rotation.y > 3.4) ? ref.current.rotation.y : ref.current.rotation.y += 0.1 *2;
            // Math.round(ref.current.rotation.z < 1.4) ? ref.current.rotation.z : ref.current.rotation.z -= 0.1 * 2; 
            // if (Math.round(ref.current.rotation.x < -3) && Math.round(ref.current.rotation.y > 3.4) && Math.round(ref.current.rotation.z < 1.4)) setIsStart(false)

            // DICE 4 [-2, -1.3, z]
            // Math.round(ref.current.rotation.x < -2) ? ref.current.rotation.x : ref.current.rotation.x -= 0.1;
            // Math.round(ref.current.rotation.y > -1.4) ? ref.current.rotation.y : ref.current.rotation.y += 0.1;
            // if (Math.round(ref.current.rotation.x < -2) && Math.round(ref.current.rotation.y > -1.4)) setIsStart(false)

            // DICE 5 [4, -4.4, z]
            // Math.round(ref.current.rotation.x > 4.1) ? ref.current.rotation.x : ref.current.rotation.x += 0.1;
            // Math.round(ref.current.rotation.y > -4.5) ? ref.current.rotation.y : ref.current.rotation.y += 0.1;
            // if (Math.round(ref.current.rotation.x > 4.1) && Math.round(ref.current.rotation.y > -4.5)) setIsStart(false)

            // DICE 6 [-6, -3.5, 4.9]
            // Math.round(ref.current.rotation.x < -5.9) ? ref.current.rotation.x : ref.current.rotation.x -= 0.1;
            // Math.round(ref.current.rotation.y > -3.5) ? ref.current.rotation.y : ref.current.rotation.y += 0.1;
            // Math.round(ref.current.rotation.z > 4.8) ? ref.current.rotation.z : ref.current.rotation.z += 0.1; 
            // if (Math.round(ref.current.rotation.x < -5.9) && Math.round(ref.current.rotation.y > -3.5) && Math.round(ref.current.rotation.z < 4.8)) setIsStart(false)

            // DICE 1 [7, y, z]
            //(Math.round(ref.current.rotation.y) > 7.1) ? setIsStart(false) : ref.current.rotation.y += 0.1 * 3; 
        }
    },[isStart, setIsStart]);
    // console.log(ref.current.rotation)
    
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