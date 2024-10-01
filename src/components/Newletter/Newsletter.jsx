import React from 'react'
import "./Newsletter.css"

function Newsletter() {
  return (
    <div className='newsletter'>
        <hr/>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p> Subscribe to our newletter and stay updated</p>
        <div className="newsletter-input">
            <input type="email" placeholder='Enter You Email' />
            <button>Subscribe</button>
        </div>
        
    </div>
  )
}

export default Newsletter