import React from 'react';
import CartHeader from '../components/CartHeader.jsx';
import '../styles/address.css';
import Navbar from '../components/Navbar.jsx';
import CartCard from '../components/CartCard.jsx';
import Footer from '../components/Footer.jsx';
const Address = () => {
  return (
    <div>
      <Navbar />
      <CartHeader currentStep="address" />
      <div className="address-container">
        <p className="address-title">Add new address</p>
        <div className="address-input-container">
          <div className="address-input">
            <div className="label-name-container">
              <label htmlFor="" className="address-label-name">
                Name
              </label>
            </div>
            <input type="text" placeholder="Enter name" className="address" />
          </div>
          <div className="address-input">
            <div className="label-name-container">
              <label htmlFor="" className="address-label-name">
                Email
              </label>
            </div>
            <input type="email" placeholder="Enter email" className="address" />
          </div>
        </div>
        <div className="address-input-container">
          <div className="address-input">
            <div className="label-name-container">
              <label htmlFor="" className="address-label-name">
                Phone
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter phone number"
              className="address"
            />
          </div>
          <div className="address-input">
            <div className="label-name-container">
              <label htmlFor="" className="address-label-name">
                State
              </label>
            </div>
            <input type="text" placeholder="Enter State" className="address" />
          </div>
        </div>
        <div className="address-input-container">
          <div className="address-input">
            <div className="label-name-container">
              <label htmlFor="" className="address-label-name">
                Pincode
              </label>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter pincode"
                className="address"
              />
            </div>
          </div>
          <div className="address-input">
            <div className="label-name-container">
              <label htmlFor="" className="address-label-name">
                City
              </label>
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter city"
                className="address"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="address-detail-title">Address</p>
          <textarea
            name=""
            id=""
            placeholder="Bulding name / street name"
            className="text-area"
          ></textarea>
          <div>
            <button className="save-address-btn">Save address</button>
          </div>
        </div>
      </div>
      <CartCard />
      <Footer />
    </div>
  );
};

export default Address;
