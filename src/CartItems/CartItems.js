import { CartContext } from '@/contexts/CartContext'
import React, { useContext } from 'react'
import Item from '../Item/Item'

const CartItems = () => {
    const { cart } = useContext(CartContext)

    return (
        <footer>
            <ul>
                {cart.map((cartItem, index) =>
                    <Item 
                    key={index} 
                    itemIndex={index}
                    name={cartItem.name} 
                    price={cartItem.price}  
                    />
                )}
            </ul>
        </footer>
    )
}

export default CartItems