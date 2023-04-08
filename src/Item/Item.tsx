import { CartContext } from '../../contexts/CartContext'
import React, { useContext } from 'react'
import { ItemProps } from '../interfaces/ItemProps/ItemProps'

const Item:React.FC<ItemProps> = ({ name, price, itemIndex }) => {
    const { handleRemoveItemFromCart } = useContext<any>(CartContext)
    

    return (
        <li>
            <h2 className='list-title'>{name}</h2>
            <span className='list-price'>R$ {price}</span>
            <button
                className="remove-btn"
                onClick={() => handleRemoveItemFromCart(itemIndex)}
            >
                REMOVER
            </button>
        </li>
    )
}

export default Item