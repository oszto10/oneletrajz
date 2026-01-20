import React, { useState } from 'react'
import Contact from '../contact/Contact';
import './Calculator.css'

function Calculator({english, handleClick}) {

const [buttonValue, setButtonValue] = useState ("")


const handleClick2 = (e) => {
    if (buttonValue === "+") {return "0"}
    setButtonValue(buttonValue.concat(e.target?.name))
}



const clearButton = () => {
    setButtonValue("")
}

const delButton = () => {
    setButtonValue(buttonValue?.slice(0, -1))
}

const calcNumber = () => { 
    try {
    setButtonValue(eval(buttonValue).toString())
}catch (error) {
    setButtonValue("error")
}
}



  return (
            <div className='calculator-body'>
                <div className='calculator'>
                    <input  type="text" maxLength={5} className="screen" value={buttonValue || "0" } onChange={handleClick2}/>
                <div className="calc-buttons">
                    <button onClick={clearButton} className='ac-button' >AC</button>
                    <button onClick={delButton} className='calc-button2'>Del</button>
                    <button name="/" onClick={handleClick2} className='calc-button2'>/</button>
                        <button name="1" onClick={handleClick2} className='calc-button' >1</button>
                        <button name="2" onClick={handleClick2} className='calc-button'>2</button>
                        <button name="3" onClick={handleClick2} className='calc-button'>3</button>
                        <button name="*" onClick={handleClick2} className='calc-button2'>*</button>
                        <button name="4" onClick={handleClick2} className='calc-button'>4</button>
                        <button name="5" onClick={handleClick2} className='calc-button'>5</button>
                        <button name="6" onClick={handleClick2} className='calc-button'>6</button>
                        <button name="-" onClick={handleClick2} className='calc-button2'>-</button>
                        <button name="7" onClick={handleClick2} className='calc-button'>7</button>
                        <button name="8" onClick={handleClick2} className='calc-button'>8</button>
                        <button name="9" onClick={handleClick2} className='calc-button'>9</button>
                        <button name="+" onClick={handleClick2} className='calc-button2'>+</button>
                        <button name="0" onClick={handleClick2} className='zero-button'>0</button>
                        <button name="." onClick={handleClick2} className='calc-button'>.</button>
                        <button name="=" onClick={calcNumber} className='calc-button2'>=</button>
                    </div>
                </div>
            </div>

  )
}

export default Calculator