import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, total, removeFromCart, updateQuantity } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <div className="container">
          <h1>Your Cart</h1>
          <div className="empty-cart-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <p>Your cart is empty</p>
            <Link to="/" className="btn btn-primary">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Your Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="cart-item">
                <div className="cart-item-image">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <div className="cart-item-image-placeholder">
                      <span>No Image</span>
                    </div>
                  )}
                </div>
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  
                  <div className="cart-item-meta">
                    {item.size && <span className="cart-item-size">Size: {item.size}</span>}
                    {item.color && <span className="cart-item-color">Color: {item.color}</span>}
                  </div>
                  
                  <div className="cart-item-price">₹{item.price}</div>
                  
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      className="remove-btn" 
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="cart-item-subtotal">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            
            <Link to="/checkout" className="btn btn-primary checkout-btn">
              Proceed to Checkout
            </Link>
            
            <Link to="/" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;