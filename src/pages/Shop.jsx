import React from 'react'
import Hero from '../components/Hero/Hero'
import Populair from '../components/Popular/Populair'
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewCollection/NewCollection'
import Newsletter from '../components/Newletter/Newsletter'

function Shop() {
  return (
    <div>
        <Hero/>
        <Populair/>
        <Offers/>
        <NewCollection/>
        <Newsletter/>
    </div>
  )
}

export default Shop