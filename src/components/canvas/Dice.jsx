/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const Dice = ({ position, rotation, isThrowed }) => {
    const dice = useGLTF('./dice/scene.gltf')

    return (
        <motion.mesh position={position}
          initial={{ scale: 1 }}
          animate={{ scale : isThrowed ? 0.4 : 1 }}
        >
            {/* <directionalLight position={[30, 0, -200]} intensity={7}/> */}
            <primitive 
                object={dice.scene} 
                scale={500} 
                position={[0, 0, 0]} 
                rotation={rotation}
                /> 
        </motion.mesh>
    )
}

export default Dice;