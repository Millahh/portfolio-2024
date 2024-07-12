/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import T from "../texts/Title";
import P from "../texts/Paragraph";
import { useState, useEffect, Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls} from "@react-three/drei";
import CanvasLoader from '../LoaderProgressBar';
import { useGLTF } from "@react-three/drei";

const Music = ({ position, rotation }) => {
    const music = useGLTF('./music.glb')

    return (
            <Canvas 
                frameloop="always"
                shadows
                // camera={{ position: [200, 10, 50], fov: 1}}
                gl={{ preserveDrawingBuffer: true}}
                >
                <Suspense fallback={<CanvasLoader all/>}>
                        <OrbitControls enableZoom={true} enableRotate={true}/>
                        <directionalLight position={[300, 300, 200]} intensity={6}/>
                        <mesh position={position}>
                            <primitive 
                                object={music.scene} 
                                scale={25} 
                                position={[0, 0, 0]} 
                                rotation={rotation}
                                /> 
                        </mesh>
                </Suspense>
            </Canvas>
    )
}

const Mic = ({ position, rotation }) => {
    const mic = useGLTF('./mic.glb')

    return (
        <mesh position={position}>
            <primitive 
                object={mic.scene} 
                scale={0.001} 
                position={[0, 0, 0]} 
                rotation={rotation}
                /> 
        </mesh>
    )
}

const Hobbies = () => {
    return(
        <>
            <div className="h-screen w-screen absolute my-auto -z-2">
                <Music position={[-5, 1.5, 1.2]} rotation={[0, 0.4, -0.16]}/>
            </div>
            <div className="container text-center px-48 h-screen min-w-full content-center z-99">
                <div className=" align-middle">
                    <h1 className="font-bold mb-2"><T>Fun</T> facts</h1>
                    <p>I sip <P>coffee</P> whenever my <P>code</P> doesn’t work well and sometimes go for a little <P>walk</P>. <br></br>I like to <P>dance</P> when im bored. I love <P>singing</P> (i literally singing <P>everyday</P>), sometimes i <P>recorded</P> it and <P>posted</P> it on my Insta. I hate <P>washing dishes</P> (<P>i do</P> wash my dishes everyday). My favorite color is <P>yellow</P>, <P>not purple</P>. And i hate <P>house lizard</P> more than <P>cockroach</P>.</p>
                </div>
            </div>
        </>
    )
}

export default Hobbies;