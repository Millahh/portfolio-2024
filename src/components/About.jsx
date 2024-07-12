/* eslint-disable react/prop-types */
import T from "./texts/Title";
import { AdminLTE, Bootstrap, CSS, Figma, HTML, JavaScript, Laravel, PHP, phpMyAdmin, PostgreSQL, React, Tailwind, Threejs, Github } from "../assets";
import { motion } from "framer-motion";

const HardSkills = () => {
    const animation1 = {
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
            <motion.p className=" top-20 left-52 font-bold text-2xl" variants={animation2}>Bootstrap</motion.p> 
            <motion.p className=" top-36 left-32" variants={animation1}>AdminLTE</motion.p>
            <motion.p className=" top-36 left-96" variants={animation1}>CSS</motion.p>
            <motion.p className=" top-44 left-60" variants={animation2}>HTML</motion.p>
            <motion.p className=" top-56 left-24" variants={animation2}>Figma</motion.p>
            <motion.p className=" top-56 left-80 text-lg text-primary font-semibold" variants={animation2}>JavaScript</motion.p>
            <motion.p className=" top-64 left-52" variants={animation2}>Three.js</motion.p>
            <motion.p className=" top-72 left-18 text-lg text-primary font-semibold" variants={animation1}>phpMyAdmin</motion.p>
            <motion.p className=" bottom-60 left-96 font-bold text-2xl" variants={animation2}>Tailwind</motion.p>
            <motion.p className=" bottom-44 left-40 font-bold text-2xl" variants={animation1}>Laravel</motion.p>
            <motion.p className=" bottom-44 left-80" variants={animation2}>UI/UX</motion.p>
            <motion.p className=" top-96 left-96 text-lg text-primary font-semibold" variants={animation2}>React</motion.p>
            <motion.p className=" bottom-28 left-28 text-lg text-primary font-semibold" variants={animation2}>PHP</motion.p>
            <motion.p className=" bottom-16 left-52 font-bold text-2xl" variants={animation1}>PostgreSQL</motion.p>
        </motion.div>
    )
}

const Logos = ({ logos }) => {
    return (
        <div className="inline">
            {logos.map((logos) => (
                <img key={logos.logo} src={logos.logo} width={logos.width} className="inline"/>
            ))}
        </div>
    )
}

const About = () => {
    return(
        <div className="container pl-10 min-w-full h-full">
            <HardSkills/>
            <div className="flex flex-row">
                <div className=" basis-2/5"></div>
                <div className=" basis-3/5 py-10 px-10 h-screen overflow-y-auto">
                    <h1 className=" font-bold"><T>Get to</T> know me</h1>
                    <Logos logos={[{logo: Laravel, width:20},{logo: Bootstrap, width:20}]}/>
                    <p>I started learning Laravel and Bootstrap since 2021 and have built some applications with it. Tracker, youRnoteS, MenITi, To-Gather (link)</p>
                    <Logos logos={[{logo: Tailwind, width:20},{logo: React, width:20}]}/>
                    <p>I’ve recently been interested built front-end web using Tailwind and React. (Tracker, youRnoteS)</p>
                    <Logos logos={[{logo: Threejs, width:20}]}/>
                    <p>I recently fell in love with learning Three.js. I implemented Three.js as well as React and Tailwind on this portfolio based on what I've learned so far.</p>
                    <Logos logos={[{logo: PostgreSQL, width:23},{logo: phpMyAdmin, width:30}]}/>
                    <p>I use PostgreSQL and phpMyAdmin for database management, i prefer PostgreSQL for interface, familiarity, performance and scalability.</p>
                    <Logos logos={[{logo: JavaScript, width:25},{logo: PHP, width:25}, {logo: Figma, width:20},{logo: AdminLTE, width:20}, {logo: HTML, width:25},{logo: CSS, width:25}]}/>
                    <p>Those are languages, frameworks, and tools that I’m familiar, confident, and have worked with.</p>
                </div>
            </div>
        </div>
    )
}

export default About;