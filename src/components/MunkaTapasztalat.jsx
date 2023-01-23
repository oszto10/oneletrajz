import React from 'react'
import Navbar from './Navbar';
import './Bemutatkozas.css'
import './Navbar.css'
import KepEsKapcsolat from './KepEsKapcsolat';
import { Button } from '@mui/material';

function MunkaTapasztalat({english, handleClick}) {
  return (
    <div className='root'>
        <Navbar></Navbar>
        <div className='container'>
        <KepEsKapcsolat/>
        
        <div className='bemutatkozas'>
        <Button className='englishButton' variant='contained' onClick={()=> handleClick(!english)}>{english ? "Hungarian" : "English"}</Button>
        <div className="bemutatkozas-szoveg">
        {english && <><h1>Experience</h1>
        <p><b>DIGI Sport - Editor in Chief</b> (digisport.hu, filmnow.hu, a digiworld.hu, a digilife.hu, digianimalword.hu) - <i>July 2009 – September 2022</i></p>
           <p><b><i>Main tasks:</i></b> <br />
             - leading a group of eight <br />
             - planning and controlling the developments of the sites <br />
             - editing pictures, cutting videos <br />
             - controlling the work on DIGI Sports’s social media sites (Facebook, Instagram és TikTok) <br />
             - organization the work schedule and the workflow of my team<br />
             - training the new Collagues <br />
             </p>
             <br />
         <p><b>Generál Média Kft., SportHirado.hu</b> - <i> March 2008 - March 2009</i></p>
        <p>- sports journalist</p>
             <br />
         <p><b>Ringier Kiadó Kft, Nemzeti Sport</b> - <i>February 2003 - March 2008</i></p>
         <p>- sports journalist
         </p>
        </>}
          {!english && <><h1>Tapasztalat</h1>
         
         <p><b>DIGI Sport - Online főszerkesztő</b> (digisport.hu, filmnow.hu, a digiworld.hu, a digilife.hu, digianimalword.hu) - <i>2009.07 – 2022.09</i></p>
           <p><b><i>Főbb feladatok:</i></b> <br />
             - 8 fős csoport vezetése <br />
             - a weblapokon történt fejlesztések tervezése, irányítása <br />
             - képek szerkesztése, egyszerűbb videók vágása <br />
             - social média kezelése (Facebook, Instagram és TikTok) <br />
             - újságírói beosztás szervezése, heti munkaterv elkészítése <br />
             - új kollégák betanítása <br />
             </p>
             <br />
         <p><b>Generál Média Kft., SportHirado.hu szerkesztősége</b> - <i> 2008.03-2009.03.</i></p>
        <p>- szerkesztő, sportújságíró</p>
             <br />
         <p><b>Ringier Kiadó Kft, Nemzeti Sport szerkesztőség</b> - <i>2003.01.-2008.03.</i></p>
         <p>- szerkesztő, sportújságíró
         </p></>}

          </div>
          </div>
        </div>
        
    </div>
  )
}

export default MunkaTapasztalat