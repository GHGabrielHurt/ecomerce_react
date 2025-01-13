import React from 'react';
import './CartWidget.css';

export const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
    </div>
  );
};


