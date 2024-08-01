/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { useTimer } from "use-timer";

const Dice = ({ position, rotation, isMobile, isNext }) => {
    const dice = useGLTF('./objects/dice/scene.gltf')
    const ref = useRef()

    const startTime = useRef(0);
    const isActive = useRef(true); //CHANGE THIS DEPEND ON CONDITION -> WHEN LINK CLICKED
    const duration = 4.2; // duration in seconds
    useEffect(() => {
        startTime.current = performance.now() / 1000; // get current time in seconds
      }, []);
    
    useFrame(() => {
        if (!isActive.current) return; // Skip frame updates if not active
        
        const currentTime = performance.now() / 1000; // get current time in seconds
        const elapsedTime = currentTime - startTime.current;
        if (isNext) ref.current.rotation.y += currentTime * 2 
    
        if (elapsedTime > duration) {
          isActive.current = false; // Stop further updates
          return;
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