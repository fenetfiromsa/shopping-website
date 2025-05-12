
import './App.css';
import CartStatus from './components/CartStatus';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';


import { CartProvider } from './context/CartContext'; 
import Cart from './components/Cart';
import Contact from './components/Contact';

import Login from './components/Login';
import Shop from './components/Shop';
import Thehome from './Home';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
function App() {
  

  return (
    <div className="App" >
      <CartProvider>
      <Router>
      <nav>
        <ul>
          <li><h1>NAHI</h1></li>
          <li><Link className='links' to='/'>Home</Link></li>
          <li><Link className='links' to='/shop'>Shop</Link></li>
          
          <li><Link className='links' to='/contact'>Contact</Link></li>
          <li><CartStatus /></li>
          <li><Link className='links' to='/login'>Login</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path='/' element={ <Thehome />} /> 
          <Route path='/shop' element={ <Shop />} /> 
         
          <Route path='/contact' element={ <Contact />} /> 
          <Route path='/cart' element={ <Cart />} /> 
          <Route path='/login' element={ <Login/>} /> 
        </Routes>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
