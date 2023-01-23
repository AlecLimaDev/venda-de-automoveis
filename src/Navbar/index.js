import { CartContext } from '@/contexts/CartContext'
import React, { useContext } from 'react'
import Logo from '../Logo'

const Navbar = () => {
    const { cart, clearCart } = useContext(CartContext)
    const totalPrice = cart.reduce((accumulator, current) => accumulator + current.price, 0)

    return (
        <header>
            <nav>
                <Logo />
                <div className='nav-bar-actions'>
                    <div className='nav-bar-total'>
                        <span className='nav-bar-total-quantity'>
                            {cart.length} {cart.length === 1 ? "Carro" : "Carros"}</span>
                        <span className='nav-bar-total-price'> {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                    <button className='clean-btn' onClick={() => clearCart()}>LIMPAR</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar