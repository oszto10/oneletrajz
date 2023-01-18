import React from 'react'
import Navbar from './Navbar';
import './Bemutatkozas.css'

function MunkaTapasztalat() {
  return (
    <div className='root'>
        <Navbar></Navbar>
        <div>
        <div className='kepkapcsolat'>
            <img src="images/profil.jpg" alt="profilkep"/>
            <h3><b>Telefon:</b></h3>
            <h3>+3620/931-81-36</h3>
            <br />
            <h3><b>Email:</b></h3>
            <h3>mark.csaszarnagy@gmail.com</h3>

        </div>
        <div className='bemutatkozas'>
        <div className="bemutatkozas-szoveg">
          <h1>Tapasztalat</h1>
         
          <p><b>DIGI Sport - Online főszerkesztő</b> (digisport.hu, filmnow.hu, a digiworld.hu, a digilife.hu, digianimalword.hu) - <i>2009.07 – 2022.09</i></p>
            <p><b>Főbb feladatok:</b> <br />
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
    </div>
  )
}

export default MunkaTapasztalat