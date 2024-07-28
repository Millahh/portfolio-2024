import { BrowserRouter } from "react-router-dom";
import { Intro, AutoLoad, About, FunFacts, Experiences, Projects } from "./components";
import { DiceIntro, Hobbies } from "./components/canvas";

function App() {
  return (
    <BrowserRouter>
      {/* <AutoLoad /> */}
      {/* <Intro/> */}
      {/* <DiceIntro/> */}
      {/* <About/> */}
      {/* <FunFacts/> */}
      {/* <Hobbies/> */}
      <Experiences />
      {/* <Projects /> */}
    </BrowserRouter>
  )
}

export default App
