/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import P from "./texts/Paragraph";
import { Resources } from "../constants";
import { Github } from "../assets";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { projects } from "../constants";
import { macbook } from "../assets";

const Photos = ({ name, img, date, desc, tech }) => {
    return (
        <div className="mt-5 mb-10 max-md:mb-5 relative w-4/5 h-44 max-[900px]:h-36 max-md:h-28 max-[450px]:h-44 self-center mx-auto hover:scale-110 transition-all duration-150 cursor-pointer">
            <img src={img} className=" object-cover w-full h-full border-4 rounded-xl absolute z-0 desc"/>
            <div className="absolute z-1 bg-black bg-opacity-50 w-full h-full border-4 rounded-xl p-3 desc-hide">
                <div className="github bg-tertiary self-center px-2 text-md rounded-2xl align-middle inline-block">
                    <p className="align-middle pt-[1.5px] text-[0.7rem]">{date}</p>
                </div>
                <p className=" text-white font-semibold mt-2 max-lg:text-sm">{name}</p>
                <p className=" text-white text-xs max-lg:text-[0.7rem]">{desc}</p>
                <div className="absolute bottom-6 max-xl:bottom-2 github bg-secondary self-center px-2 text-md rounded-2xl align-middle inline-block">
                    <p className="align-middle pt-[1.5px] text-[0.65rem]">{tech}</p>
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
                    <div className="bg-macbook bg-contain bg-no-repeat bg-center max-xs:h-52 xs:h-52 md:h-80 content-center">
                        <video className="mx-auto max-xs:w-9/12 xs:w-9/12 sm:w-9/12 xl:w-3/5 lg:w-2/3 max-xs:h-3/4 xs:h-3/4 sm:h-3/4 xl:h-3/4 lg:h-4/5 -mt-5" loop muted autoPlay={true}>
                            <source src={project.vid} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <div className="flex">
                            <p className="text-3xl font-bold mr-5">{project.name}</p>
                            <div className="github bg-secondary self-center px-3 text-md rounded-xl flex align-middle">
                                <p className="text-sm inline align-middle pt-0.5">{project.visit}</p>
                                <img src={Github} className=" w-4 h-4 ml-1 self-center align-middle"/>
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
                        stroke="currentColor"
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
                        stroke="currentColor"
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

const Projects = () => {
    const [ isFocused, setFocused ] = useState("Tracker");
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
            <Navbar/>
            <div className="projects pb-20 max-xs:pb-16 px-20 max-lg:px-10 w-full 2xl:w-9/12 min-[2000px]:w-1/2 m-auto h-screen max-[450px]:overflow-y-auto overflow-y-hidden flex max-[450px]:block flex-row">
            {!isMobile && 
                <div className="basis-4/12 max-[900px]:basis-2/5 max-xs:basis-1/2 overflow-y-auto max-xs:overflow-y-hidden items-center">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            onFocus={() => {
                            setFocused(project.name);
                            }}
                            onBlur={() => {
                            setFocused("");
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
                                onBlur={() => {
                                setFocused("");
                                }}
                                tabIndex="0"
                            >
                                <Photos isFocused={isFocused} img={project.img} date={project.date} name={project.name} desc={project.desc} tech={project.tech}/>
                            </div>
                    ))}
                </MobileCarousel>
            }
                <div className="basis-4/6 max-[900px]:basis-3/5 max-xs:basis-1/2 pl-10 max-[450px]:pl-0 h-full overflow-y-visible ">
                    <ProjectDesc isFocused={isFocused}/>
                </div>
            </div>
        </>
    )
} 

export default Projects