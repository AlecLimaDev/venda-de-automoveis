import { CartContext } from "../../../contexts/CartContext";

import React, { FunctionComponent, useContext } from "react";

import Item from "../Item/Item";

interface CartItemsProps {
  children?: React.ReactNode;
  cart?: any;
}

const CartItems: FunctionComponent<CartItemsProps> = () => {
  const { cart } = useContext<any>(CartContext);

  return (
    <footer>
      <ul>
        {cart.map((cartItem: any, index: any) => (
          <Item
            key={index}
            itemIndex={index}
            name={cartItem.name}
            price={cartItem.price}
          />
        ))}
      </ul>
    </footer>
  );
};

export default CartItems;
