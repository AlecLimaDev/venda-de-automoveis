/* eslint-disable @next/next/no-img-element */
import CartItems from '../src/components/CartItems/CartItems'
import Navbar from '../src/components/Navbar/Navbar'
import React from 'react'
import Vehicles from '../src/components/Vehicles/Vehicles'


function ShoppingCart() {

  
  return (
    <>
      <Navbar />
      <Vehicles />
      <CartItems />
    </>
  )
}

export default ShoppingCart

