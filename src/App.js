import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./components/Experience";
import Education from "./components/Education";
import StarWars from "./components/StarWars";
import { useState } from "react";
import WeatherApi from "./components/WeatherApi";
import Calculator from "./components/Calculator";
import ValutaChange from "./components/ValutaChange";
import Introduction from "./components/Introduction";

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
              <Introduction handleClick={handleClick} english={english} />
            }
          />
          <Route
            path="/experience"
            element={<Experience handleClick={handleClick} english={english} />}
          />
          <Route
            path="/education"
            element={<Education handleClick={handleClick} english={english} />}
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
          <Route
            path="/valutachange"
            element={
              <ValutaChange handleClick={handleClick} english={english} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
