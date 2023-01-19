import React from 'react'
import Actor from './Actor'
import './Bemutatkozas.css'

function Actors({people, filter}) {
  return (
    <div>
      
      {people
      .filter((people)=>people.name.toLowerCase().includes(filter.toLowerCase()))
      .map((result, i)=><Actor key={i} result={result}/>)}</div>
  )
}

export default Actors