import React from 'react';
import './CartWidget.css';

export const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
};


