import React from 'react';
import { useLocation } from 'react-router-dom';

function Onepay() {
  const location = useLocation();
  
  // Extracting the product details from the location state
  const product = location.state?.product;
  
  if (!product) {
    return <div>No product selected for purchase</div>;
  }

  return (
    <div className="payment-page">
      <h1>Payment for {product.name}</h1>
      <p>Price: ${product.price}</p>
      
      {/* Add the payment form and logic here */}
      <button>Proceed to Pay ${product.price}</button>
    </div>
  );
}

export default Onepay;