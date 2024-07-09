import { BrowserRouter } from "react-router-dom";
import { DiceCanvas } from "./components/canvas";
import { Intro, AutoLoad } from "./components";

function App() {
  return (
    <BrowserRouter>
      <AutoLoad />
      {/* <Intro/> */}
    </BrowserRouter>
  )
}

export default App
