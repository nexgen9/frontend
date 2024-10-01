import React from 'react'
import "./Css/Cart.css"
import Cartitems from '../components/Cartitems/Cartitems'
import Checkout from '../components/Ckeckout/Checkout'


function Cart() {
  return (
    <div className='cart'>
      <Cartitems/>
      <Checkout/>
    </div>
  )
}

export default Cart