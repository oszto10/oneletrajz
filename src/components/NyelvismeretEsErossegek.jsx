import React from 'react'
import Navbar from './Navbar';
import './Bemutatkozas.css'
import './Navbar.css'
import KepEsKapcsolat from './KepEsKapcsolat';


function NyelvismeretEsErossegek({english, handleClick}) {
  return (
    <div className='root'>
       <Navbar handleClick={handleClick} english={english}></Navbar>
        <div className='container'>
        <KepEsKapcsolat/>
        <div className='bemutatkozas'>
       

        <div className="bemutatkozas-szoveg">
        {english && <><h1>Education</h1>
        <p>
            <b>Codecool - Junior Frontend Developer</b> - <i>August 2022 – January 2023</i>
              <br />
              - HTML5, CSS3, SVG, JavaScript, React.js, Node.js / NPM, Express.js, HTTP, Git, GitHub <br />
              <br />
              <b>The National Office of Vocational Education and Training and Adult Learning</b> - <i>May 2022 – July 2022</i>
              <br />
              - Újratervezés Program - foundation course
              <br />
              <br />
              <b> Budapest School of Communication and Business  (Budapest Metropolitan University)</b> - <i>Septemer 2002 - June 2006</i>
              <br />
              - Communication major
              </p>
              <br />
          <h1>Language skills</h1>
          <p>Intermediate English language exam </p>
          <br />
        <h1>Strengths</h1>
        <p>Strong writen and verbal communication skills, Eager to learn, Self-training, Teamwork, Loyalty</p></>}
        {!english && <><h1>Tanulmányok</h1>
          <p>
            <b>Codecool - Junior Frontend Developer</b> - <i>2022.08. – 2023.01.</i>
              <br />
              - HTML5, CSS3, SVG, JavaScript, React.js, Node.js / NPM, Express.js, HTTP, Git, GitHub <br />
              <br />
              <b>Nemzeti Szakképzési és Felnőttképzési Intézet</b> - <i>2022.05. – 2022.07.</i>
              <br />
              - Újratervezés Program alapozó képzés
              <br />
              <br />
              <b> Budapesti Kommunikációs Főiskola</b> - <i>2002.09. - 2006.06.</i>
              <br />
              - Újságíró szak
              </p>
              <br />
          <h1>Nyelvtudás</h1>
          <p>Angol középfokú nyelvvizsga </p>
          <br />
        <h1>Erősségek</h1>
        <p>Adobe Photoshop, Csapatmunka, Tanulás, Önképzés, Lojalitás</p></>}
        </div>
        </div>
        </div>
    </div>
  )
}

export default NyelvismeretEsErossegek