import React from 'react'

function Experience({english, handleClick}) {
  return (    
    <div className='bemutatkozas'>
      <div className="bemutatkozas-szoveg">
        {english && <><h1>Experience</h1>
        <p className='main-text'><b>Shiwaforce - Webdeveloper</b> - <i>February 2023 - January 2026</i></p>
        <p><b>Performing subtasks for the creation of modules:</b></p>
        <ul>
          <li>Pixel-perfect site builds based on provided Figma or Zeplin designs. Suggesting solutions in certain cases to achieve a better end result. Debugging and fixing site build issues caused by later integrated code snippets.</li>
          <li>Writing an element set file for the Shiwa CMS. Configuring all functions to define which parts of the page the content editor can modify and how. Providing the most dynamic editing possibilities. Designing the CMS view according to the WYSIWYG approach. Creating sample content to ensure the content editor can insert a module as quickly and smoothly as possible.</li>
          <li>Writing XSLT transformation files (.xslt). Generating HTML using XSLT based on the created element set and site build. Handling smaller JavaScript tasks and adapting functionality written in Vue files to XSLT.</li>
          <li>Performing smaller tasks in the Vue file, such as writing and passing props for Vue components, and writing simple functions. Structuring the template and style within the files.</li>
          <li>Release of packages to testing environments in Bamboo. Creation and configuration of build plans.</li>
          <li>Completion of an internal corporate manual testing training course. Testing of completed modules and functionalities across multiple environments.</li>
        </ul>
        <p className='main-text'><b>DIGI Sport - Online Editor-in-Chief, Product Owner</b> (digisport.hu, filmnow.hu, a digiworld.hu, a digilife.hu, digianimalword.hu) - <i>July 2009 - September 2022</i></p>
           <ul>
            <li>Leading an 8-person editorial team, coordinating daily content and organizational tasks.</li>
            <li>Creative direction of the redesign of multiple websites.</li>
            <li>Creating design concepts in Photoshop.</li>
            <li>Daily liaison with the development team.</li>
            <li>Aligning the functionality, structure, and appearance of new websites with management expectations.</li>
            <li>Regularly reporting the status of web developments to management.</li>
            <li>Developing and specifying website and service development ideas.</li>
            <li>Managing social media platforms and editing videos (Facebook, TikTok).</li>
            <li>Training new colleagues and creating weekly work plans.</li>
           </ul>
         <p className='main-text'><b>Generál Média Kft., SportHirado.hu</b> - <i> March 2008 - March 2009</i></p>
         <ul>
          <li>Online Editor, Sports Journalist</li>
         </ul>
         <p className='main-text'><b>Ringier Kiadó Kft, Nemzeti Sport</b> - <i>February 2003 - March 2008</i></p>
         <ul>
          <li>Online Editor, Sports Journalist</li>
         </ul>
        </>}
          {!english && <><h1>Tapasztalat</h1>
         
        <p className='main-text'><b>Shiwaforce - Webfejlesztő</b> - <i>2023.02 - 2026.01</i></p>
        <p><b>Modulok készítéséhez részfeladatok elvégzése:</b></p>
        <ul>
          <li>Sitebuildek pixelpontos elkészítése a megadott Figma-, vagy Zeplin-dizájnok alapján. Egyes esetekben megoldások javaslata a jobb végeredmény elérése érdekében. Hibajavítások a sitebuildben, amennyiben később bekerült kódrészletek szétcsúsztatták azt.</li>
          <li>Elemkészletet tartalmazó fájl írása a Shiwa CMS-hez. Minden funkció beállítása, hogy a tartalomtöltő az oldal melyik részét szerkesztheti, és azokat miként. A lehető legdinamikusabb szerkesztési lehetőségek megadása. A CMS dizájnjának elkészítése WYSIWYG szemlélet szerint. Mintatartalmak készítse, hogy a tartalomszerkesztő minél gyorsabban és gördülékenyebben be tudjon szerkeszteni egy modult.</li>
          <li>Transzformációs fájl megírása (.xslt). Az elkészített elemkészlet és sitebuild alapján a HTML kigenerálása XSLT segítségével. Kisebb JS-feladatok elvégzése, a vue-fájlban megírt működés átvezetése az XSLT-be. </li>
          <li>A vue-fájlban kisebb feladatok elvégzése, vue-komponensek esetén propok írása, átadása, egy-egy egyszerűbb function megírása. A template és a style felépítése a fájlokon belül.</li>
          <li>Csomagok kiadása Bamboo-ban a tesztelői környezetekre. Build planek elkészítése.</li>
          <li> Manuális tesztelői céges tanfolyam elvégzése. Elkészült modulok és funkciók tesztelése különböző környezeteken.</li>
         </ul>
         <p className='main-text'><b>DIGI Sport - Online főszerkesztő, product owner</b> (digisport.hu, filmnow.hu, a digiworld.hu, a digilife.hu, digianimalword.hu) - <i>2009.07 – 2022.09</i></p>
         <ul>
          <li>8 fős szerkesztőségi csapat vezetése, napi tartalmi és szervezési feladatok koordinálása.</li>
          <li>Több weboldal újratervezésének kreatív irányítása.</li>
          <li>Designtervek készítése Photoshopban.</li>
          <li>Napi kapcsolattartás a fejlesztőcsapattal.</li>
          <li>Az új oldalak funkcióinak, struktúrájának és megjelenésének összehangolása a vezetőségi elvárásokkal.</li>
          <li>A webes fejlesztések státuszának rendszeres riportolása a menedzsment felé.</li>
          <li>Weboldal- és szolgáltatásfejlesztési ötletek kidolgozása, specifikálása.</li>
          <li>Social media platformok kezelése, videók vágása.</li>
          <li>Új kollégák betanítása, heti munkaterv készítése.</li>
         </ul>
         <p className='main-text'><b>Generál Média Kft., SportHirado.hu szerkesztősége</b> - <i> 2008.03-2009.03.</i></p>
         <ul>
          <li>szerkesztő, sportújságíró</li>
         </ul>
         <p className='main-text'><b>Ringier Kiadó Kft, Nemzeti Sport szerkesztőség</b> - <i>2003.01.-2008.03.</i></p>
         <ul>
          <li>szerkesztő, sportújságíró</li>
         </ul></>}
      </div>
    </div>
  )
}

export default Experience