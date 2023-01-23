import React from 'react'
import './Bemutatkozas.css';

function KepEsKapcsolat() {
  return (
    
    <div className='kepkapcsolat'>
    <img src="images/profil4.jpg" alt="profilkep"/>
    <h2>Császár-Nagy Márk</h2>
    <h4>FRONTEND DEVELOPER</h4>
    <div className="contact">
    <h3 className='contact-detail'><b>Phone number:</b></h3>
    <h3 className='line'>+3620/931-81-36</h3>
  
    <h3 className='contact-detail'><b>Email:</b></h3>
    <h3 className='line'>mark.csaszarnagy@gmail.com</h3>

    <h3 className='contact-detail'><b>LinkedIn:</b></h3>
    <h3><a href="https://www.linkedin.com/in/m%C3%A1rk-cs%C3%A1sz%C3%A1r-nagy/">linkedin.com/in/márk.császár-nagy/</a></h3> 

    
    <h3 className='contact-detail'><b>GitHub:</b></h3>
    <h3><a href="https://github.com/oszto10">https://github.com/oszto10</a></h3>

    
    </div>
   
</div>
  )
}

export default KepEsKapcsolat