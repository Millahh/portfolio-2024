/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import T from "../texts/Title";
import P from "../texts/Paragraph";
import { useState, useEffect, Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls} from "@react-three/drei";
import CanvasLoader from '../LoaderProgressBar';
import { useGLTF } from "@react-three/drei";

const Objects = ({ position, rotation, scale, object, light }) => {
    return (
        <>
            <OrbitControls enableZoom={false} enableRotate={true}/>
            <directionalLight position={light} intensity={3}/>
            <mesh position={position}>
                <primitive 
                    object={object.scene} 
                    scale={scale} 
                    position={[0, 0, 0]} 
                    rotation={rotation}
                    /> 
            </mesh>
        </>
    )
}

const CanvasObjects = () => {
    return (
        <Canvas 
        frameloop="always"
        shadows
        gl={{ preserveDrawingBuffer: true}}
        >
        <Suspense fallback={<CanvasLoader all/>}>
            <Objects position={[-6.5, 2.2, -0.2]} rotation={[0, 0, -0.2]} scale={32} light={[-0.1, 0, 0.07]} object={useGLTF('./music.glb')}/>
            <Objects position={[-4.5, -2.5, 0.3]} rotation={[0.1, 0.2, -0.5]} scale={0.0013} light={[0.9, -0.3, 0.5]} object={useGLTF('./mic.glb')}/>
            <Objects position={[6, -2.7, -5]} rotation={[7, 5.1, -12]} scale={1.4} light={[0.9, -0.3, 0.5]} object={useGLTF('./coffee.glb')}/>
        </Suspense>
    </Canvas>
    )
}

const Hobbies = () => {
    return(
        <>
            <div className="h-screen w-screen absolute my-auto -z-2">
                <CanvasObjects />
            </div>
            <div className="container text-center px-48 h-screen min-w-full content-center z-99">
                <div className="align-middle">
                    <h1 className="font-bold mb-2"><T>Fun</T> facts</h1>
                    <p>I sip <P>coffee</P> whenever my <P>code</P> doesn’t work well and sometimes go for a little <P>walk</P>. <br></br>I like to <P>dance</P> when im bored. I love <P>singing</P> (i literally singing <P>everyday</P>), sometimes i <P>recorded</P> it and <P>posted</P> it on my Insta. I hate <P>washing dishes</P> (<P>i do</P> wash my dishes everyday). My favorite color is <P>yellow</P>, <P>not purple</P>. Last, i hate <P>house lizard</P> more than <P>cockroach</P>.</p>
                </div>
            </div>
        </>
    )
}

export default Hobbies;