import { BrowserRouter } from "react-router-dom";
import { Intro, AutoLoad, About, FunFacts } from "./components";
import { DiceIntro } from "./components/canvas";

function App() {
  return (
    <BrowserRouter>
      {/* <AutoLoad /> */}
      {/* <Intro/> */}
      {/* <DiceIntro/> */}
      {/* <About/> */}
      <FunFacts/>
    </BrowserRouter>
  )
}

export default App
