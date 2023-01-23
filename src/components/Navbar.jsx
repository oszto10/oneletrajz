import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { Button } from '@mui/material';

function Navbar({english, handleClick}) {
  return (
    <div className='navbar'>
      {english && <><Link to="/">Introduction</Link>
        <Link to="/tapasztalat">Experience</Link>
        <Link to="/tanulmanyok&erossegek">Education</Link>
        <Link to="/starwars">Star Wars</Link></>}
        {!english && <> <Link to="/">Bemutatkozás</Link>
        <Link to="/tapasztalat">Tapasztalat</Link>
        <Link to="/tanulmanyok&erossegek">Tanulmányok</Link>
        <Link to="/starwars">Star Wars</Link></>}
        
        <Button className='englishButton' variant='contained' onClick={()=> handleClick(!english)}>{english ? "HUN" : "ENG"}</Button>
    </div>
  )
}

export default Navbar