import React from 'react';
import '../styles/cartheader.css';

const CartHeader = ({ currentStep }) => {

  const steps = [
    { id: 'cart', label: 'Shopping Cart' },
    { id: 'address', label: 'Shipping Address' },
    { id: 'payment', label: 'Payment Info' },
  ];

  const renderIcon = (stepId, index) => {
    const currentStepIndex = steps.findIndex((step) => step.id === currentStep);
    if (index < currentStepIndex) {
      return <span className="step-icon complete">✔</span>;
    }
    if (stepId === currentStep) {
      return <span className="step-icon active">{`0${index + 1}`}</span>;
    }
    return <span className="step-icon">{`0${index + 1}`}</span>;
  };


  return (
    <div className="cart-header">
      {steps.map((step, index) => (
        <div key={step.id} className="checkout-step">
          {renderIcon(step.id, index)}
          <span
            className={`step-label ${currentStep === step.id ? 'active' : ''} ${
              index < steps.findIndex((s) => s.id === currentStep)
                ? 'completed'
                : ''
            }`}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
};


export default CartHeader;