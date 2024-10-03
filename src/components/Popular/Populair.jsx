import React, { useEffect, useState } from 'react'
import "./Popular.css"

import Item from "../Item/Item"
import {motion} from "framer-motion"
import {fadeIn2} from"../../variants/Variant2"

function Populair() {
  const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:4000";
 const [popular,setPopular]=useState([])
 useEffect(()=>{
   fetch(`${baseUrl}/popularinwomen`).then((response)=>response.json()).then((data)=>{setPopular(data)})
 },[])

  return (
    <div className='popular'>
        <p>POPULAR IN WOMEN</p>
        <motion.div  className="popular-item" variants={fadeIn2("up",0)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
            {popular.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
            })}

        </motion.div>

    </div>
  )
}

export default Populair