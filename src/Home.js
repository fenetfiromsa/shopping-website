import React from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css';
import thegirl from './wome3n88.png';
function Thehome() {
  const navigate =useNavigate();

  const gotoshop=() => {
    navigate('/shop');
  };
  return (
     <div className='thephoto'>
     <div className='theparas'>
      <h2>Don't just dream it, Wear it!</h2>
      <p>NAHI provides a uniform designed for adventure, creativity, and self-expression, offering a collection of styliish dresses to empower confident and strong girls. shop now and dress the hero within!</p>
      <button className='log' onClick={gotoshop} > Shop now </button>
      
      </div>
      
      <img src={thegirl} alt='girl'  />
      </div>
    
  )
}

export default Thehome
