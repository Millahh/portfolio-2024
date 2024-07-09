/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

const Dice = ({ position }) => {
    const dice = useGLTF('./dice/scene.gltf')
    return (
        <mesh position={position}>
            <directionalLight position={[30, 0, -200]} intensity={7}/>
            <primitive 
                object={dice.scene} 
                scale={500} 
                position={[0, 0, 0]} 
                rotation={[1, -5, 4]}
                />    
        </mesh>
    )
}

export default Dice;