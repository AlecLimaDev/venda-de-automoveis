import { CartContext } from '../../contexts/CartContext'
import React, { FunctionComponent, ReactNode, useContext } from 'react'
import { CartItemsProps } from '../interfaces/CartItemsProps/CartItemsProps'
import Item from '../Item/Item'

const CartItems:FunctionComponent<CartItemsProps> = () => {
    const { cart } = useContext<any>(CartContext)

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