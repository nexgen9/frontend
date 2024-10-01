import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./Checkout.css"
import { ShopContext } from '../../Context/ShopContext'

function Checkout() {
    const {totalamount}=useContext(ShopContext);
    const total=totalamount();

    return (
        <>
        {total > 0 ?
    <div className='checkout'>
        <div className="checkoutinfos">
        <p>Subtotal: ${total}</p>
        <div className="buttons">
        <Link to="#shop"><button>Continue Shopping</button></Link>
        <Link to="/payment"><button>Checkout</button></Link>
         
        </div>
        </div>
    </div>:<div className='checkout-text'> <h1>Your Cart Is Empty</h1></div> }
    </>
  )
}

export default Checkout