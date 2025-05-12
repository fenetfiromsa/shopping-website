import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './shop.css';

// import your product images
import clothe1 from '../assets/black.png';
import clothe2 from '../assets/dddddd.png';
import clothe3 from '../assets/dddgg.png';
import clothe4 from '../assets/dree5.png';
import clothe5 from '../assets/dreee.png';
import clothe6 from '../assets/drees4.png';
import clothe7 from '../assets/dreesss.png';
import clothe8 from '../assets/white.png';
import clothe9 from '../assets/wwf.png';
import clothe10 from '../assets/redd.png';
import clothe11 from '../assets/dress2.png';
import clothe12 from '../assets/ggggg.png';
import clothe13 from '../assets/wwww.png';
import clothe14 from '../assets/uuuu.png';
import clothe15 from '../assets/summ.png';
import clothe16 from '../assets/ghhh.png';


const productList = [
  { id: 1, image: clothe1, name: "Sophisticated Black Dress", price: 8000 },
  { id: 2, image: clothe2, name: "Stylish Everyday Dress", price: 20000 },
  { id: 3, image: clothe3, name: "Classic Blazer Dress", price: 6000 },
  { id: 4, image: clothe5, name: "Longline Coat Dress", price: 4000 },
  { id: 5, image: clothe4, name: "Elegant White Dress", price: 5000 },
  { id: 6, image: clothe16, name: "Casual Bodycon Dress", price: 12000 },
  { id: 7, image: clothe6, name: "Casual Long-Sleeved Dress", price: 4000 },
  { id: 8, image: clothe7, name: "Summer Print Dress", price: 6000 },
  { id: 9, image: clothe8, name: " Tailored Blazer Dress", price: 8000 },
  { id: 10, image: clothe9, name: "Elegant Two-Piece Suit", price: 8000 },
  { id: 11, image: clothe10, name: "Stylish Everyday Dress", price: 9000 },
  { id: 12, image: clothe11, name: "Stylish Everyday Dress", price: 7000 },
  { id: 13, image: clothe12, name: "Elegant White Dress", price: 9000 },
  { id: 14, image: clothe13, name: "Comfortable Chic Dress", price: 6000 },
  { id: 15, image: clothe14, name: "Button-Down Mini Dress", price: 2000 },
  { id: 16, image: clothe15, name: "Off-Shoulder Floral Dress", price: 4000 },
  
];

function Shop() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div className='head'>
      <h1 className='thehead'>Our Latest Products</h1>
      <div className='itemscontroller'>
        <div className='thefour'>
          {productList.map(product => (
            <div key={product.id} className='theitems'>
              <img src={product.image} alt={product.name} className='shopimg' />
              <h2 className='shophead'>{product.name}</h2>
              <p>{product.price} birr</p>
              <button className='shopbutton' onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => navigate('/cart')} className='log'> View Cart </button>
    </div>
  );
}

export default Shop;
