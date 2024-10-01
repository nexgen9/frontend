import React, { useContext } from 'react'
import "./ProductDisplay.css"
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom';





function ProductDisplay(props) {
  const {addTocart}=useContext(ShopContext);
    const {product}=props
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
          <img src={product.image} alt="" />
        </div>
        <div className="productdispaly-right">
            <h1 className='product-name'>{product.name}</h1>
            <div className="productdisplay-prices">
                
                ${product.price}
            </div>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, illum!</p>
            <div className="size">
                <p>Pick Your Size :</p>
                <select className="size-list">
            <option value="xs" >XS</option > 
            <option value="s" >S</option >
            <option value="m" >M</option >
            <option value="l" >L</option >
            <option value="xl" >Xl</option >
            <option value="xxl" >XXL</option >
            </select>
            </div>
            <div className="buttons">
            <button type="button" onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
          
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay