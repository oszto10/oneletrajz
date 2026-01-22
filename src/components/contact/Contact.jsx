import React from 'react'
import './Contact.css'

function Contact({english, handleClick}) {
  return (

    <div className='contact-card'> 
      <div className="name-pic">
        <img className='profile-img' src="images/profil4.jpg" alt="profilkep"/>
        {english && <><h2>Mark Csaszar-Nagy</h2>
        <h4>Web Developer, Product Owner</h4></>}
        {!english && <><h2>Császár-Nagy Márk</h2>
        <h4>Webfejlesztő, Product Owner</h4></>}
      </div>
      <div className="contact">
        <div className='line'>
          <img src="../../../images/phone.png" alt="" className="contact-img" />
          <a href="tel:+36209318136">+36-20-931-8136</a>
        </div> 
        <div className='line'>
          <img src="../../../images/email.png" alt="" className="contact-img" />
          <a href="mailto:mark.csaszarnagy@gmail.com">mark.csaszarnagy@gmail.com</a>
        </div>
        <div className='line'>
          <img src="../../../images/linkedin.png" alt="" className="contact-img" />
          <a href="https://www.linkedin.com/in/mark-csaszar-nagy/">linkedin.com/in/mark.csaszar-nagy/</a>
        </div> 
        <div className='line'>
          <img src="../../../images/github.png" alt="" className="contact-img" />
          <a href="https://github.com/oszto10">https://github.com/oszto10</a>
        </div>
      </div>
    </div>
  )
}

export default Contact