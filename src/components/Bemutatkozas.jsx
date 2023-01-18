import React from 'react'
import './Bemutatkozas.css';
import Navbar from './Navbar';




function Bemutatkozas() {
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
        <h1>Bemutatkozás</h1>
        <br />
        <p>“Fiatalabb koromban az élsport volt az egyik legfontosabb dolog az életemben, így a főiskolai tanulmányaim alatt a sportújságírásban találtam meg azokat a szakmai kihívásokat, amelyek mentén szerettem volna felépíteni a karrieremet. 
        <br />
        <br />
        Ahogy teltek az évek, online újságíróként egyre jobban kezdett érdekelni a honlapok szerkesztése mellett az is, hogy miként készülnek ezek. Többször nekiálltam önszorgalomból tanulni, de a főszerkesztői pozícióm mellett ez csupán hobbi maradt.
        <br />
        <br />
        2022 nyarán azonban megszűnt a DIGI Sport, ahol tizenhárom évig dolgoztam, így eldöntöttem, váltani szeretnék, beiratkoztam a Codecool négy és fél hónapos intenzív frontend fejlesztői képzésére, hogy elkezdhessem felépíteni azt a karriert, amire titkon már jó ideje vágytam. Nagyon tetszik a fejlesztés világa, azt érzem, minél jobban mélyedek bele, annál többet szeretnék tudni.”
        </p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Bemutatkozas