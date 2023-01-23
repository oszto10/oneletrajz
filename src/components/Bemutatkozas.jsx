import React from 'react'
import './Bemutatkozas.css';
import KepEsKapcsolat from './KepEsKapcsolat';
import Navbar from './Navbar';

import { Button } from '@mui/material';





function Bemutatkozas({english, handleClick}) {

  return (
    
    <div className='root'>
        <Navbar></Navbar>
        <div className='container'>
        <KepEsKapcsolat/>
        <div className='bemutatkozas'>
        <Button className='englishButton' variant='contained' onClick={()=> handleClick(!english)}>{english ? "Hungarian" : "English"}</Button>
        <div className="bemutatkozas-szoveg">
        
        {english && <><h1>Introduction</h1>
        <br />
        <p>“When I was a teenager, the sport was the most important thing in my life. Bacause of this, later I have found my place in the real life like a sport journalist, who wrote articles on the internet.  
        <br />
        <br />
        After a few years my interest in programming became stronger and stronger. So I started to learn that by myself, but at this time my position was editor in chief, so the programming was only a hobby at these years. 
        <br />
        <br />
        At the summer of 2022 the DIGI Sport channel, where I worked for thirteen years, was closed by the new owners, so I have decided to pass Codecools’s Junior Frontend Developer bootcamp. I have started to build that carrier, wich I wanted inside for a long time. I really like the world of programming, the more I learn about it, the more I want to know about it.”
        </p></>}
        {!english && <><h1>Bemutatkozás</h1>
        <br />
        <p>“Fiatalabb koromban az élsport volt az egyik legfontosabb dolog az életemben, így a főiskolai tanulmányaim alatt a sportújságírásban találtam meg azokat a szakmai kihívásokat, amelyek mentén szerettem volna felépíteni a karrieremet. 
        <br />
        <br />
        Ahogy teltek az évek, online újságíróként egyre jobban kezdett érdekelni a honlapok szerkesztése mellett az is, hogy miként készülnek ezek. Többször nekiálltam önszorgalomból tanulni, de a főszerkesztői pozícióm mellett ez csupán hobbi maradt.
        <br />
        <br />
        2022 nyarán azonban megszűnt a DIGI Sport, ahol tizenhárom évig dolgoztam, így eldöntöttem, váltani szeretnék, beiratkoztam a Codecool négy és fél hónapos intenzív frontend fejlesztői képzésére, hogy elkezdhessem felépíteni azt a karriert, amire titkon már jó ideje vágytam. Nagyon tetszik a fejlesztés világa, azt érzem, minél jobban mélyedek bele, annál többet szeretnék tudni.”
        </p></>}
                
        </div>
        </div>
        </div>
    </div>
  )
}

export default Bemutatkozas