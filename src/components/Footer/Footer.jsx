import React from 'react'
import "./Footer.css"
import logoo from "../Assets/images/logoo.png"
import { NavLink } from 'react-router-dom';
import { RiInstagramFill } from "react-icons/ri";

import { AiFillTikTok } from "react-icons/ai";

import { FaTwitter } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";



function Footer() {
  return (
    <>
    <hr/>
    <div className='footer'>
        <div className="footer-main">

                <div className="footer-logo">
                    <img src={logoo} alt="" />
                    <h1>VIORA</h1>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/women" >Women</NavLink></li>
                        <li><NavLink to="/men" >Men</NavLink></li>
                        <li><NavLink to="/kids" >Kids</NavLink></li>
                    </ul>
                </div>
                <div className="footer-info">
                    <ul className="footer-infos">
                
                        <li>Company</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>

                    <div className="footer-icons">
                    <RiInstagramFill className='icon'/>
                    <AiFillTikTok className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaFacebook className='icon'/>
                    </div>

            
                </div>
        </div>
        <div className="copyright">
            <hr/>
            <p>&copy; 2024 -All Rights Reseved</p>
        </div>

    </div>
    </>
  )
}

export default Footer