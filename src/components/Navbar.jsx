import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">Bemutatkozás</Link>
        <Link to="/tapasztalat">Tapasztalat</Link>
        <Link to="/tanulmanyok&erossegek">Tanulmányok és erősségek</Link>
    </div>
  )
}

export default Navbar