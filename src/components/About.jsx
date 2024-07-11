import T from "./texts/Title";
import { motion } from "framer-motion";
import { Float } from "@react-three/drei";

const HardSkills = () => {
    const animation1 = {
        whileHover:{
            scale: 1.2,
            transition: { duration: 1 },
        },
        visible:{
            x: [0, 3, 0],  
            y: [0, -3, 0],  
            z: [0, 3, 0],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
            }
        }
    }
    const animation2 = {
        whileHover:{
            scale: 1.2,
            transition: { duration: 1 },
        },
        visible:{
            x: [0, -3, 0],  
            y: [0, -3, 0],  
            z: [0, -3, 0],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
            }
        }
    }
    return(
        <motion.div className="hard-skills cursor-pointer" animate="visible">
            <motion.p className=" top-20 left-52 font-bold text-2xl" variants={animation2} whileHover="whileHover">Bootstrap</motion.p> 
            <motion.p className=" top-36 left-32" variants={animation1} whileHover="whileHover">AdminLTE</motion.p>
            <motion.p className=" top-36 left-96" variants={animation1} whileHover="whileHover">CSS</motion.p>
            <motion.p className=" top-44 left-60" variants={animation2} whileHover="whileHover">HTML</motion.p>
            <motion.p className=" top-56 left-24" variants={animation2} whileHover="whileHover">Figma</motion.p>
            <motion.p className=" top-56 left-80 text-lg text-primary font-semibold" variants={animation2} whileHover="whileHover">JavaScript</motion.p>
            <motion.p className=" top-64 left-52" variants={animation2} whileHover="whileHover">Three.js</motion.p>
            <motion.p className=" top-72 left-18 text-lg text-primary font-semibold" variants={animation1} whileHover="whileHover">phpMyAdmin</motion.p>
            <motion.p className=" bottom-60 left-96 font-bold text-2xl" variants={animation2} whileHover="whileHover">Tailwind</motion.p>
            <motion.p className=" bottom-44 left-40 font-bold text-2xl" variants={animation1} whileHover="whileHover">Laravel</motion.p>
            <motion.p className=" bottom-44 left-80" variants={animation2} whileHover="whileHover">UI/UX</motion.p>
            <motion.p className=" top-96 left-96 text-lg text-primary font-semibold" variants={animation2} whileHover="whileHover">React</motion.p>
            <motion.p className=" bottom-28 left-28 text-lg text-primary font-semibold" variants={animation2} whileHover="whileHover">PHP</motion.p>
            <motion.p className=" bottom-16 left-52 font-bold text-2xl" variants={animation1} whileHover="whileHover">PostgreSQL</motion.p>

            {/* <p>HTML</p>
            <p>Bootstrap</p>
            <p>CSS</p>
            <p>phpMyAdmin</p>
            <p>JavaScript</p>
            <p>UI/UX</p>
            <p>Figma</p>
            <p>Laravel</p>
            <p>Tailwind</p>
            <p>Three.js</p>
            <p>PHP</p>
            <p>React</p>
            <p>PostgreSQL</p> */}
        </motion.div>
    )
}

const About = () => {
    return(
        <div className="container px-10 min-w-full">
            <HardSkills/>
            <div className="flex flex-row">
                <div className="basis-1/2"></div>
                <div className="basis-1/2 skills">
                    <h1><T>Get to</T> know me</h1>
                    <p>I started learning Laravel and Bootstrap since 2021 and have built some applications with it. Tracker, youRnoteS, MenITi, To-Gather (link)</p>
                    <p>I’ve recently been interested built front-end web using Tailwind and React. (Tracker, youRnoteS)</p>
                    <p>I recently fell in love with learning Three.js. I implemented Three.js as well as React and Tailwind on this portfolio based on what I've learned so far.</p>
                    <p>I use PostgreSQL and phpMyAdmin for database management, i prefer PostgreSQL for interface, familiarity, performance and scalability.</p>
                    <p>Those are languages, frameworks, and tools that I’m familiar, confident, and have worked with.</p>
                </div>
            </div>
        </div>
    )
}

export default About;