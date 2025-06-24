import {useContext, createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
  setCartItems(prev => {
    const existingItem = prev.find(item => item.name === product.name);
    if (existingItem) {
      return prev.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prev, { ...product, quantity: 1 }];
    }
  });
};


  const updateQuantity = (name, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.name === name
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (name) => {
    setCartItems(prev => prev.filter(item => item.name !== name));
  };

 
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{cartItems, updateQuantity, removeItem, addToCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

export default CartProvider;