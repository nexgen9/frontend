import React from 'react'
import "./Offers.css"
import {motion} from "framer-motion"
import {fadeIn} from"../../variants/Variant"

function Offers() {
  return (
    <div className='offer'>
        <motion.div  variants={fadeIn("left",0)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}} className='offer-text'>
        <h1>Exclusive</h1>
        <h1>Offers for you </h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        
        <button><a href="#shop">Shop Now</a></button>
        </motion.div>

    </div>
  )
}

export default Offers