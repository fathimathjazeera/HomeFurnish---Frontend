import React from 'react';
import '../styles/cartcard.css';
const CartCard = () => {
  return (
    <div className="cart-card-container">
      <p className="cart-card-title">CART VALUE</p>
      <hr />
      <div className="price-card-container">
        <p className="cart-card-title">Sub total</p>
        <p>+$15.00</p>
      </div>
      <div className="price-card-container">
        <p className="cart-card-title">Shipping</p>
        <p>+$5.00</p>
      </div>
      <hr />
      <div className="card-cart-title">
        <div className="price-card-container">
          <p className='total-title'>Total</p>
          <p className='total-price'>+$20.00</p>
        </div>
      </div>
      <button className='next-button'>Next</button>
    </div>
  );
};




export default CartCard;