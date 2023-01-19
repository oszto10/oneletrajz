import React from 'react'
import Navbar from './Navbar';
import './Bemutatkozas.css'
import './Navbar.css'

function MunkaTapasztalat() {
  return (
    <div className='root'>
        <Navbar></Navbar>
        <div className='container'>
        <div className='kepkapcsolat'>
            <img src="images/profil.jpg" alt="profilkep"/>
            <div className="contact">
            <h3 className='contact-detail'><b>Telefon:</b></h3>
            <h3 className='line'>+3620/931-81-36</h3>
          
            <h3 className='contact-detail'><b>Email:</b></h3>
            <h3>mark.csaszarnagy@gmail.com</h3>
            </div>
        </div>
        
        <div className="bemutatkozas-szoveg">
          <h1>Tapasztalat</h1>
         
          <p><b>DIGI Sport - Online főszerkesztő</b> (digisport.hu, filmnow.hu, a digiworld.hu, a digilife.hu, digianimalword.hu) - <i>2009.07 – 2022.09</i></p>
            <p><b><i>Főbb feladatok:</i></b> <br />
              - 8 fős csoport vezetése <br />
              - a weblapokon történt fejlesztések tervezése, irányítása <br />
              - képek szerkesztése, egyszerűbb videók vágása <br />
              - social média kezelése (Facebook, Instagram és TokTok) <br />
              - újságírói beosztás szervezése, heti munkaterv elkészítése <br />
              - új kollégák betanítása <br />
              - csatornák műsorainak szerkesztése és küldése <br />
              </p>
              <br />
          <p><b>Generál Média Kft., SportHirado.hu szerkesztősége</b> - <i> 2008.03-2009.03.</i></p>
         <p>- szerkesztő, sportújságíró</p>
              <br />
          <p><b>Ringier Kiadó Kft, Nemzeti Sport szerkesztőség</b> - <i>2003.01.-2008.03.</i></p>
          <p>szerkesztő, sportújságíró
          </p>
          </div>
        </div>
        
    </div>
  )
}

export default MunkaTapasztalat