import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { Button } from '@mui/material';
import DropdownItem from './DropdownItem';

function Navbar({english, handleClick}) {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='navbar'>
      {english && <><Link to="/">Introduction</Link>
        <Link to="/tapasztalat">Experience</Link>
        <Link to="/tanulmanyok&erossegek">Education</Link>
      {/*   <Link to="/starwars">Star Wars</Link>
        <Link to="/weatherapi">Weather Api</Link>
        <Link to="/calculator">Calculator</Link> */}
        <h3 onClick={() => setOpenMenu((prev) => !prev)}>Projects</h3>
        {openMenu && <DropdownItem english={english} handleClick={handleClick}/>}
         
        </>}
        {!english && <> <Link to="/">Bemutatkozás</Link>
        <Link to="/tapasztalat">Tapasztalat</Link>
        <Link to="/tanulmanyok&erossegek">Tanulmányok</Link>
        {/* <Link to="/starwars">Star Wars</Link>
        <Link to="/weatherapi">Időjárás</Link>
        <Link to="/calculator">Számológép</Link> */}
        <h3 onClick={() => setOpenMenu((prev) => !prev)}>Projektek</h3>
        {openMenu && <DropdownItem english={english} handleClick={handleClick}/>}
        </>}
        
        <Button className='englishButton' variant='contained' onClick={()=> handleClick(!english)}>{english ? "HUN" : "ENG"}</Button>
    </div>
  )
}

export default Navbar