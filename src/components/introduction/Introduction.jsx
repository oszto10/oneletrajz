import React from 'react'
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import './Introduction.css'


function Introduction({english, handleClick}) {

  return (
    
    <div className='root'>
        <Navbar handleClick={handleClick} english={english}></Navbar>
        <div className='container'>
        <Contact handleClick={handleClick} english={english}/>
        <div className='bemutatkozas'>
        
        <div className="bemutatkozas-szoveg">
        
        {english && <><h1>Introduction</h1>
        <br />
        <p>“When I was a teenager, professional sport was the most important thing in my life. Because of this, I made the decision to have a career in sports journalism later on. 
        <br />
        <br />
        After a few years, my interest in programming became stronger. So, I started to study on my own, however, at this time my position was editor-in-chief, therefore programming remained only hobby that I could pursue in my spare time. 
        <br />
        <br />
        In the summer of 2022, the DIGI Sport channel where I worked for thirteen years, was closed by the new owners, so I decided to enroll in Codecool’s Junior Frontend Developer course. I was finally able
        to start building the carrier for which I have been longing for a long time. At February of 2023 I've started to work at Shiwaforce as a webdeveloper. I really like the world of programming; the more I learn about it, the more I want to know.”
        </p></>}
        {!english && <><h1>Bemutatkozás</h1>
        <br />
        <p>“rvtrt5v Fiatalabb koromban az élsport volt az egyik legfontosabb dolog az életemben, így a főiskolai tanulmányaim alatt a sportújságírásban találtam meg azokat a szakmai kihívásokat, amelyek mentén szerettem volna felépíteni a karrieremet. 
        <br />
        <br />
        Ahogy teltek az évek, online újságíróként egyre jobban kezdett érdekelni a honlapok szerkesztése mellett az is, hogy miként készülnek ezek. Többször nekiálltam önszorgalomból tanulni, de a főszerkesztői pozícióm mellett ez csupán hobbi maradt.
        <br />
        <br />
        2022 nyarán azonban megszűnt a DIGI Sport, ahol tizenhárom évig dolgoztam, így eldöntöttem, váltani szeretnék. Beiratkoztam a Codecool négy és fél hónapos intenzív frontend fejlesztői képzésére, hogy elkezdhessem felépíteni azt a karriert, amire titkon már jó ideje vágytam. A tanfolyam után a Shiwaforce-nál sikerült elhelyezkednem webfejlesztőként. Nagyon tetszik a fejlesztés világa, azt érzem, minél jobban mélyedek bele, annál többet szeretnék tudni.”
        </p></>}
                
        </div> 
        </div>
        </div>
    </div>
  )
}

export default Introduction