import React from 'react'


function DropdownItem({english}) {
  return (
    <div className='dropdown-item' >
       
       {english && <><h2 className='dropdown-item-row'> <a href="/starwars"> Star Wars</a></h2>
       <h2 className='dropdown-item-row'> <a href="/calculator">Calculator</a></h2>
       <h2 className='dropdown-item-row'> <a href="/weatherapi">Weather Api</a></h2>
       {/* <h2 className='dropdown-item-row'> <a href="/valutachange">Change Valuta</a></h2> */}</>}
     {!english && <><h2 className='dropdown-item-row'> <a href="/starwars"> Star Wars</a></h2>
       <h2 className='dropdown-item-row'> <a href="/calculator">Számológép</a></h2>
       <h2 className='dropdown-item-row'> <a href="/weatherapi">Időjárás</a></h2></>}
    </div>
    
  )
}

export default DropdownItem