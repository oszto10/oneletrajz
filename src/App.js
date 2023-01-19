import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bemutatkozas from "./components/Bemutatkozas";
import MunkaTapasztalat from "./components/MunkaTapasztalat";
import NyelvismeretEsErossegek from "./components/NyelvismeretEsErossegek";
import StarWars from "./components/StarWars";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bemutatkozas />} />
          <Route path="/tapasztalat" element={<MunkaTapasztalat />} />
          <Route
            path="/tanulmanyok&erossegek"
            element={<NyelvismeretEsErossegek />}
          />
          <Route path="/starwars" element={<StarWars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
