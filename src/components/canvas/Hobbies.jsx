/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls} from "@react-three/drei";
import CanvasLoader from '../LoaderProgressBar';
import { useGLTF } from "@react-three/drei";

const Objects = ({ position, rotation, scale, object, light }) => {
    return (
        <>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
                <OrbitControls enableZoom={false} enableRotate={false}/>
                <directionalLight position={light} intensity={2}/>
                <mesh position={position}>
                    <primitive 
                        object={object.scene} 
                        scale={scale} 
                        position={[0, 0, 0]} 
                        rotation={rotation}
                        /> 
                </mesh>
            </Float>
        </>
    )
}

const CanvasHobbies = () => {
    return (
        <>
            <Canvas 
            frameloop="always"
            shadows
            gl={{ preserveDrawingBuffer: true}}
            >
                <Suspense fallback={<CanvasLoader all/>}>
                    <Objects position={[-6.5, 2.2, -0.2]} rotation={[0, 0, -0.2]} scale={35} light={[0, 0, 0.1]} object={useGLTF('./objects/music.glb')}/>
                    <Objects position={[-4.2, -2.8, 0.2]} rotation={[0.1, 0.2, -0.5]} scale={0.0013} light={[0.5, -0.5, 0]} object={useGLTF('./objects/mic.glb')}/>
                    <Objects position={[6.5, -4.5, -3]} rotation={[7, 11.4, -11]} scale={2} light={[0, 50, 0]} object={useGLTF('./objects/coffee.glb')}/>
                    <Objects position={[8, 2.3, -2.5]} rotation={[5, 3.4, -12]} scale={0.11} light={[100, 100, 10]} object={useGLTF('./objects/dance.glb')}/>
                </Suspense>
            </Canvas>
        </>
    )
}

const Hobbies = () => {
    var w = window.innerWidth;
    var h = window.innerHeight;
    const isMobile = h>w ? true : false;
    return (
        <>
            {isMobile && 
            <div className="h-1/2 w-full max-[850px]:h-1/3 absolute top-1/4 max-[850px]:top-1/3 -z-2">
                <CanvasHobbies/>
            </div>
            }{!isMobile &&
            <div className="h-screen w-screen absolute m-auto -z-2">
                <CanvasHobbies/>
            </div>
            }
        </>
    )
}

export default Hobbies;