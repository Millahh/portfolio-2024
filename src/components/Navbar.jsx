/* eslint-disable react/prop-types */
const Navbar = () => {
    return (
        <>
            <div className="navbar flex justify-between px-10 py-5 max-md:w-full w-1/2">
                <a className="flex hover:scale-125 transition-transform duration-100 opacity-50 hover:opacity-100">HI<p className="text-sm -ml-1">👋</p></a>
                <a>ABOUT</a>
                <a>PROJECTS</a>
                <a>EXPERIENCES</a>
                <a>FUN FACTS</a>
                <a>CONTACT</a>
            </div>
        </>
    )
}

export default Navbar;