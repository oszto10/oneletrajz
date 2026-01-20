import React, { useState, useRef } from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import DropdownItem from './DropdownItem';
import './Navbar.css';

function Navbar({english, handleClick}) {

  const [openMenu, setOpenMenu] = useState(false)

  let closeMenuRef = useRef()

window.addEventListener("click", (e) => {
  if(closeMenuRef.current !== e.target) {
    setOpenMenu(false)
    
  }
})

  return (
    <div className='navbar'  >
      {english && <><Link to="/">Introduction</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education, skills</Link>
  
        <h3 ref={closeMenuRef} onClick={() => setOpenMenu((prev) => !prev)}>Projects</h3>
        {openMenu && <DropdownItem english={english} handleClick={handleClick}/>}
         
        </>}
        {!english && <> <Link to="/">Bemutatkozás</Link>
        <Link to="/experience">Tapasztalat</Link>
        <Link to="/education">Tanulmányok, készségek</Link>
     
        <h3 ref={closeMenuRef} onClick={() => setOpenMenu((prev) => !prev)}>Projektek</h3>
        {openMenu && <DropdownItem english={english} handleClick={handleClick}/>}
        </>}
        
        <Button className='englishButton' variant='contained' onClick={()=> handleClick(!english)}>{english ? "HUN" : "ENG"}</Button>
    </div>
  )
}

export default Navbar