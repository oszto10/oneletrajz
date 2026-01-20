import React from 'react'

function Education({english, handleClick}) {
  return (
     <div className='bemutatkozas'>
        <div className="bemutatkozas-szoveg">
          {english && <><h1>Education, skills</h1>
          <p><b>Codecool - Junior Frontend Developer</b> - <i>August 2022 – January 2023</i></p>
          <ul>
            <li>HTML5, CSS3, SVG, JavaScript, React.js, Material UI, Node.js / NPM, Express.js, HTTP, Git, GitHub</li>
          </ul>
          <p><b>The National Office of Vocational Education and Training and Adult Learning</b> - <i>May 2022 – July 2022</i></p>
          <ul>
            <li>Újratervezés Program - foundation course</li>
          </ul>
          <p><b> Budapest School of Communication and Business  (Budapest Metropolitan University)</b> - <i>Septemer 2002 - June 2006</i></p>
          <ul>
            <li>Communication major</li>
          </ul>
          <h1>Hard skills</h1>
          <ul>
            <li>High-level knowledge of HTML, CSS, SCSS, managing XML-based CMS, defining elements, writing transformation files (.xslt) based on site build and JavaScript.</li>
            <li>Knowledge and application of Vue.js fundamentals.</li>
            <li>Currently developing using the Agile methodology in two-week sprints. Working with Atlassian products (Jira, Bitbucket, Bamboo, Confluence).</li>
            <li>Intermediate English language exam.</li>
            <li>Adobe Photoshop</li>
          </ul>
          <h1>Soft skills</h1>
          <ul>
            <li>Teamwork</li>
            <li>Learning</li>
            <li>Self-improvement</li>
            <li>Loyalty</li>
            <li>Helpfulness</li>
          </ul></>}
          {!english && <><h1>Tanulmányok, készségek</h1>
            <p><b>Codecool - Junior Frontend Developer</b> - <i>2022.08. - 2023.01.</i></p>
            <ul>
              <li>HTML5, CSS3, SVG, JavaScript, React.js, Material UI, Node.js / NPM, Express.js, HTTP, Git, GitHub</li>
            </ul>
            <p><b>Nemzeti Szakképzési és Felnőttképzési Intézet</b> - <i>2022.05. - 2022.07.</i></p>
            <ul>
              <li>Újratervezés Program alapozó képzés</li>
            </ul>
            <p><b> Budapesti Kommunikációs Főiskola</b> - <i>2002.09. - 2006.06.</i></p>
            <ul>
              <li>Újságíró szak</li>
            </ul>
            <h1>Hard skillek</h1>
            <ul>
              <li>HTML, CSS, SCSS magas szintű ismerete, XML alapú CMS kezelése, elemek megadása, transzformációs fájl (.xslt) írása a sitebuild és a JavaScript alapján.</li>
              <li>Vue.js alapjainak ismerete és alkalmazása.</li>
              <li>Jelenleg agilis módszertan szerint fejlesztek, két hetes sprintekben. Emellett Atlassian termékekkel dolgozom (Jira, Bitbucket, Bamboo, Confluence).</li>
              <li>Angol középfokú nyelvvizsga</li>
              <li>Adobe Photoshop</li>
            </ul>
            <h1>Soft skillek</h1>
            <ul>
              <li>Csapatmunka</li>
              <li>Tanulás</li>
              <li>Önképzés</li>
              <li>Lojalitás</li>
              <li>Segítőkészség</li>
            </ul></>}
        </div>
      </div>
  )
}

export default Education