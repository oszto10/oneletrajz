import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import StarWars from "./components/starWars/StarWars";
import { useState } from "react";
import WeatherApi from "./components/weatherApi/WeatherApi";
import Calculator from "./components/calculator/Calculator";
import ExchangeRate from "./components/exchangeRate/ExchangeRate";
import Introduction from "./components/introduction/Introduction";

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
            path="/exchangerate"
            element={
              <ExchangeRate handleClick={handleClick} english={english} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
