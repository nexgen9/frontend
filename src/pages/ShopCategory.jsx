import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext"
import { IoMdArrowDropdown } from "react-icons/io";
import Item from "../components/Item/Item"
import  "./Css/ShopCategory.css"


function ShopCategory(props) {
  const {all_product}=useContext(ShopContext)
  const bannerStyle = {
    backgroundImage: `url(${props.banner})`,
    backgroundSize: 'cover',      
    backgroundPosition: 'center',
    height: '90vh',              
    width: '100%', 

                
    }
  
  return (
    <div className='shopcategory'>
      <div className="shopcategory-banner"
      style={bannerStyle}>
        
      </div>
      <h1 className="shopcategory-title">
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)}'s Collection
      </h1>

     
     
      <div className="shopcategory-products">
      
      {all_product.map((item,i)=>{
        
    if(props.category===item.category){
      return  <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
    }else{return null}
   })}
      </div>
     

    </div>
  )
}

export default ShopCategory