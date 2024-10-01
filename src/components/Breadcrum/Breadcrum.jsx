import React from 'react'
import "./Breadcrum.css"
import { FaGreaterThan } from "react-icons/fa6";


function Breadcrum(props) {
    const {product}=props
  return (
    <div className='breadcrum'>
        HOME  <FaGreaterThan className='b-icon'/>  SHOP  <FaGreaterThan className='b-icon' />  {product.category}  <FaGreaterThan className='b-icon' /> {product.name}
        

    </div>
  )
}

export default Breadcrum