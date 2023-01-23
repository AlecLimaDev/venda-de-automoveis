import { createContext, useState, useEffect } from "react"
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs"

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {

  const API = "http//localhost:5000"

  const [cart, setCart] = useState([])

  const [title, setTitle] = useState("")
 

  function handleAddItemToCart(url, name, price) {
    const itemObject = { url, name, price }
    setCart([...cart, itemObject])
  }

  function handleRemoveItemFromCart(clickedItemIndex) {
    const filteredCart = cart.filter(cartItem => cart.indexOf(cartItem) !== clickedItemIndex)
    setCart(filteredCart)
  }


  function clearCart() {
    setCart([])
  }






  return <CartContext.Provider value={{ cart, handleAddItemToCart, handleRemoveItemFromCart, clearCart }}>{children}</CartContext.Provider>

}