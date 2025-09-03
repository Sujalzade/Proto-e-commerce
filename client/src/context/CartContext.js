import React, { createContext, useState, useEffect } from 'react';

// Create context with default values
export const CartContext = createContext({
  cart: [],
  total: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load cart from localStorage if available
    try {
      const savedCart = localStorage.getItem('leVeneorCart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      setCart([]);
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    try {
      localStorage.setItem('leVeneorCart', JSON.stringify(cart));
      
      // Calculate total
      const newTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setTotal(newTotal);
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1, size = null, color = null) => {
    const existingItemIndex = cart.findIndex(
      item => item.id === product.id && item.size === size && item.color === color
    );

    if (existingItemIndex >= 0) {
      // Item already exists, update quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add new item
      setCart([...cart, { 
        ...product, 
        quantity, 
        size, 
        color 
      }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const updateQuantity = (index, quantity) => {
    if (quantity <= 0) {
      removeFromCart(index);
      return;
    }
    
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue = { 
    cart, 
    total, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart 
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};