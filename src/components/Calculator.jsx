import React from 'react'
import KepEsKapcsolat from './KepEsKapcsolat';
import Navbar from './Navbar';

function Calculator(english, handleClick) {
  return (

    <div className='root'>
        <Navbar handleClick={handleClick} english={english}></Navbar>
        <div className='container'>
            <KepEsKapcsolat handleClick={handleClick} english={english}/>
            <div className='bemutatkozas'>
                <div className='calculator'>
                    <div className="screen">
                        <div className="screen-top"></div>
                        <div className="screen-bottom"></div>
                </div>
                <div className="calc-buttons">
                    <button className='calc-button' >AC</button>
                    <button className='calc-button' >C</button>
                    <button className='calc-button'>Del</button>
                    <button className='calc-button'>/</button>
                        <button className='calc-button' >1</button>
                        <button className='calc-button'>2</button>
                        <button className='calc-button'>3</button>
                        <button className='calc-button' >*</button>
                        <button className='calc-button'>4</button>
                        <button className='calc-button'>5</button>
                        <button className='calc-button'>6</button>
                        <button className='calc-button' >-</button>
                        <button className='calc-button'>7</button>
                        <button className='calc-button'>8</button>
                        <button className='calc-button'>9</button>
                        <button className='calc-button' >+</button>
                        <button className='calc-button'>.</button>
                        <button className='calc-button'>0</button>
                        <button className='equal-button'>=</button>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator