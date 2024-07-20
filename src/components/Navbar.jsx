/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="navbar flex md:justify-between px-10 py-5 xl:w-1/2 lg:w-2/3 md:w-full max-md:hidden max-sm:hidden max-xs:hidden">
                <a className="flex hover:scale-125 transition-transform duration-100 opacity-50 hover:opacity-100">HI<p className="text-sm -ml-1">👋</p></a>
                <a>ABOUT</a>
                <a>PROJECTS</a>
                <a>EXPERIENCES</a>
                <a>FUN FACTS</a>
                <a>CONTACT</a>
            </div>
            <div class="md:hidden max-w-screen-xl pt-4 pr-4">
                <button type="button" class="float-right p-2 w-8 h-8 rounded-lg bg-primary bg-opacity-30 hover:bg-opacity-40 focus:outline-none hover:border-transparent" onClick={() => setIsOpen(!isOpen)}>
                    <svg class="w-4 h-4 float-right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                {isOpen && 
                <div class="navbar w-full pl-5" id="navbar-mobile">
                    <a className="flex hover:scale-125 transition-transform duration-100 opacity-50 hover:opacity-100">HI<p className="text-sm -ml-1">👋</p></a>
                    <a className="flex">ABOUT</a>
                    <a className="flex">PROJECTS</a>
                    <a className="flex">EXPERIENCES</a>
                    <a className="flex">FUN FACTS</a>
                    <a className="flex">CONTACT</a>
                </div>
                }
            </div>
        </>
    )
}

export default Navbar;