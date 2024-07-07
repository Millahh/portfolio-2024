import { BrowserRouter } from "react-router-dom";
import { DiceCanvas } from "./components/canvas";

function App() {
  return (
    <BrowserRouter>
      <DiceCanvas/>
    </BrowserRouter>
  )
}

export default App
