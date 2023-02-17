import React from 'react'
import { useEffect, useState } from 'react';
import Contact from './Contact';
import WeatherCard from './WeatherCard';
import WeatherSearch from './WeatherSearch';
import Navbar from './Navbar';

function WeatherApi({english, handleClick}) {

    const [search, setSearch] = useState("")
    const [cities, setCities] = useState([])
    const [weatherData, setWeatherData] = useState(null)
    const [buttonClick, setButtonClick] = useState(0)
    

    useEffect(() => {console.log(cities)}, [cities])
      

    useEffect(() => {
        if(search.length > 2) {
          fetch(`https://api.weatherapi.com/v1/search.json?key=1eb43134033c41ab8b8151501230802&q=${search}`)
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            setCities(data)
           
          })
        } 
      }, [search])

     

      

      useEffect(() => {
        console.log(weatherData)
      }, [weatherData])

      useEffect(() => {
        if(buttonClick !== 0){
          fetch(
            `https://api.weatherapi.com/v1/current.json?key=1eb43134033c41ab8b8151501230802&q=${search}&aqi=no`
          )
            .then((response) => {
              return response.json()
            })
            .then((data) => {
              setWeatherData(data)
            })
        } 
      }, [buttonClick])

  return (
    <div className='root'>
        <Navbar handleClick={handleClick} english={english}></Navbar>
        <div className='container'>
    
        <Contact />
        <div className='weather-api'>
        <WeatherSearch handleClick={handleClick} english={english} setSearch={setSearch} cities={cities} search={search} setButtonClick={setButtonClick}/>
      {weatherData && <>
        <WeatherCard handleClick={handleClick} english={english} weatherData={weatherData}/>
      </>}
    </div>
    </div>
    </div>
  )
}

export default WeatherApi