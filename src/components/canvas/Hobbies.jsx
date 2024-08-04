/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls} from "@react-three/drei";
import CanvasLoader from '../LoaderProgressBar';
import { useGLTF } from "@react-three/drei";

const Objects = ({ position, rotation, scale, object, light }) => {
    const assets = [useGLTF('./objects/music.glb'), useGLTF('./objects/mic.glb'), useGLTF('./objects/coffee.glb'), useGLTF('./objects/dance.glb')]
    assets.transparent = true
    assets.opacity = 0
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
                        object={assets[object].scene} 
                        children-0-castShadow={true}
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

const Hobbies = ({isShow}) => {
    console.log(isShow)
    var w = window.innerWidth;
    var h = window.innerHeight;
    const isMobile = h>w ? true : false;
    return (
        <>
            <div className={`h-full w-screen absolute z-0 m-auto max-[350px]:h-full max-[350px]:top-0 max-[450px]:h-4/5 max-[450px]:top-[12%]`}>
                <Canvas 
                frameloop="always"
                shadows
                gl={{ 
                    preserveDrawingBuffer: true,
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
                >
                {isShow && 
                    <Suspense fallback={<CanvasLoader all/>}>
                        <Objects position={isMobile?[-2, 3, 0]:[-5.8, 2.2, -0.2]} rotation={[0, 0, -0.2]} scale={isMobile?20:35} light={[0, 0, 0.1]} object={0}/>
                        <Objects position={isMobile?[-2, -3, 0]:[-4.2, -2.8, 0.2]} rotation={[0.1, 0.2, -0.5]} scale={0.0013} light={[0.5, -0.5, 0]} object={1}/>
                        <Objects position={isMobile?[2, -2.95, 0.5]:[6.5, -4.5, -3]} rotation={[7, 11.4, -11]} scale={isMobile?0.7:2} light={[0, 50, 0]} object={2}/>
                        <Objects position={isMobile?[4, 4.2, -4.7]:[8, 2.3, -2.5]} rotation={isMobile?[5, 3.6, -12.2]:[5, 3.4, -12]} scale={isMobile?0.085:0.11} light={[100, 100, 10]} object={3}/>
                        <meshStandardMaterial alphaMap="black"/>
                    </Suspense>
                }
                </Canvas>
            </div>
        </>
    )
}

export default Hobbies;