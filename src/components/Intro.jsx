/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, OrbitControls} from "@react-three/drei";
import { Dice } from "./canvas";
import Loader from "./LoaderProgressBar";
import { motion } from "framer-motion";
import P from "./texts/Paragraph";

const Intro = () => {
    return (
        <div className="bg-custom bg-cover min-h-screen w-screen transition-all ease-in-out duration-75"
            // initial={{ opacity: 0.7, backgroundColor: '#000000' }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //     duration: 5,
            //     delay: 0,
            //     ease: [0, 0.1, 0.1, 0.1]
            // }}
        >
            <div style={{ width: "100vw", height: "100vh"}}>
            <p>tes aku adalah <P>anak</P> yang baik sekali yhh <P>ok hihi</P></p>
            </div>
        </div>
    )
}
export default Intro;
