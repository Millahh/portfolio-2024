import { BrowserRouter } from "react-router-dom";
import { DiceCanvas } from "./components/canvas";
import { Intro, AutoLoad } from "./components";

function App() {
  return (
    <BrowserRouter>
      {/* <DiceCanvas/> */}
      <AutoLoad />
    </BrowserRouter>
  )
}

export default App
