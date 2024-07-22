/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import P from "./texts/Paragraph";
import { Github } from "../assets";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

const Photos = () => {
    return (
        <div className="mt-5 mb-10 max-md:mb-5 relative w-4/5 h-44 max-[900px]:h-36 max-md:h-28 max-xs:h-24 self-center mx-auto hover:scale-110 transition-all duration-150 cursor-pointer">
            <img src="./experiences/image.png" className=" object-cover w-full h-full max-xs:h-44 border-4 rounded-xl absolute z-0 desc"/>
            <div className=" absolute z-1 bg-black bg-opacity-50 w-full h-full max-xs:h-44 border-4 rounded-xl p-3 desc-hide">
                <div className="github bg-tertiary self-center px-2 text-md rounded-2xl align-middle inline-block">
                    <p className="align-middle pt-[1.5px] text-[0.7rem]">2024 | Self-project</p>
                </div>
                <p className=" text-white font-semibold">Tracker</p>
                <p className=" text-white text-xs">Task progress tracking application that supports multi role login.</p>
                <div className="github bg-secondary self-center px-2 text-md rounded-2xl align-middle inline-block">
                    <p className="align-middle pt-[1.5px] text-[0.7rem]">Laravel | Tailwind</p>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const [ isFocused, setFocused ] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");
    
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
            <div className="projects pb-20 px-20 max-lg:px-10 min-w-full h-screen overflow-y-hidden flex max-xs:block flex-row">
            {!isMobile && 
                <div className="basis-4/12 max-[900px]:basis-2/5 xs:basis-1/2 overflow-y-auto max-xs:overflow-y-hidden items-center">
                    <div
                        onFocus={() => {
                        setFocused("Tracker");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Yournotes");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Meniti");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Issueticket");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Togather");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Dotify");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Influenger");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                </div>
            }{isMobile && 
                <Carousel
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
                    )}>
                <div
                        onFocus={() => {
                        setFocused("Tracker");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Yournotes");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Meniti");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Issueticket");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Togather");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Dotify");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                    <div
                        onFocus={() => {
                        setFocused("Influenger");
                        }}
                        onBlur={() => {
                        setFocused("");
                        }}
                        tabIndex="0"
                    >
                        <Photos isFocused={isFocused}/>
                    </div>
                </Carousel>
            }
                <div className=" basis-4/6 max-[900px]:basis-3/5 xs:basis-1/2 pl-10 h-full overflow-y-auto">
                    <img src="./tes.gif" className=" w-3/4"/>
                    {(isFocused == "Tracker")  &&
                    <div>
                        <div className="flex">
                            <p className="text-3xl font-bold mr-5">Tracker</p>
                            <div className="github bg-secondary self-center px-3 text-md rounded-xl flex align-middle">
                                <p className="text-sm inline align-middle pt-0.5">Visit github</p>
                                <img src={Github} className=" w-4 h-4 ml-1 self-center align-middle"/>
                            </div>
                        </div>
                        <p>Introducing a <P>dynamic</P> application that designed to <P>track your employees&lsquo; work progress</P>. This application <P>supports multiple user roles</P> which increase transparency and productivity.</p>
                        <p>Employer role:</p>
                        <li><P>Create tasks</P> and customize deadlines, task breakdowns to be checked by employees, provides <P>file input</P> as reported work result, etc.</li>
                        <li><P>Assign</P> tasks to specific users.</li>
                        <li><P>Edit</P> and <P>delete</P> tasks as needed.</li>
                        <li><P>Track</P> employee’s progress through <P>displayed progress bars</P> to easily visualize task completion and displays who has completed it.</li>
                        <p>Employee role</p>
                        <li>Access <P>all your tasks</P> and see whether you have an <P>upcoming task</P> to keep you on track.</li>
                        <li>Allows you to <P>check off</P> completed task-breakdowns and let your boss see it.</li>
                        <li>Allows you to <P>upload resources</P> as your proof of completed task to make it transparent.</li>
                    </div>
                    }{(isFocused == "Yournotes")  &&
                    <div>
                        <div className="flex">
                            <p className="text-3xl font-bold mr-5">youRnoteS</p>
                            <div className="github bg-secondary self-center px-3 text-md rounded-xl flex align-middle">
                                <p className="text-sm inline align-middle pt-0.5">Visit github</p>
                                <img src={Github} className=" w-4 h-4 ml-1 self-center align-middle"/>
                            </div>
                        </div>
                        <p>Introducing a <P>simple</P> yet powerful <P>personal note</P> application that allows you to <P>create</P>, <P>save</P>, and <P>manage</P> your notes effortlessly.  Enjoy the convenience of <P>responsive design</P>, you can access it whether you&lsquo;re on your phone, tablet, or desktop which keeps you organized wherever you go. </p>
                    </div>
                    }{(isFocused == "Meniti")  &&
                    <div>
                        <div className="flex">
                            <p className="text-3xl font-bold mr-5">menITi</p>
                            <div className="github bg-secondary self-center px-3 text-md rounded-xl flex align-middle">
                                <p className="text-sm inline align-middle pt-0.5">Visit github</p>
                                <img src={Github} className=" w-4 h-4 ml-1 self-center align-middle"/>
                            </div>
                        </div>
                        <p>Introducing a <P>progressive web application (PWA)</P> for <P>finding</P> and <P>offering</P> IT mentoring services. Built with <P>Laravel</P> and <P>Bootstrap</P> framework, <P>PgAdmin4</P> as a management tool for PostgreSQL databases, and <P>Figma</P> as an interface design and prototyping tools.  I performed <P>user needs analysis</P> (created personas, scenarios, user stories, determined features, prototyping and evaluating), designed <P>sequence diagrams</P>, created <P>entity relationship diagrams (ERD)</P>, <P>class diagrams</P>, implemented program <P>code</P>, and conducted <P>valuation & usability testing</P>.</p>
                    </div>
                    }{(isFocused == "Issueticket")  &&
                    <div>
                        <div className="flex">
                            <p className="text-3xl font-bold mr-5">Issue Ticket Web</p>
                            <div className="github bg-secondary self-center px-3 text-md rounded-xl flex align-middle">
                                <p className="text-sm inline align-middle pt-0.5">Visit github</p>
                                <img src={Github} className=" w-4 h-4 ml-1 self-center align-middle"/>
                            </div>
                        </div>
                        <p>Introducing an innovative issue ticketing web application, built with <P>adminLTE</P> as the front-end framework, <P>Laravel</P> as the back-end framework, and <P>PostgreSQL</P> as the database management system. Issue Ticket Web makes programmers&lsquo; jobs easier with comprehensive tools to <P>report</P> and <P>solve web bugs</P> to deliver and improve solutions for users</p>
                    </div>
                    }{(isFocused == "Togather")  && 
                    <div>
                        <div className="flex">
                            <p className="text-3xl font-bold mr-5">To-Gather</p>
                            <div className="github bg-secondary self-center px-3 text-md rounded-xl flex align-middle">
                                <p className="text-sm inline align-middle pt-0.5">Visit github</p>
                                <img src={Github} className=" w-4 h-4 ml-1 self-center align-middle"/>
                            </div>
                        </div>
                        <p>Introducing To-Gather, <P>Final project</P> of Rekayasa Perangkat Lunak subject built with <P>JavaScript</P> and <P>Laravel</P> Framework. To-Gather is a <P>dynamic</P> application to help <P>find group members</P> for competitions or projects on specific topics.</p>
                        <p>The design ad developing process includes:</p>
                        <li><P>Problem definition</P></li>
                        <li>Determine <P>end-user characteristics</P> and <P>system boundaries</P></li>
                        <li>Identify <P>actors</P></li>
                        <li>Identify functional and non-functional <P>requirements</P></li>
                        <li>Create <P>activity diagrams</P>, <P>use case diagrams</P>, use case <P>scenarios</P></li>
                        <li>Create <P>interfaces</P></li>
                        <li><P>Implement</P> them in the form of programming.</li>
                    </div>
                    }{(isFocused == "Dotify")  &&
                    <div>
                        <div className="flex">
                            <p className="text-3xl font-bold mr-5">Dotify</p>
                            <div className="github bg-secondary self-center px-3 text-md rounded-xl flex align-middle">
                                <p className="text-sm inline align-middle pt-0.5">Visit github</p>
                                <img src={Github} className=" w-4 h-4 ml-1 self-center align-middle"/>
                            </div>
                        </div>
                        <p>Introducing Dotify, <P>final project</P> of the Interactive System Programming subject built with <P>Kotlin</P>. Dotify is a <P>mobile application</P> created to give efficient tool for everyday organization and productivity, it has three key features: </p>
                        <li>&quot;My Schedule&quot; : brief <P>planning</P> and <P>scheduling</P>.</li>
                        <li>&quot;Reminder&quot; : <P>Notifications</P> based on specified times.</li>
                        <li>&quot;Tips & Tricks&quot; : <P>Insightful advice</P> about productivity related.</li>
                    </div>
                    }{(isFocused == "Influenger")  &&
                    <div>
                        <div className="flex">
                            <p className="text-3xl font-bold mr-5">InfluenGer</p>
                            <div className="github bg-secondary self-center px-3 text-md rounded-xl flex align-middle">
                                <p className="text-sm inline align-middle pt-0.5">Visit github</p>
                                <img src={Github} className=" w-4 h-4 ml-1 self-center align-middle"/>
                            </div>
                        </div>
                        <p>Introducing InfluenGer, a <P>prototype design</P> application for <P>final project</P> of Perancangan Pengalaman Pengguna subject using <P>Figma</P> cloud-based design app. InfluenGer is an innovative application that <P>connects</P> potential <P>endorsement seekers</P> with <P>influencers</P>. The design process includes <P>defining</P> and describing the <P>problem</P>, proposing <P>solutions</P> and <P>comparing</P> it with <P>competitors&lsquo;</P> products to find the best solution</p>
                    </div>
                    }
                </div>
            </div>
        </>
    )
} 

export default Projects