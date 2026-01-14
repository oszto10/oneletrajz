import React from 'react'
import Actor from './Actor'

function Actors({people, filter, handleClick, english}) {
  return (
    <div>
      
      {people
      .filter((people)=>people.name.toLowerCase().includes(filter.toLowerCase()))
      .map((result, i)=><Actor key={i} result={result} handleClick={handleClick} english={english}/>)}</div>
  )
}

export default Actors