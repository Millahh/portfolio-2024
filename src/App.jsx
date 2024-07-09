import { BrowserRouter } from "react-router-dom";
import { Intro, AutoLoad } from "./components";
import { DiceIntro } from "./components/canvas";

function App() {
  return (
    <BrowserRouter>
      {/* <AutoLoad /> */}
      {/* <Intro/> */}
      <DiceIntro/>
    </BrowserRouter>
  )
}

export default App
