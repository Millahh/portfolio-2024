/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls} from "@react-three/drei";
import CanvasLoader from '../LoaderProgressBar';
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from 'react'

const Objects = ({ position, rotation, scale, object, light }) => {
    const ref = useRef()
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        document.body.style.cursor = isHovered ? 'pointer' : 'auto'
      }, [isHovered])
    return (
        <>
            <Float speed={ isHovered ? 7 : 2} rotationIntensity={0.2} floatIntensity={1}>
                <OrbitControls enableZoom={false} enableRotate={false}/>
                <directionalLight position={light} intensity={2}/>
                <mesh position={position}>
                    <primitive 
                        object={object.scene} 
                        scale={scale} 
                        position={[0, 0, 0]} 
                        rotation={rotation}
                        ref={ref}
                        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
                        onPointerLeave={() => 
                            setTimeout(() => {
                            setIsHovered(false)
                            }, 3000)
                        }
                        /> 
                </mesh>
            </Float>
        </>
    )
}

const Hobbies = () => {
    var w = window.innerWidth;
    var h = window.innerHeight;
    const isMobile = h>w ? true : false;
    return (
        <>
            <div className=" h-full w-screen absolute m-auto -z-2 max-[350px]:h-full max-[350px]:top-0 max-[450px]:h-4/5 max-[450px]:top-[12%]">
                <Canvas 
                frameloop="always"
                shadows
                gl={{ preserveDrawingBuffer: true}}
                >
                    <Suspense fallback={<CanvasLoader all/>}>
                        <Objects position={isMobile?[-2, 3, 0]:[-5.8, 2.2, -0.2]} rotation={[0, 0, -0.2]} scale={isMobile?20:35} light={[0, 0, 0.1]} object={useGLTF('./objects/music.glb')}/>
                        <Objects position={isMobile?[-2, -3, 0]:[-4.2, -2.8, 0.2]} rotation={[0.1, 0.2, -0.5]} scale={0.0013} light={[0.5, -0.5, 0]} object={useGLTF('./objects/mic.glb')}/>
                        <Objects position={isMobile?[2, -2.95, 0.5]:[6.5, -4.5, -3]} rotation={[7, 11.4, -11]} scale={isMobile?0.7:2} light={[0, 50, 0]} object={useGLTF('./objects/coffee.glb')}/>
                        <Objects position={isMobile?[4, 4.2, -4.7]:[8, 2.3, -2.5]} rotation={isMobile?[5, 3.6, -12.2]:[5, 3.4, -12]} scale={isMobile?0.085:0.11} light={[100, 100, 10]} object={useGLTF('./objects/dance.glb')}/>
                    </Suspense>
                </Canvas>
            </div>
        </>
    )
}

export default Hobbies;