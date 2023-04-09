import { createContext, useState, ReactNode } from "react";

export const CartContext: any = createContext({});

interface CartProviderProps {
  children?: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const API = "http//localhost:5000";

  const [cart, setCart] = useState<any>([]);

  function handleAddItemToCart(url: string, name: string, price: number) {
    const itemObject = { url, name, price };
    setCart([...cart, itemObject]);
  }

  function handleRemoveItemFromCart(clickedItemIndex: any) {
    const filteredCart = cart.filter(
      (cartItem: any) => cart.indexOf(cartItem) !== clickedItemIndex
    );
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, handleAddItemToCart, handleRemoveItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
