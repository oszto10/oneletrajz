import React from 'react'
import Navbar from './Navbar';
import './Bemutatkozas.css'
import './Navbar.css'
import KepEsKapcsolat from './KepEsKapcsolat';

function NyelvismeretEsErossegek() {
  return (
    <div className='root'>
        <Navbar></Navbar>
        <div className='container'>
        <KepEsKapcsolat/>
        <div className='bemutatkozas'>
        <div className="bemutatkozas-szoveg">
          <h1>Tanulmányok</h1>
          <p>
            <b>Codecool - Junior Frontend Developer</b> - <i>2022.08 – 2023.01</i>
              <br />
              - HTML5, CSS3, SVG, JavaScript / EcmaScript, React.js, Node.js / NPM, Express.js, HTTP, Git, GitHub <br />
              <br />
              <b>Nemzeti Szakképzési és Felnőttképzési Intézet</b> - <i>2022.05 – 2022.07.</i>
              <br />
              - Újratervezés Program alapozó képzés
              <br />
              <br />
              <b> Budapesti Kommunikációs Főiskola</b> - <i>2002 - 2006</i>
              <br />
              - Újságíró szak
              </p>
              <br />
          <h1>Nyelvtudás</h1>
          <p>Angol középfokú nyelvvizsga </p>
          <br />
        <h1>Erősségek</h1>
        <p>Adobe Photoshop, Csapatmunka, Tanulás, Önképzés, Lojalitás, Segítőkészség</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default NyelvismeretEsErossegek