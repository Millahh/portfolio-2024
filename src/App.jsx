/* eslint-disable no-empty */
/* eslint-disable react/no-unknown-property */
import { BrowserRouter } from "react-router-dom";
import { Intro, AutoLoad, About, FunFacts, Experiences, Projects } from "./components";
import { DiceIntro, Hobbies } from "./components/canvas";
import { AnimCursor } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <AnimCursor/>
      {/* <AutoLoad /> */}
      {/* <Intro/> */}
      {/* <DiceIntro/> */}
      <About/>
      {/* <FunFacts/> */}
      {/* <Experiences /> */}
      {/* <Projects /> */}
    </BrowserRouter>
  )
}

export default App
