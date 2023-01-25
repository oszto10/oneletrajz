import React from 'react'
import Navbar from './Navbar';
import './Bemutatkozas.css'
import './Navbar.css'
import { Select, MenuItem } from '@mui/material';
import StarWars from "./components/StarWars";


function Projektek() {
  return (
    <div className='root'>
        <Navbar></Navbar>
        <div>
        <div className='kepkapcsolat'>
            <img src="images/profil.jpg" alt="profilkep"/>
            <h2><b>TELEFON:</b></h2>
            <h2>+3620/931-81-36</h2>
            <h2><b>EMAIL:</b></h2>
            <h2>mark.csaszarnagy@gmail.com</h2>

        </div>
        <div className='bemutatkozas'>
          <h1>PROJEKTEK</h1>
          <Select>
            <MenuItem>
            <StarWars/>
                        </MenuItem> 
          </Select>
          
        </div>
        </div>
    </div>
  )
}

export default Projektek