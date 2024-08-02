/* eslint-disable no-empty */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Intro, AutoLoad, About, FunFacts, Experiences, Projects } from "./components";
import { DiceIntro, Hobbies } from "./components/canvas";
import { AnimCursor } from "./constants";
// import { useState, useEffect } from "react";
import { navLinks } from "./constants";
import { NavLink } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import { color } from "framer-motion";

function getPageComponent(page) {
  switch (page) {
    case 'home':
      return <Intro />;
    case 'about':
      return <About />;
    case 'projects':
      return <Projects />;
    case 'experiences':
      return <Experiences />;
    case 'funfacts':
      return <FunFacts />;
    // case 'contact':
    //   return <Contact />;
    default:
      return <Intro />;
  }
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCurrentItemActive, setIsCurrentItemActive] = useState('inactive');
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <BrowserRouter>
      <AnimCursor/>
      <DiceIntro/>
      <div className="w-full h-12 bg-black bg-opacity-50 absolute z-20 max-md:hidden">
        <div className="navbar flex md:justify-between px-10 pt-5 xl:w-1/2 lg:w-2/3 md:w-full 2xl:m-auto max-md:hidden max-sm:hidden max-xs:hidden absolute z-20">
          <NavLink activeclassname={({ isActive }) => (isActive ? 'active' : 'inactive') (setIsCurrentItemActive('active'))} onClick={() => setCurrentPage('home')} to="/" className="flex hover:scale-125 max-md:mr-0 max-md:justify-end transition-transform duration-100 opacity-50 hover:opacity-100">HI<p className="text-sm -ml-1">👋</p></NavLink>
            {navLinks.map((link) => (
                <NavLink 
                activeclassname={({ isActive }) => (isActive ? 'active' : 'inactive') (setIsCurrentItemActive('active'))}
                onClick={() => setCurrentPage(link.id)}
                to="/" 
                key={link.id}
                className="max-md:flex m-auto max-md:mr-0 justify-center max-md:justify-end hover:scale-125 transition-transform duration-100 opacity-50 hover:opacity-100 focus:text-white max-md:w-20"
                >{link.title}</NavLink>
            ))}
        </div>
      </div>
      <div class="md:hidden max-w-screen-xl pt-4 pr-4">
          <button type="button" class="float-right p-2 w-8 h-8 rounded-lg bg-primary bg-opacity-30 hover:bg-opacity-40 focus:outline-none hover:border-transparent" onClick={() => setIsOpen(!isOpen)}>
              <svg class="w-4 h-4 float-right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          {isOpen && 
          <div class="navbar w-1/2 max-md:w-1/3 max-md:bg-primary max-md:bg-opacity-10 text-center self-center m-auto max-md:mr-0 pl-4 max-md:pr-12" id="navbar-mobile">
            <NavLink activeclassname={({ isActive }) => (isActive ? 'active' : 'inactive') (setIsCurrentItemActive('active'))} onClick={() => setCurrentPage('home')} to="/" className="flex hover:scale-125 max-md:mr-0 max-md:justify-end transition-transform duration-100 opacity-50 hover:opacity-100">HI<p className="text-sm -ml-1">👋</p></NavLink>
              {navLinks.map((link) => (
                  <NavLink 
                  activeclassname={({ isActive }) => (isActive ? 'active' : 'inactive') (setIsCurrentItemActive('active'))}
                  onClick={() => setCurrentPage(link.id)}
                  to="/" 
                  key={link.id}
                  className="max-md:flex m-auto max-md:mr-0 justify-center max-md:justify-end hover:scale-125 transition-transform duration-100 opacity-50 hover:opacity-100 focus:text-white max-md:w-20"
                  >{link.title}</NavLink>
              ))}
          </div>
          }
      </div>
      <Routes path="/">
      <Route path="/" element={getPageComponent(currentPage)} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
