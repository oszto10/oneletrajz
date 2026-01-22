import React from 'react'
import { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import WeatherSearch from './WeatherSearch';
import './WeatherApi.css'

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
    <div className='weather-api'>
        {english && <>
          <h1>Weather Api</h1></>}
        {!english && <>
        <h1>Időjárás</h1></>}
        <WeatherSearch handleClick={handleClick} english={english} setSearch={setSearch} cities={cities} search={search} setButtonClick={setButtonClick}/>
      {weatherData && <>
        <WeatherCard handleClick={handleClick} english={english} weatherData={weatherData}/>
      </>}
    </div>
  )
}

export default WeatherApi