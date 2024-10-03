import React, { useContext, useState } from "react";
import { ShopContext } from '../Context/ShopContext'
import "./Css/payment.css"



function Payment() {
  const {cartItems,all_product,totalamount}=useContext(ShopContext);
 
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    state: "",
    city: "",
    shipping: "office",
  });
console.log(all_product)
  // Handles form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  // Submits the order
  const handleSubmit = async (event) => {
    const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:4000";
    event.preventDefault();

    const formData = {
      ...customer,
      cartItems, // Include the cart items in the form data
    };

    try {
      const response =  await fetch(`${baseUrl}/orders`,  {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    
 const data = await response.json();

       if (data.success) {
       
        alert("Order placed successfully!");
        
        // Clear the form and cart items after submission
        setCustomer({
          name: "",
          phone: "",
          state: "",
          city: "",
          shipping: "office",
        });
      } else {
        alert("Failed to place order");
      } 
    } catch (error) {
      console.error("Error submitting order", error);
    }
  };
  const total=totalamount();

  return (
    <div className="order-info">
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2 className="shipping">
        Shipping Details
      </h2>
     
      <div className="form-group">
        <label>Name <span>*</span></label>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleInputChange}
          placeholder="Enter Your Name ..."
          required
        />
      </div>

      <div className="form-group">
        <label>Phone Number <span>*</span></label>
        <input
          type="text"
          name="phone"
          value={customer.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label>State <span>*</span></label>
        <input
          type="text"
          name="state"
          value={customer.state}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label>City <span>*</span></label>
        <input
          type="text"
          name="city"
          value={customer.city}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Shipping Method <span>*</span></label>
        <select
          name="shipping"
          value={customer.shipping}
          onChange={handleInputChange}
          required
        >
          <option value="office">Office Pickup - 450 DA</option>
          <option value="home">Home Delivery - 800 DA</option>
        </select>
      </div>

      <div className="form-group">
        <button onClick={handleSubmit} type="submit">Submit Order</button>
      </div>
    </form>
    
    <div className="order-list">
      <div className="details">
      <h4>Product </h4>
      <h4>Price </h4>
      </div>
      <hr className="seperate"/>
      <div className="order">
    {Object.keys(cartItems).map((itemId) => {
        const product = all_product.find(p => p.id === Number(itemId));
        return product && cartItems[itemId] > 0 ? (
            <li key={itemId}>
           
              
                
                <p>{product.name}</p>
                 <p><span>${product.price} x {cartItems[itemId]}</span></p>
                 
                
            </li>
        ) : null;
    })}</div>
     <div className="detail">
      <h4>Total</h4>
      <h4>${total}</h4>
      </div>
      <hr className="seperat"/>
</div>
</div>
      
    
  
 
 
  )}

export default Payment;