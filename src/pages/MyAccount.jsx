import React from 'react';
import '../styles/myaccount.css';
import myaccount from '../assets/myaccount.svg';
import accountcart from '../assets/account-cart.svg';
import managepayment from '../assets/managepayment.svg';
import logout from '../assets/logout.svg';
import wishlist from '../assets/wishlist.svg';
import support from '../assets/support.svg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PersonalInformation from '../components/PersonalInformation';

const MyAccount = () => {
  return (
    <div>
      <Navbar />
      <p className="settings-title">Settings</p>
      <div className="my-account-container">
        <div className="my-account-items">
          <img src={myaccount} alt="" />
          <p>My account</p>
        </div>
        <div className="my-account-items">
          <img src={accountcart} alt="" />
          <p>My order</p>
        </div>
        <div className="my-account-items">
          <img src={managepayment} alt="" />
          <p>Manage payments</p>
        </div>
        <div className="my-account-items">
          <img src={wishlist} alt="" />
          <p>Wish list</p>
        </div>
        <div className="my-account-items">
          <img src={support} alt="" />
          <p>Support</p>
        </div>
        <div className="my-account-items">
          <img src={logout} alt="" />
          <p>Logout</p>
        </div>
      </div>
      <PersonalInformation />
      <Footer />
    </div>
  );
};

export default MyAccount;
