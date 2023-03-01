import { CartContext } from '@/contexts/CartContext/CartContext'
import React, { FunctionComponent, useContext } from 'react'
import Logo from '../Logo/Logo'

interface NavBarProps {
    cart?: any;
    clearCart?: any;
    useContext?: any;
}

const Navbar:FunctionComponent<NavBarProps> = () => {
    const { cart, clearCart } = useContext<any>(CartContext)
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