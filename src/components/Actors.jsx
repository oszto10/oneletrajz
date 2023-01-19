import React from 'react'
import Actor from './Actor'
import './Bemutatkozas.css'

function Actors({people}) {
  return (
    <div>{people.map((result, i)=><Actor key={i} result={result}/>)}</div>
  )
}

export default Actors