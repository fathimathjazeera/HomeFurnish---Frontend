import React from 'react';
import CartHeader from '../components/CartHeader';
import '../styles/cart.css'
import yellowsofa from '../assets/yellow-sofa.png'
import CartCard from '../components/CartCard';
import SimilarProducts from '../components/SimilarProducts';
import Navbar from '../components/Navbar';

const Cart = () => {
  return (
    <>
    <Navbar />
      <CartHeader />
      <div className="cart-items-container">
        <div className="cart-items">
          <p>PRODUCT</p>
          <p>QUANTITY</p>
          <p>PRICE</p>
          <p>SUB TOTAL</p>
        </div>
        <div className="cart-items">
          <img src={yellowsofa} alt="" className='cart-image'/>
          <button>1</button>
          <p className='cart-product-price'>$129.00</p>
          <p className='subtotal-price'>$348.00</p>
        </div>
        <div className="cart-items">
          <img src={yellowsofa} alt="" className='cart-image'/>
          <button>1</button>
          <p className='cart-product-price'>$129.00</p>
          <p className='subtotal-price'>$348.00</p>
        </div>
        <div className="cart-items">
          <img src={yellowsofa} alt="" className='cart-image'/>
          <button>1</button>
          <p className='cart-product-price'>$129.00</p>
          <p className='subtotal-price'>$348.00</p>
        </div>
        <div className="cart-items">
          <img src={yellowsofa} alt="" className='cart-image'/>
          <button>1</button>
          <p className='cart-product-price'>$129.00</p>
          <p className='subtotal-price'>$348.00</p>
        </div>
        <div className="cart-items">
          <img src={yellowsofa} alt="" className='cart-image'/>
          <button>1</button>
          <p className='cart-product-price'>$129.00</p>
          <p className='subtotal-price'>$348.00</p>
        </div>
      </div>
      <CartCard />
      <SimilarProducts />
    </>
  );
};





export default Cart;