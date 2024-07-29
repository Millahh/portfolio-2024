/* eslint-disable react/prop-types */
import T from "./texts/Title";
import { AdminLTE, Bootstrap, CSS, Figma, HTML, JavaScript, Laravel, PHP, phpMyAdmin, PostgreSQL, React, Tailwind, Threejs, Github } from "../assets";
import { motion } from "framer-motion";
import { DiceIntro } from "./canvas";

const Animation = () => {
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
        <motion.div className="hard-skills cursor-pointer h-96 align-middle text-right max-md:relative max-md:w-full" animate="visible">
            <motion.p className=" top-0 md:left-36 max-md:left-40 min-[900px]:left-44 min-[1100px]:left-48 font-bold lg:text-2xl md:text-xl max-[400px]:text-sm absolute" variants={animation2}>Bootstrap</motion.p> 
            <motion.p className=" bottom-16 md:left-14 max-md:left-20 min-[900px]:left-20 max-[400px]:text-sm absolute" variants={animation1}>AdminLTE</motion.p>
            <motion.p className=" bottom-32 max-md:bottom-40 md:left-48 max-md:left-48 min-[900px]:left-40 max-[400px]:text-sm absolute" variants={animation1}>CSS</motion.p>
            <motion.p className=" top-16 md:left-20 max-md:left-20 min-[900px]:left-32 max-[400px]:text-sm absolute" variants={animation2}>HTML</motion.p>
            <motion.p className=" top-16 md:right-16 max-md:left-64 min-[900px]:right-24 min-[1100px]:right-28 min-[1700px]:left-96 max-[400px]:text-sm absolute" variants={animation2}>Figma</motion.p>
            <motion.p className=" top-36 md:right-4 max-md:left-72 min-[900px]:right-12 min-[1700px]:left-96 absolute lg:text-lg md:text-base max-[400px]:text-sm text-primary font-semibold" variants={animation2}>JavaScript</motion.p>
            <motion.p className=" top-64 right-44 max-md:left-40 absolute min-[1700px]:left-80 max-[400px]:text-sm" variants={animation2}>Three.js</motion.p>
            <motion.p className=" top-24 md:left-36 max-md:left-36 min-[900px]:left-44 min-[1200px]:left-48 absolute lg:text-lg md:text-base max-[400px]:text-sm text-primary font-semibold" variants={animation1}>phpMyAdmin</motion.p>
            <motion.p className=" bottom-32 md:right-0 max-md:left-72 min-[900px]:right-5 min-[1700px]:left-96 absolute font-bold lg:text-2xl md:text-xl max-[400px]:text-sm" variants={animation2}>Tailwind</motion.p>
            <motion.p className=" top-32 md:left-2 max-md:left-4 min-[900px]:left-4 absolute font-bold lg:text-2xl md:text-xl max-[400px]:text-sm" variants={animation1}>Laravel</motion.p>
            <motion.p className=" bottom-48 md:left-44 max-md:left-28 min-[900px]:left-56 min-[1100px]:left-60 absolute max-[400px]:text-sm" variants={animation2}>UI/UX</motion.p>
            <motion.p className=" top-52 md:left-12 max-md:left-8 min-[900px]:left-14 absolute lg:text-lg md:text-base text-primary font-semibold max-[400px]:text-sm" variants={animation2}>React</motion.p>
            <motion.p className=" bottom-16 md:right-14 max-md:left-64 min-[900px]:right-24 min-[1100px]:bottom-14 min-[1700px]:left-96 absolute lg:text-lg md:text-base max-[400px]:text-sm text-primary font-semibold" variants={animation2}>PHP</motion.p>
            <motion.p className=" bottom-0 md:left-36 max-md:left-36 min-[900px]:left-40 min-[1100px]:left-48 absolute font-bold lg:text-2xl md:text-xl max-[400px]:text-sm" variants={animation1}>PostgreSQL</motion.p>
        </motion.div>
    )
}

const HardSkills = ({ logos, desc }) => {
    return (
        <div className="inline">
            {logos.map((logos) => (
                <img key={logos.logo} src={logos.logo} width={logos.width} className="inline mr-2 mt-3"/>
            ))}
            <p>{desc}</p>
        </div>
    )
}

const About = () => {
    return(
        <>
        {/* <DiceIntro/> */}
        <div className="h-screen max-md:overflow-y-auto max-md:pt-20">
            <div className="container p-0 lg:px-4 w-full h-full z-99 m-auto">
                <div className="sm:flex flex-row">
                    <div className="basis-1/2 xl:basis-2/5 min-[1400px]:basis-1/3 md:relative max-md:w-11/12 m-auto">
                        <Animation/>
                    </div>
                    <div className=" basis-3/5 max-lg:basis-1/2 px-10 h-screen max-md:h-fit max-md:pt-20 overflow-y-auto max-sm:overflow-y-hidden content-center">
                        <h1 className=" font-bold"><T>Get to</T> know me</h1>
                        <HardSkills logos={[{logo: Laravel, width:20}, {logo: Bootstrap, width:20}]} desc={"I started learning Laravel and Bootstrap since 2021 and have built some applications with it. Tracker, youRnoteS, MenITi, To-Gather (link)"}/>
                        <HardSkills logos={[{logo: Tailwind, width:20}, {logo: React, width:20}]} desc={"I’ve recently been interested built front-end web using Tailwind and React. (Tracker, youRnoteS)"}/>
                        <HardSkills logos={[{logo: Threejs, width:20}]} desc={"I recently fell in love with learning Three.js. I implemented Three.js as well as React and Tailwind on this portfolio based on what I've learned so far."}/>
                        <HardSkills logos={[{logo: PostgreSQL, width:23}, {logo: phpMyAdmin, width:30}]} desc={"I use PostgreSQL and phpMyAdmin for database management, i prefer PostgreSQL for interface, familiarity, performance and scalability."}/>
                        <HardSkills logos={[{logo: JavaScript, width:25}, {logo: PHP, width:25}, {logo: Figma, width:20}, {logo: AdminLTE, width:20}, {logo: HTML, width:25}, {logo: CSS, width:25}]} desc={"Those are languages, frameworks, and tools that I’m familiar, confident, and have worked with."}/>
                        <div className=" h-16"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;