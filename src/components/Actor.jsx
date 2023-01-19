import React from 'react'
import './Bemutatkozas.css'
import { Button } from '@mui/material/'
import { useState } from "react";

function Actor({result}) {

    const [showMore, setShowMore] = useState(false)

  return (
    <>
        <div className='result'>{result.name}
    {showMore && <><p className='showMore'>Height: {result.height}</p> <p className='showMore'>Weight: {result.mass}</p> <p className='showMore'>Birth: {result.birth_year}</p> <p className='showMore'>Gender: {result.gender}</p></>}
    <Button className='resultButton' variant='contained' onClick={() => setShowMore(!showMore)}> 
      {showMore ? "Show less" : "Show more"} </Button>
      
      
      </div>
      </>
  )
}

export default Actor