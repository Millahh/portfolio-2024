/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

const Dice = ({ position, rotation, isMobile }) => {
    const dice = useGLTF('./objects/dice/scene.gltf')

    return (
        <mesh position={position}>
            {/* <directionalLight position={[30, 0, -200]} intensity={7}/> */}
            <primitive 
                object={dice.scene} 
                scale={isMobile? 400 : 500} 
                position={[0, 0, 0]} 
                rotation={rotation}
                /> 
        </mesh>
    )
}

export default Dice;