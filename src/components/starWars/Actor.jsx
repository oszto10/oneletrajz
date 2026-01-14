import React from 'react'
import { Button } from '@mui/material/'
import { useState } from "react";

function Actor({result, handleClick, english}) {

    const [showMore, setShowMore] = useState(false)

  return (
    <>
        <div className='result'>{result.name}
    {showMore && english && <><p className='showMore'>Height: {result.height} cm</p> <p className='showMore'>Weight: {result.mass} kg</p> <p className='showMore'>Birth: {result.birth_year}</p> <p className='showMore'>Gender: {result.gender}</p></>}
    {showMore && !english && <><p className='showMore'>Magasság: {result.height} cm</p> <p className='showMore'>Súly: {result.mass} kg</p> <p className='showMore'>Születési dátum: {result.birth_year}</p> <p className='showMore'>Neme: {result.gender}</p></>}

    {english && <><Button className='resultButton' variant='contained' onClick={() => setShowMore(!showMore)}> 
      {showMore ? "Show less" : "Show more"} </Button></>}
      {!english && <><Button className='resultButton' variant='contained' onClick={() => setShowMore(!showMore)}> 
      {showMore ? "Mutass kevesebbet" : "Mutass többet"} </Button></>}
      
      </div>
      </>
  )
}

export default Actor