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
        console.log(ref.current.rotation)
        if(isStart){
            ref.current.rotation.y += 0;
            //ref.current.rotation.y += 6.18; // dice 2
            // ref.current.rotation.y -= 5.686; // dice 3
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