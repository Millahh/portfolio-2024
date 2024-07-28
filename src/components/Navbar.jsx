/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { navLinks } from "../constants";

const Links = () => {
    return (
        <>
            {navLinks.map((link) => (
                <a 
                key={link.id}
                className="max-md:flex m-auto max-md:mr-0 justify-center max-md:justify-end hover:scale-125 transition-transform duration-100 opacity-50 hover:opacity-100 focus:opacity-100 max-md:w-20"
                >{link.title}</a>
            ))}
        </>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="navbar flex md:justify-between px-10 py-5 xl:w-1/2 lg:w-2/3 md:w-full max-md:hidden max-sm:hidden max-xs:hidden">
                <a className="flex hover:scale-125 transition-transform duration-100 opacity-50 hover:opacity-100">HI<p className="text-sm -ml-1">👋</p></a>
                <Links/>
            </div>
            <div class="md:hidden max-w-screen-xl pt-4 pr-4">
                <button type="button" class="float-right p-2 w-8 h-8 rounded-lg bg-primary bg-opacity-30 hover:bg-opacity-40 focus:outline-none hover:border-transparent" onClick={() => setIsOpen(!isOpen)}>
                    <svg class="w-4 h-4 float-right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                {isOpen && 
                <div class="navbar w-1/2 max-md:w-1/3 max-md:bg-primary max-md:bg-opacity-10 text-center self-center m-auto max-md:mr-0 pl-4 max-md:pr-10" id="navbar-mobile">
                    <a className="flex m-auto hover:scale-125 justify-center max-md:mr-0 max-md:justify-end transition-transform duration-100 opacity-50 hover:opacity-100 w-20">HI<p className="text-sm -ml-1">👋</p></a>
                    <Links/>
                </div>
                }
            </div>
        </>
    )
}

export default Navbar;