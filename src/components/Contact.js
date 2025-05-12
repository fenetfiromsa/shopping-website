import React, { useState } from 'react'
import './contact.css'
import address from'../address (1).png'
import phone from '../phone.png'
import emails from '../email.svg'
function Contact() {

  const [name, setname]= useState('');
  const [email, setemail]= useState('');
  const [comment, setcomment]= useState('');
  
 const getname= (event) =>{
    setname(event.target.value);
 }

 const getemail= (event) =>{
  setemail(event.target.value);
}
 const getcomment= (event) =>{
  setcomment(event.target.value);
}

 const getthevalues=(event)=>{
  alert(`${name} ${email} ${comment} `);
 }
  
  return (
    <div className='thewhole'>
      <h1>Contact Us</h1>
      <div className='thetwo'>
        <div className='thecontact'>
          <div className='theimgp'>
           <img src={address} alt='adre' />
           <p>ethiopia, oromia, sebeta</p>
           </div>
           <div className='theimgp'>
           <img src={phone} alt='adre' />
            <p> +251 946 417 553 </p>
            </div>
            <div className='theimgp'>
            <img src={emails} alt='adre' />
            <p>fenetfiromsa2012@gmail.com</p>
            </div>
        </div>


      <div className='theform'>
      <form onSubmit={getthevalues}>
        <div className='thehalf'>
          <label>Enter your name:  </label>
          <input type='text' value={name} onChange={getname} placeholder='Name'/>
        </div>
        <div className='thehalf'>
          <label>Enter your Email:  </label>
          <input type='email' value={email} onChange={getemail} placeholder='Email'/>
        </div>
        <div className='thehalf'>
          <label>Enter your message:  </label>
          <textarea placeholder='Type your message' value={comment} onChange={getcomment} ></textarea>
          </div>
          <div className='thebutton thehalf'>
          <button type='submit'>Summit</button>
          </div> 
      </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
