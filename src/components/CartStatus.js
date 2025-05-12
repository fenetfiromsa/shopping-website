// components/CartStatus.js
import './CartStatus.css';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import carticon from '../newcart.png';
import './CartStatus.css'; // Create this CSS file

const CartStatus = () => {
  const { cartItems, lastAddedItem } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-status" onClick={() => navigate('/cart')}>
      <img src={carticon} alt="Cart" className="cart-icon" />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      {lastAddedItem && (
        <img src={lastAddedItem.image} alt="Preview" className="last-item" />
      )}
    </div>
  );
};

export default CartStatus;
