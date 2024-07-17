/* eslint-disable no-undef */
import { motion, AnimatePresence } from "framer-motion";
import P from "./texts/Paragraph";
import { Github } from "../assets";

const Projects = () => {

    return (
        <>
            <div className="projects py-10 px-20 min-w-full h-screen overflow-y-hidden flex flex-row">
                <div className=" basis-4/12 space-y-10 overflow-y-auto items-center">
                    <div className="relative w-4/5 h-2/5 self-center mx-auto">
                        <img src="./experiences/image.png" className=" object-cover w-full h-full border-4 rounded-xl absolute z-0 desc"/>
                        <div className=" absolute z-1 bg-black bg-opacity-50 w-full h-full border-4 rounded-xl p-3 desc-hide">
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
                </div>
                <div className=" basis-4/6 p-5 pl-10 overflow-y-auto">
                    <div className="flex">
                        <p className="text-3xl font-bold mr-5">Tracker</p>
                        <div className="github bg-secondary self-center px-3 text-md rounded-xl flex align-middle">
                            <p className="text-sm inline align-middle pt-0.5">Visit github</p>
                            <img src={Github} className=" w-4 h-4 ml-1 self-center align-middle"/>
                        </div>
                    </div>
                    <p>Introducing a dynamic application that designed to track your employees' work progress. This application supports multiple user roles which increase transparency and productivity.</p>
                    <p>Employer role:</p>
                    <li>Create tasks and customize deadlines, task breakdowns to be checked by employees, provides file input as reported work result, etc.</li>
                    <li>Assign tasks to specific users.</li>
                    <li>Edit and delete tasks as needed.</li>
                    <li>Track employee’s progress through displayed progress bars to easily visualize task completion and displays who has completed it.</li>
                    <p>Employee role</p>
                    <li>Access all your tasks and see whether you have an upcoming task to keep you on track.</li>
                    <li>Allows you to check off completed task-breakdowns and let your boss see it.</li>
                    <li>Allows you to upload resources as your proof of completed task to make it transparent.</li>
                </div>
            </div>
        </>
    )
}

export default Projects