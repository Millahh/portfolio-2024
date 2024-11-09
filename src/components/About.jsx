/* eslint-disable react/prop-types */
import T from "./texts/Title";
import { AdminLTE, Bootstrap, CSS, Figma, HTML, JavaScript, Laravel, PHP, phpMyAdmin, PostgreSQL, React, Tailwind, Threejs, Github } from "../assets";
import { motion } from "framer-motion";
import { variants } from "../constants";

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
        <motion.div className="hard-skills h-96 cursor-pointer align-middle max-xs:relative m-auto" animate="visible">
            <motion.p className="Bootstrap top-0 max-[900px]:left-44 max-md:left-40 left-52 font-bold text-h3 max-[500px]:text-sm absolute" whileHover={{ scale: 1.3 }} variants={animation2}>Bootstrap</motion.p> 
            <motion.p className="AdminLTE bottom-16 md:left-14 max-md:left-20 min-[900px]:left-20 text-h4 max-[400px]:text-sm absolute" whileHover={{ scale: 1.3 }} variants={animation1}>AdminLTE</motion.p>
            <motion.p className="CSS bottom-32 max-md:bottom-40 md:left-40 max-md:left-48 min-[900px]:left-40 text-h4 max-[400px]:text-sm absolute" whileHover={{ scale: 1.3 }} variants={animation1}>CSS</motion.p>
            <motion.p className="HTML top-16 md:left-20 max-md:left-20 min-[900px]:left-32 text-h4 max-[400px]:text-sm absolute" whileHover={{ scale: 1.3 }} variants={animation2}>HTML</motion.p>
            <motion.p className="Figma top-16 md:left-80 max-md:left-64 min-[900px]:left-80 min-[1100px]:left-96 min-[1700px]:left-96 text-h4 max-[400px]:text-sm absolute" whileHover={{ scale: 1.3 }} variants={animation2}>Figma</motion.p>
            <motion.p className="JS top-36 md:left-80 max-md:left-72 min-[900px]:left-96 absolute text-h4 max-[400px]:text-sm text-primary font-semibold" whileHover={{ scale: 1.3 }} variants={animation2}>JavaScript</motion.p>
            <motion.p className="Threejs top-64 left-56 max-md:left-40 md:left-64 absolute text-h4 max-[400px]:text-sm" whileHover={{ scale: 1.3 }} variants={animation2}>Three.js</motion.p>
            <motion.p className="phpMyAdmin top-24 md:left-36 max-md:left-36 min-[900px]:left-44 min-[1200px]:left-48 absolute text-h4 max-[400px]:text-sm text-primary font-semibold" whileHover={{ scale: 1.3 }} variants={animation1}>phpMyAdmin</motion.p>
            <motion.p className="Tailwind bottom-32 max-md:left-72 max-[900px]:left-80 left-96 absolute font-bold text-h3 max-[400px]:text-sm" whileHover={{ scale: 1.3 }} variants={animation2}>Tailwind</motion.p>
            <motion.p className="Laravel top-32 md:left-2 max-md:left-4 min-[900px]:left-10 absolute font-bold text-h3 max-[400px]:text-sm" whileHover={{ scale: 1.3 }} variants={animation1}>Laravel</motion.p>
            <motion.p className="UIUX bottom-48 md:left-52 max-md:left-28 min-[900px]:left-56 min-[1100px]:left-60 absolute text-h4 max-[400px]:text-sm" whileHover={{ scale: 1.3 }} variants={animation2}>UI/UX</motion.p>
            <motion.p className="React top-52 md:left-12 max-md:left-8 min-[900px]:left-14 absolute text-h4 text-primary font-semibold max-[400px]:text-sm" whileHover={{ scale: 1.3 }} variants={animation2}>React</motion.p>
            <motion.p className="PHP bottom-16 md:left-80 max-md:left-64 min-[900px]:left-96 min-[1100px]:bottom-14 min-[1700px]:left-96 absolute text-h4 max-[400px]:text-sm text-primary font-semibold" whileHover={{ scale: 1.3 }} variants={animation2}>PHP</motion.p>
            <motion.p className="pgAdmin bottom-0 md:left-44 max-md:left-44 min-[900px]:left-52 min-[1100px]:left-52 absolute font-bold text-h3 max-[400px]:text-sm" whileHover={{ scale: 1.3 }} variants={animation1}>pgAdmin</motion.p>
        </motion.div>
    )
}

