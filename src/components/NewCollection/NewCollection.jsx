import React, { useEffect, useState } from 'react'
import "./NewCollection.css"

import Item from '../Item/Item'


const NewCollection = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:4000";
  const [newc ,setNewc]=useState([])
  useEffect(()=>{
   fetch(`${baseUrl}/newcollection`).then((response)=>response.json()).then((data)=>{setNewc(data)})
  },[])
  return (
    <div id="shop" className='newcollection'>
        <h1>NEW COLLECTIONS</h1>
        <div className="collection">
           { newc.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
            })}

        </div>

    </div>
  )
}

export default NewCollection