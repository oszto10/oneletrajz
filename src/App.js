import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bemutatkozas from "./components/Bemutatkozas";
import MunkaTapasztalat from "./components/MunkaTapasztalat";
import NyelvismeretEsErossegek from "./components/NyelvismeretEsErossegek";
import StarWars from "./components/StarWars";
import { useState } from "react";
import WeatherApi from "./components/WeatherApi";
import Calculator from "./components/Calculator";

function App() {
  const [english, setEnglish] = useState(true);

  const handleClick = () => {
    setEnglish((oldState) => {
      if (oldState === true) {
        return false;
      } else {
        return true;
      }
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Bemutatkozas handleClick={handleClick} english={english} />
            }
          />
          <Route
            path="/tapasztalat"
            element={
              <MunkaTapasztalat handleClick={handleClick} english={english} />
            }
          />
          <Route
            path="/tanulmanyok&erossegek"
            element={
              <NyelvismeretEsErossegek
                handleClick={handleClick}
                english={english}
              />
            }
          />
          <Route
            path="/starwars"
            element={<StarWars handleClick={handleClick} english={english} />}
          />
          <Route
            path="/weatherapi"
            element={<WeatherApi handleClick={handleClick} english={english} />}
          />
          <Route
            path="/calculator"
            element={<Calculator handleClick={handleClick} english={english} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
