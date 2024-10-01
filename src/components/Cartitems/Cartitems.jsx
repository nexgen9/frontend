import React, { useContext, useEffect } from 'react'
import { FaXmark } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";




import"./Cartitems.css"
import { ShopContext } from '../../Context/ShopContext'

function Cartitems() {

  
    const {all_product,cartItems,setCartItems,removeFromcart,addTocart}=useContext(ShopContext)
    useEffect(() => {
      // Load cart from local storage when the component loads
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (storedCart) {
        setCartItems(storedCart); 
      }
    }, []);
    console.log(cartItems);
  return (
    <div className='cartitems'>
        <div className="cartitems-text">
           <h1>You Card Items</h1>
        </div>
        <hr />
        <div className="cartitems-products">
           { all_product.map((e)=>{
           
              if (cartItems[e.id]>0){
                return <div className="product-infos">
                     <img src={e.image} alt="" />
                     <div className="product-info">
                        <p>{e.name}</p>
                        <p> Price :    ${e.price}</p>
                        <div className='product-count'>
                       
                        <button onClick={()=>{addTocart(e.id)}}><FaPlus /></button>
                        <button>{cartItems[e.id]} </button>
                        <button onClick={()=>{removeFromcart(e.id)}}><FaMinus /></button>
                           </div>
                        <p> Total :    ${e.price*cartItems[e.id]}</p>
                        <button className='remove-btn' onClick={()=>{removeFromcart(e.id)}}><FaXmark /></button>
                     </div>
                </div>
            }
           })}
            <div className="cartitems-product">

            </div>
        </div>
    </div>
  )
}

export default Cartitems