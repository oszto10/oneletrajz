import React, { useEffect } from 'react'
import { useState } from "react";
import Actors from './Actors';
import Navbar from './Navbar';
import './Bemutatkozas.css'
import { Button } from '@mui/material/'
import LoadingMask from './LoadingMask';
import KepEsKapcsolat from './KepEsKapcsolat';


function StarWars() {

    const [people, setPeople] = useState([]);
    const [sortBy, setSortBy] = useState("asc");
    const [filter, setFilter] = useState('');

    const peopleFetch = () => {
        fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results)
      });
    }
      console.log(people)

      useEffect (() => peopleFetch(), [])

      useEffect(() => {
        console.log(setPeople)
        }, [setPeople]);

        useEffect(() => {
            sortBy === "asc"
              ? setPeople([...people].sort((a, b) => a.name > b.name ? 1 : -1)
                )
              : setPeople([...people].sort((a, b) => a.name < b.name ? 1 : -1)
                );
          }, [sortBy])

  return (


    <div className='root'>
        <Navbar></Navbar>
        <div className='container'>
        <KepEsKapcsolat/>
        <div className='bemutatkozas'>
        <div className="actors">
        <h1>Star Wars - Cast</h1>
          <header>
        <input placeholder='Search' value={filter} onChange={(event)=>{setFilter(event.target.value)}}/>
        <Button onClick={()=>{
        sortBy === "asc" ? setSortBy("desc") : setSortBy("asc");
    }} variant="contained">Sort by name</Button>
    </header>
        {people.length > 0 ? (
          <>
        <Actors filter={filter} people={people}/>
        </> ) : (
          <LoadingMask />
        )}
        </div>
        </div>
        </div>
    </div>

  )
}

export default StarWars