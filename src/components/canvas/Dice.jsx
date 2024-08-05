/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { useTimer } from "use-timer";

const Dice = ({ position, rotation, isMobile, isStart }) => {
    const dice = useGLTF('./objects/dice/scene.gltf')
    const ref = useRef()
    useFrame(() => {
        if(isStart){
            // ref.current.rotation.y += 6.18; // dice 2 (about)

            // ref.current.rotation.x -=6.18 //dice 4 (experiences)
            // ref.current.rotation.y += 5.978; // dice 4 (experiences)
        }
    });
    
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