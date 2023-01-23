/* eslint-disable @next/next/no-img-element */
import CartItems from '@/src/CartItems'
import Courses from '@/src/Courses'
import Navbar from '@/src/Navbar'
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

