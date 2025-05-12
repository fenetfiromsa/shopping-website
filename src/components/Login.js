import React, { useState } from 'react'
import './login.css'
function Login() {
const [action, setaction]= useState("Sign Up")

  return (
    <div className='container'>
    <div className='header'>
      <div className='text'>{action}</div>
    </div>
    <div className='inputs'>
      {action==="Login"? <div></div> :<div className='input'>
      <input type='text' placeholder='name' />
    </div>}
    
    <div className='input'>
      <input type='email' placeholder='email' />
    </div>
    <div className='input'>
      <input type='password' placeholder='password' />
    </div>
    </div>
    {action==="Sign Up" ?<div></div>:<div className='forgotpassword'>lost password? <span> click here</span></div>}
    
    <div className='submitcontainer'>
      <div className={action==="Login"? "submit gray":"submit"} onClick={() =>{setaction("Sign Up")}}>Sign Up</div>
      <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</div>
    </div>
    </div>
  )
}

export default Login
