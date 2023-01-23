import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">Introduction</Link>
        <Link to="/tapasztalat">Experience</Link>
        <Link to="/tanulmanyok&erossegek">Studies</Link>
        <Link to="/starwars">Star Wars</Link>
    </div>
  )
}

export default Navbar