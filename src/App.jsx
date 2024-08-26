/* eslint-disable no-empty */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState, useEffect, lazy, Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Intro, About, FunFacts, Experiences, Contact } from "./components";
import { DiceIntro, Hobbies } from "./components/canvas";
import { AnimCursor } from "./constants";
import { navLinks } from "./constants";
import { NavLink } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isStart, setIsStart] = useState("stop");
  const [navbarShow, setNavbarShow] = useState(false);
  const [ isFocused, setFocused ] = useState("Tracker");
  const Projects = lazy(() => import("./components/Projects"));
  const Experiences = lazy(() => import("./components/Experiences"));

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setNavbarShow(true)
    }, 4500);
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
}, []);

function getPageComponent(page) {
  switch (page) {
    case 'home':
      return <Intro delay={4} />;
    case 'homeIsVisited':
      return <Intro delay={0.1} />;
    case 'about':
      return <About currentPage={currentPage} setCurrentPage={setCurrentPage} setIsStart={setIsStart} isFocused={isFocused} setFocused={setFocused}/>;
    case 'projects':
      return <Projects isFocused={isFocused} setFocused={setFocused}/>;
    case 'experiences':
      return <Experiences />;
    case 'funfacts':
      return <FunFacts />;
    case 'contact':
      return <Contact />;
    default:
      return <Intro delay={0.1} />;
  }
}

  return (
    <BrowserRouter>
      <AnimCursor/>
      {navbarShow && 
        <>
          <div className="w-full h-12 bg-black bg-opacity-40 absolute z-30 max-md:hidden">
            <div className="navbar flex md:justify-between px-10 pt-5 xl:w-1/2 lg:w-2/3 md:w-full 2xl:m-auto max-md:hidden max-sm:hidden max-xs:hidden absolute z-30">
              <NavLink  onClick={() => {setCurrentPage('homeIsVisited'); setIsStart('homeIsVisited')}} to="/portfolio-2024/" className={`${currentPage === 'home' || currentPage === 'homeIsVisited' ? 'upScalling' : ''} flex hover:scale-125 max-md:mr-0 max-md:justify-end transition-all duration-100 text-gray-500 hover:text-white`}>HI<p className="text-sm -ml-1">👋</p></NavLink>
                {navLinks.map((link) => (
                    <NavLink 
                    onClick={() => {
                      setCurrentPage(link.id) 
                      setIsStart(link.id)
                    }}
                    to="/portfolio-2024/" 
                    key={link.id}
                    className={`${currentPage === link.id ? 'upScalling' : ''} max-md:flex m-auto max-md:mr-0 justify-center max-md:justify-end hover:scale-125 transition-all duration-100 text-gray-500 hover:text-white max-md:w-20`}
                    >{link.title}</NavLink>
                ))}
            </div>
          </div>
          <div class="md:hidden max-w-screen-xl pt-4 pr-4">
              <button onClick={() => setIsOpen(!isOpen)} type="button" class="float-right p-2 w-8 h-8 rounded-lg bg-primary bg-opacity-30 hover:bg-opacity-40 focus:outline-none hover:border-transparent absolute z-30 right-4">
                  <svg class="w-4 h-4 float-right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              {isOpen && 
              <div class="navbar w-1/2 max-md:w-1/3 max-md:bg-primary max-md:bg-opacity-10 text-center self-center m-auto max-md:mr-0 pl-4 max-md:pr-12 absolute z-30 right-4" id="navbar-mobile">
                <NavLink  onClick={() => {setCurrentPage('homeIsVisited'); setIsStart('homeIsVisited')}} to="/portfolio-2024/" className={`${currentPage === 'home' || currentPage === 'homeIsVisited' ? 'upScalling' : ''} flex hover:scale-125 max-md:mr-0 max-md:justify-end transition-transform duration-100 opacity-50 hover:opacity-100`}>HI<p className="text-sm -ml-1">👋</p></NavLink>
                  {navLinks.map((link) => (
                    <NavLink 
                      onClick={() => {
                        setCurrentPage(link.id) 
                        setIsStart(link.id)
                      }}
                      to="/portfolio-2024/" 
                      key={link.id}
                      className={`${currentPage === link.id ? 'upScalling' : ''} max-md:flex m-auto max-md:mr-0 justify-center max-md:justify-end hover:scale-125 transition-transform duration-100 text-gray-500 hover:text-white max-md:w-20`}
                      >{link.title}</NavLink>
                  ))}
              </div>
              }
          </div>
        </>
      }
      <DiceIntro isStart={isStart} setIsStart={setIsStart}/>
      <Suspense>
        <Routes>
          <Route path="/portfolio-2024/" element={getPageComponent(currentPage)} />
        </Routes>
      </Suspense>
      <Hobbies isShow={currentPage == 'funfacts' ? true : false}/>
    </BrowserRouter>
  )
}

export default App
