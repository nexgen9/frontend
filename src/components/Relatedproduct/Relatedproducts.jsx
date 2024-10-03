import React, { useEffect, useState } from 'react'
import "./Relatedproducts.css"

import Item from "../Item/Item"


function Relatedproducts(props) {
  const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:4000";
  const [related ,setRelated]=useState([]) 
  useEffect(()=>{
    fetch(`${baseUrl}/related`).then((response)=>response.json()).then((data)=>{setRelated(data)})
   },[])
   
   
  return (
    <div className='relatedproduct'>
        <hr/>
        <h1>You may also like</h1>
        <div className="products">
     
            {related.map((item,i)=>{
               
                
                
                  return  <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
                   
              
            })}

</div>
    </div>
  )
}

export default Relatedproducts