import React from 'react';
import '../styles/paymentcard.css';
import visa from '../assets/debitcard.svg';
import Navbar from './Navbar';
import CartCard from './CartCard';
import Footer from './Footer';

const PaymentCard = () => {
  return (
    <div>
        <Navbar />
      <p className="save-card-title">Saved Card</p>
      <div className="payment-card">
        <div className="debit-card">
          <img src="" alt="" />
          <p className="debit-card-title">HDFC Debit Card</p>
          <div className="expiry-card">
            <p>XX48</p>
            <p>Exp : 03/22</p>
          </div>
        </div>
        <div className="debit-card">
          <img src="" alt="" />
          <p className="debit-card-title">HDFC Debit Card</p>
          <div className="expiry-card">
            <p>XX48</p>
            <p>Exp : 03/22</p>
          </div>
        </div>
      </div>
      <div className="payment-card">
        <div className="debit-card">
          <img src="" alt="" />
          <p className="debit-card-title">HDFC Debit Card</p>
          <div className="expiry-card">
            <p>XX48</p>
            <p>Exp : 03/22</p>
          </div>
        </div>
        <div className="debit-card">
          <img src="" alt="" />
          <p className="debit-card-title">HDFC Debit Card</p>
          <div className="expiry-card">
            <p>XX48</p>
            <p>Exp : 03/22</p>
          </div>
        </div>
      </div>
      <p className="save-card-title">Other payment option</p>
      <div className="payment-card">
        <div className="debit-card">
          <img src="" alt="" />
          <p className="debit-card-title">Paypal</p>
          <div className="expiry-card">
            <p>XX48</p>
            <p>Exp : 03/22</p>
          </div>
        </div>
        <div className="debit-card">
          <img src="" alt="" />
          <p className="debit-card-title">Net banking</p>
          <div className="expiry-card">
            <p>XX48</p>
            <p>Exp : 03/22</p>
          </div>
        </div>
      </div>
      <div className="payment-card">
        <div className="debit-card">
          <img src="" alt="" />
          <p className="debit-card-title">G pay</p>
          <div className="expiry-card">
            <p>XX48</p>
            <p>Exp : 03/22</p>
          </div>
        </div>
        <div className="debit-card">
          <img src="" alt="" />
          <p className="debit-card-title">Cash on delivery</p>
          <div className="expiry-card">
            <p>XX48</p>
            <p>Exp : 03/22</p>
          </div>
        </div>
      </div>
      <CartCard />
      <Footer />
    </div>
  );
};
export default PaymentCard;

