import React, { useState } from 'react'
import "./Form.css"
const Form = () => {
    const [nameInputVal,setNameInputVal]=useState("")
    const nameInputChangeHandler = (e)=>{
        let val = e.target.value
        setNameInputVal(val)
    }
   
    const formSubmitHandler = (e)=>{
        e.preventDefault()
        console.log("nameInputVal",nameInputVal)
        setNameInputVal("")
    }
  return (
   <>
    <form onSubmit={formSubmitHandler}>
        <div className='name'>
            <label htmlFor="name">Name:- </label>
            <input type="text" name="name" id="name" placeholder='Enter Your Name' onChange={nameInputChangeHandler} value={nameInputVal} />
        </div>
        <div className='email'>
            <label htmlFor="email">Email:- </label>
            <input type="email" name="email" id="email" placeholder='Enter Your Email' />
        </div>
        <div className='password'>
            <label htmlFor="password">Password:- </label>
            <input type="password" name="password" id="password" placeholder='Enter Your Password' />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
   </>
  )
}

export default Form