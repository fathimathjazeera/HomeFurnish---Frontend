import React from 'react';
import CartHeader from '../components/CartHeader';
import PaymentCard from '../components/PaymentCard';

const Payment = () => {
  return (
    <div>
      <CartHeader currentStep="payment" />
      <PaymentCard />
    </div>
  );
};

export default Payment;
