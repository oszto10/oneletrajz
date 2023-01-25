import React from 'react'
import './Bemutatkozas.css';

function KepEsKapcsolat(english, handleClick) {
  return (
    
    <div className='kepkapcsolat'>
    <div className="name-pic">
    
    <img className='profile-img' src="images/profil4.jpg" alt="profilkep"/>
    <h2>Császár-Nagy Márk</h2>
    <h4>FRONTEND DEVELOPER</h4>
    </div>
    <div className="contact">
    {english && <>
    <h3 className='contact-detail'><b>Phone number:</b></h3> </>}
    {!english && <>
    <h3 className='contact-detail'><b>Telefonszám:</b></h3> </>}
    <h3 className='line'>+3620/931-81-36</h3>
  
    <h3 className='contact-detail'><b>Email:</b></h3>
    <h3 className='line'>mark.csaszarnagy@gmail.com</h3>

    <h3 className='contact-detail'><b>LinkedIn:</b></h3>
    <h3><a href="https://www.linkedin.com/in/mark-csaszar-nagy/">linkedin.com/in/mark.csaszar-nagy/</a></h3> 

    
    <h3 className='contact-detail'><b>GitHub:</b></h3>
    <h3><a href="https://github.com/oszto10">https://github.com/oszto10</a></h3>
    
    
    </div>
   
</div>
  )
}

export default KepEsKapcsolat