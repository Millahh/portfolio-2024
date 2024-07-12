import T from "./texts/Title";
import P from "./texts/Paragraph";
import { useState, useEffect, Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls} from "@react-three/drei";
import CanvasLoader from './LoaderProgressBar';

/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

const Tes = ({ position, rotation }) => {
    const dice = useGLTF('./dice/scene.gltf')

    return (
        <mesh position={position}>
            {/* <directionalLight position={[30, 0, -200]} intensity={7}/> */}
            <primitive 
                object={dice.scene} 
                scale={100} 
                position={[0, 0, 0]} 
                rotation={rotation}
                /> 
        </mesh>
    )
}

const FunFacts = () => {
    return(
        // <div className="container text-center px-48 h-screen min-w-full content-center">
        //     <div className=" align-middle">
        //         <h1 className="font-bold mb-2"><T>Fun</T> facts</h1>
        //         <p>I sip <P>coffee</P> whenever my <P>code</P> doesn’t work well and sometimes go for a little <P>walk</P>. <br></br>I like to <P>dance</P> when im bored. I love <P>singing</P> (i literally singing <P>everyday</P>), sometimes i <P>recorded</P> it and <P>posted</P> it on my Insta. I hate <P>washing dishes</P> (<P>i do</P> wash my dishes everyday). My favorite color is <P>yellow</P>, <P>not purple</P>. And i hate <P>house lizard</P> more than <P>cockroach</P>.</p>
        //     </div>
        // </div>
        <div className="h-screen w-screen absolute my-auto -z-2">
        <Canvas 
            frameloop="always"
            shadows
            // camera={{ position: [200, 40, 50], fov: 7.5}}
            gl={{ preserveDrawingBuffer: true}}
            >
            <Suspense fallback={<CanvasLoader all/>}>
                    <OrbitControls enableZoom={true} enableRotate={true}/>
                    <directionalLight position={[100, 10, 200]} intensity={6}/>
                        <Tes position={[0, 0, 0]} rotation={[0, 0, 1]}/>

            </Suspense>
        </Canvas>
    </div>
    )
}

export default FunFacts;