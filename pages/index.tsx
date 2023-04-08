/* eslint-disable @next/next/no-img-element */
import CartItems from '../src/CartItems/CartItems'
import Courses from '../src/Courses/Courses'
import Navbar from '../src/Navbar/Navbar'
import React from 'react'


function ShoppingCart() {

  
  return (
    <>
      <Navbar />
      <Courses />
      <CartItems />
    </>
  )
}

export default ShoppingCart

