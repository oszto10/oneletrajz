import React from 'react'
import './Introduction.css'


function Introduction({english, handleClick}) {

  return (
    <div className='introduction'>  
      <div className="introduction-text">
        <div className="introduction-description">
          {english && <><h1>Introduction </h1>     
          <p>“In my younger years, competitive sports were one of the most important things in my life. Consequently, during my university studies, I found the professional challenges I wanted to build my career around in sports journalism.</p>
          <p>As the years went by, my interest shifted from simply editing websites as an online journalist to understanding how they were built. Furthermore, thanks to my Editor-in-Chief position, I also took on Product Owner responsibilities, acting as the main liaison between channel management and the development team.</p>
          <p>This experience sparked such an enthusiasm for development that I repeatedly attempted to learn coding on my own, but due to my managerial role, it remained a hobby. In the summer of 2022, however, DIGI Sport—where I had worked for thirteen years—ceased operations. I decided this was the time for a career change. I enrolled in the Frontend Developer course at Codecool to start building the career I had secretly desired for a long time.</p>
          <p>In February 2023, I was given the opportunity to join Shiwaforce as a Web Developer, and ever since, the deeper I dive into the world of development, the more I want to know about it.”</p></>}
          {!english && <><h1>Bemutatkozás</h1>
          <p>“Fiatalabb koromban az élsport volt az egyik legfontosabb dolog az életemben, így a főiskolai tanulmányaim alatt a sportújságírásban találtam meg azokat a szakmai kihívásokat, amelyek mentén szerettem volna felépíteni a karrieremet.</p>
          <p>Ahogy teltek az évek, online újságíróként egyre jobban érdekelt a honlapok szerkesztése mellett az, hogy miként készülnek. Ráadásul főszerkesztői pozíciómnak köszönhetően product owneri feladatokat is elláttam, hiszen én voltam a kapocs a csatorna vezetősége és a developer csapat között.</p>
          <p>Ez annyira meghozta a kedvemet a fejlesztéshez, hogy többször nekiálltam önszorgalomból tanulni, de a csoportvezetői pozícióm mellett ez csupán hobbi maradt. 2022 nyarán azonban megszűnt a DIGI Sport, ahol tizenhárom évig dolgoztam, így eldöntöttem, váltani szeretnék. Beiratkoztam a Codecool intenzív frontend fejlesztői képzésére, hogy elkezdhessem felépíteni azt a karriert, amire titkon már jó ideje vágytam.</p>
          <p>2023 februárjában megkaptam a lehetőséget a Shiwaforce-nál, mint webfejlesztő, azóta pedig minél jobban mélyedek bele a fejlesztés világába, annál többet szeretnék tudni róla.”</p></>}       
        </div>
      </div> 
    </div>
  )
}

export default Introduction