const HardSkills = ({ logos, desc, setCurrentPage, projects, setIsStart, isFocused, setFocused }) => {
    return (
        <div className="mt-1">
            <div className="my-auto">
                {logos.map((logos) => (
                    <img key={logos.logo} src={logos.logo} width={logos.width} className="inline mr-2 my-auto"/>
                ))}
            </div>
            <p className="inline description max-[350px]:text-[0.6rem] max-[450px]:text-xs max-[900px]:text-xl">{desc}</p>
            {projects ?  (
                projects.map((project) => (
                    <a 
                        key={project}
                        href="#" 
                        onClick={(e) => { 
                            setIsStart('projects');
                            e.preventDefault(); 
                            setCurrentPage('projects');
                            setFocused(project)
                        }} 
                        className="text-primary hover:text-white inline mx-1 text-h5 max-[350px]:text-[0.5rem] max-[450px]:text-xs max-[900px]:text-[0.9rem] font-semibold underline hover:underline-white underline-offset-2"
                        >
                        {project}
                    </a>
                ))
            ) : ''
            }
        </div>
    )
}

const About = ({setCurrentPage, setIsStart, isFocused, setFocused}) => {
    return(
        <>
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants}
            layoutScroll="false"
            className="h-screen max-md:overflow-y-auto overflow-x-hidden max-md:pt-20 w-full absolute z-20">
            <div className="w-full h-full content-center m-auto">
                <div className="sm:flex flex-row m-auto">
                    <div className="basis-1/2 xl:basis-1/2 2xl:basis-2/5 min-[2000px]:basis-1/3 max-xs:w-11/12 xs:relative xs:w-2/3 min-[500px]:w-4/5 min-[600px]:w-2/3 m-auto">
                        <Animation/>
                    </div>
                    <div className=" basis-3/5 max-lg:basis-1/2 px-10 h-fit max-md:h-fit max-md:py-20 overflow-y-auto max-sm:overflow-y-hidden content-center m-auto">
                        <h1 className=" font-bold judul-h1"><T>Get to</T> know me</h1>
                        <HardSkills logos={[{logo: Laravel, width:"3%"}, {logo: Bootstrap, width:"3%"}]} desc={"I started learning Laravel and Bootstrap since 2021 and have built some applications with it."} projects={["Tracker", "youRnoteS", "MenITi", "To-Gather"]} setCurrentPage={setCurrentPage} setIsStart={setIsStart} isFocused={isFocused} setFocused={setFocused}/>
                        <HardSkills logos={[{logo: Tailwind, width:"3%"}, {logo: React, width:"3%"}]} desc={"I’ve recently been interested built front-end web using Tailwind and React."} projects={["Tracker", "youRnoteS"]} setCurrentPage={setCurrentPage} setIsStart={setIsStart} isFocused={isFocused} setFocused={setFocused}/>
                        <HardSkills logos={[{logo: Threejs, width:"3%"}]} desc={"I recently fell in love with learning Three.js. I implemented Three.js as well as React and Tailwind on this portfolio based on what I've learned so far."}/>
                        <HardSkills logos={[{logo: PostgreSQL, width:"3.3%"}, {logo: phpMyAdmin, width:"5%"}]} desc={"I use pgAdmin and phpMyAdmin for database management, i prefer pgAdmin for interface, familiarity, performance and scalability."}/>
                        <HardSkills logos={[{logo: JavaScript, width:"4%"}, {logo: PHP, width:"4%"}, {logo: Figma, width:"3%"}, {logo: AdminLTE, width:"3%"}, {logo: HTML, width:"4%"}, {logo: CSS, width:"4%"}]} desc={"Those are languages, frameworks, and tools that I’m familiar, confident, and have worked with."}/>
                    </div>
                </div>
            </div>
            <p className="custom-bottom-right font-sans italic max-[900px]:hidden fixed z-20">Don&apos;t quit rolling the dice except you win. </p>
        </motion.div>
        </>
    )
}

export default About;