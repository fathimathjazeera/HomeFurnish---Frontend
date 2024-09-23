import React from 'react';
import '../styles/delivery.css'
import delivery from '../assets/delivery.png'
const Delivery = () => {
  return (
    <div className="delivery-container">
      <div className="left-delivery">
        <p className='delivery-title'>We guarantee the safety of your shopping</p>
        <div className="shipping-container">
          <p>Fast-shipping</p>
          <p>Safe Delivery</p>
        </div>
        <div className="shipping-container">
          <p>365 Days Return</p>
          <p>24 hours CS</p>
        </div>
      </div>
      <div className="right-delivery">
        <img src={delivery} alt="" className='delivery-image'/>
      </div>
    </div>
  );
};

export default Delivery;
