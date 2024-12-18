/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import P from "./texts/Paragraph";
import { Resources } from "../constants";
import { Github } from "../assets";
import { useState, useEffect } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { projects, variants } from "../constants";
import { motion } from "framer-motion";

const Photos = ({ name, img, date, desc, tech }) => {
    return (
        <div className="projects-card max-[1280px]:mt-5 max-[1280px]:mb-8 max-md:mb-5 relative w-4/5 max-md:h-44 max-[1280px]:h-48 self-center mx-auto hover:scale-110 transition-all duration-150 cursor-pointer">
            <img src={img} className="object-cover w-full h-full border-4 max-[1280px]:rounded-xl rounded-3xl absolute z-0 desc"/>
            <div className="projects-card-container absolute z-1 bg-black bg-opacity-50 w-full h-full border-4 max-[1280px]:rounded-xl rounded-3xl max-[1280px]:p-3 max-xs:p-3 max-md:py-1 desc-hide">
                <div className="github bg-tertiary self-center max-[1280px]:px-2 px-5 text-md max-[1280px]:rounded-2xl rounded-full align-middle inline-block">
                    <p className="align-middle pt-[1.5px] text-h5 max-[1280px]:text-[0.7rem] max-xs:text-[0.7rem] max-md:text-[0.6rem]">{date}</p>
                </div>
                <p className=" text-white font-semibold mt-2 max-xs:mt-2 max-md:mt-0 max-xs:text-sm max-md:text-[0.6rem] max-lg:text-sm text-h4">{name}</p>
                <p className=" text-white mt-2 max-xs:text-xs max-md:text-[0.6rem] max-lg:text-[0.7rem] text-h5">{desc}</p>
                <div className="absolute bottom-6 max-xl:bottom-2 github bg-secondary self-center max-[1280px]:px-2 px-5 text-md max-[1280px]:rounded-2xl rounded-full align-middle inline-block">
                    <p className="align-middle pt-[1.5px] text-h5 max-[1280px]:text-[0.65rem] max-xs:text-[0.65rem] max-md:text-[0.6rem]">{tech}</p>
                </div>
            </div>
        </div>
    )
}

const ProjectDesc = ({isFocused = "Tracker"}) => {
    return (
        <>
            {projects.map((project) => (
                (isFocused == project.name)  &&
                <div key={project.name} className="max-[450px]:pb-20">
                    <div className="bg-macbook bg-contain bg-no-repeat bg-center max-xs:h-52 max-md:h-52 max-2xl:h-80 content-center mt-3">
                        <video className="mx-auto max-xs:w-9/12 xs:w-9/12 sm:w-9/12 xl:w-3/5 lg:w-2/3 max-xs:h-3/4 xs:h-3/4 sm:h-3/4 xl:h-3/4 lg:h-4/5 -mt-5" loop muted autoPlay={true}>
                            <source src={project.vid} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <div className="flex projects-judul">
                            <p className="max-[900px]:text-3xl judul-h2 font-bold max-[900px]:mr-5">{project.name}</p>
                            <div className="github bg-secondary self-center px-3 min-[1400px]:px-5 text-md rounded-xl min-[1400px]:rounded-full flex align-middle hover:bg-[#5E2859]">
                                <a href={project.link} target="_blank"><p className="text-h5 max-[900px]:text-sm inline">{project.visit}</p></a>
                                <img src={Github} className="max-[900px]:w-4 max-[900px]:h-4 max-[900px]:ml-1 self-center align-middle"/>
                            </div>
                        </div>
                        <Resources select={project.name}/>
                    </div>
                </div>
            ))}

        </>
    )
}

const MobileCarousel = (props) => {
    return (
        <>
            <Carousel className="h-2/5 max-xs:h-fit max-xs:mb-4"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute top-52 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                        />
                    ))}
                    </div>
                )}
                prevArrow={({ handlePrev }) => (
                    <IconButton
                    variant="text"
                    color="white"
                    size="sm"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="black"
                        className="h-4 w-4"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                    variant="text"
                    color="white"
                    size="sm"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="black"
                        className="h-4 w-4"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                    </IconButton>
                )}>
                {props.children}
            </Carousel>
        </>
    )
}

const Projects = ({isFocused, setFocused}) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 450px)");
    
        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);
    
        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
          setIsMobile(event.matches);
        };
    
        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);
    
        // Remove the listener when the component is unmounted
        return () => {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
        }, []);
    

    return (
        <>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            layoutScroll="false">
            <div className="projects max-[900px]:py-10 max-xs:pb-16 px-20 max-lg:px-10 w-full m-auto h-screen max-[450px]:overflow-y-auto overflow-y-hidden flex max-[450px]:block flex-row absolute z-20">
            {!isMobile && 
                <div className="basis-4/12 max-[900px]:basis-2/5 max-xs:basis-1/2 overflow-y-auto max-xs:overflow-y-hidden items-center">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            onFocus={() => {
                            setFocused(project.name);
                            }}
                            tabIndex="0"
                        >
                            <Photos isFocused={isFocused} img={project.img} date={project.date} name={project.name} desc={project.desc} tech={project.tech}/>
                        </div>
                    ))}
                </div>
            }{isMobile && 
                <MobileCarousel>
                    {projects.map((project) => (
                            <div
                                key={project.name}
                                onFocus={() => {
                                setFocused(project.name);
                                }}
                                tabIndex="0"
                            >
                                <Photos isFocused={isFocused} img={project.img} date={project.date} name={project.name} desc={project.desc} tech={project.tech}/>
                            </div>
                    ))}
                </MobileCarousel>
            }
                <div className="basis-4/6 max-[900px]:basis-3/5 max-xs:basis-1/2 pl-10 max-[450px]:pl-0 h-full overflow-y-auto z-20">
                    <ProjectDesc isFocused={isFocused}/>
                </div>
            </div>
        </motion.div>
        <motion.p 
            initial="hidden"
            animate="visible"
            variants={variants}
            layoutScroll="false"
            className="custom-bottom-right font-sans italic max-[900px]:hidden max-xs:text-[0.5rem] fixed z-20"
        >Roll the dice, then drive it!</motion.p>
        </>
    )
} 

export default Projects