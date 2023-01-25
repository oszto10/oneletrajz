import React from 'react'

function WeatherSearch({ setSearch, cities, search, setButtonClick, english, handleClick}) {
  return (
    
        <div className="search-div">
            <div className="search-bar">
            {english && <>
                 <input className='city-input' list="city-search" placeholder='Search for a city' type="text" onChange={(event) => {
                    setSearch(event.target.value)
                }} />
      
                <datalist id="city-search">
                {cities.map((city, index) => <option key={index} value={city.name}>{city.name}</option>)}
                </datalist>
                <button className='search-button' onClick={() => {
                setButtonClick((oldValue) => oldValue + 1)
                }}><img className="search-icon" src="images/search.svg" alt="search" /></button>
                </>}
                {!english && <><input className='city-input' list="city-search" placeholder='Írd be egy város nevét' type="text" onChange={(event) => {
                    setSearch(event.target.value)
                }} />
      
                <datalist id="city-search">
                {cities.map((city, index) => <option key={index} value={city.name}>{city.name}</option>)}
                </datalist>
                <button className='search-button' onClick={() => {
                setButtonClick((oldValue) => oldValue + 1)
                }}><img className="search-icon" src="images/search.svg" alt="search" /></button></>}

            </div>
            <div className="city-name">{search}</div>
        </div>

  )
}

export default WeatherSearch