/* eslint-disable no-empty */
/* eslint-disable react/no-unknown-property */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Intro, AutoLoad, About, FunFacts, Experiences, Projects, Navbar } from "./components";
import { DiceIntro, Hobbies } from "./components/canvas";
import { AnimCursor } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <AnimCursor/>
      <DiceIntro/>
      <Routes path="/">
      {/* <Route path="funfacts" element={<AutoLoad />} /> */}
      <Route index element={<Intro/>} />
      {/* <Route index element={<DiceIntro/>} /> */}
      {/* <Route path="funfacts" element={<Intro/>} />  */}
      {/* <Route path="funfacts" element={<DiceIntro/>} />  */}
      <Route path="about" element={<About/>} />
      <Route path="funfacts" element={<FunFacts/>} />
      <Route path="experiences" element={<Experiences />} />
      <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
