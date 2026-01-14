import React from 'react'
import './Contact.css'

function Contact({english, handleClick}) {
  return (
    
    <div className='kepkapcsolat'>
    
    {english && <><div className="name-pic">
    <img className='profile-img' src="images/profil4.jpg" alt="profilkep"/>
    <h2>Császár-Nagy Márk</h2>
    <h4>WEB DEVELOPER</h4>
    </div>
    <div className="contact">
    
    <h3 className='contact-detail'><b>Phone number:</b></h3> 
    <h3 className='line'><a href="tel:06209318136">+36-20-931-8136</a></h3> 
  
    <h3 className='contact-detail'><b>Email:</b></h3>
    <h3 className='line'><a href="mailto:mark.csaszarnagy@gmail.com">mark.csaszarnagy@gmail.com</a></h3>

    <h3 className='contact-detail'><b>LinkedIn:</b></h3>
    <h3 className='line'><a href="https://www.linkedin.com/in/mark-csaszar-nagy/">linkedin.com/in/mark.csaszar-nagy/</a></h3> 

    
    <h3 className='contact-detail'><b>GitHub:</b></h3>
    <h3 ><a href="https://github.com/oszto10">https://github.com/oszto10</a></h3>
    
    
    </div></>}

    {!english && <><div className="name-pic">
    <img className='profile-img' src="images/profil4.jpg" alt="profilkep"/>
    <h2>Császár-Nagy Márk</h2>
    <h4>WEBFEJLESZTŐ</h4>
    </div>
    <div className="contact">
    
    <h3 className='contact-detail'><b>Telefonszám:</b></h3> 
    <h3 className='line'>+36/20-931-8136</h3> 
  
    <h3 className='contact-detail'><b>Email:</b></h3>
    <h3 className='line'>mark.csaszarnagy@gmail.com</h3>

    <h3 className='contact-detail'><b>LinkedIn:</b></h3>
    <h3 className='line'><a href="https://www.linkedin.com/in/mark-csaszar-nagy/">linkedin.com/in/mark.csaszar-nagy/</a></h3> 

    
    <h3 className='contact-detail'><b>GitHub:</b></h3>
    <h3 ><a href="https://github.com/oszto10">https://github.com/oszto10</a></h3>
    
    
    </div></>}
   
</div>
  )
}

export default Contact