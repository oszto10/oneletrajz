import React from 'react'

function WeatherCard({weatherData, english, handleClick}) {
  return (
    <div className='weather-data-card' >
        <div className='weather-data' >
        {english && <><p className='weather-text'>{"Temperature: " + weatherData.current.temp_c + "°C"}</p>
        <p className='weather-text'>{"Condition: " + weatherData.current.condition.text}</p>
        <p className='weather-text'>{"Wind: " + weatherData.current.wind_kph + " km/h"}</p>
        <p className='weather-text'>{"Humidity: " + weatherData.current.humidity + "%"}</p></>}
        {!english && <><p className='weather-text'>{"Hőmérséklet: " + weatherData.current.temp_c + "°C"}</p>
        <p className='weather-text'>{"Szél: " + weatherData.current.wind_kph + " km/h"}</p>
        <p className='weather-text'>{"Páratartalom: " + weatherData.current.humidity + "%"}</p></>}
        </div>
    </div>
  )
}

export default WeatherCard