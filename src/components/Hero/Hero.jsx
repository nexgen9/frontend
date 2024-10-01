import React from 'react'
import "./Hero.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import {fadeIn} from"../../variants/Variant"


function Hero() {
  return (
    <div className='hero' variants={fadeIn("right",0)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
      
      
        <motion.h2 variants={fadeIn("right",0)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}} className='her-title'>NEW ARRIVALS ONLY</motion.h2>
        <motion.p variants={fadeIn("right",0.1)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}} className='new'>New collections for everyone</motion.p>
        <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"}  viewport={{once:false,amount:0.7}} className='latest-button'>
            <p><a href="#shop">Latest Collection</a></p>
            <IoIosArrowRoundForward className='arrow' />
        </motion.div>
     
    </div>
  )
}

export default Hero