import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate order placement
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
      
      // Redirect to home page after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1500);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="checkout-page empty-checkout">
        <div className="container">
          <h1>Checkout</h1>
          <div className="empty-checkout-message">
            <p>Your cart is empty. Add some products before checking out.</p>
            <Link to="/" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="checkout-page order-success">
        <div className="container">
          <div className="order-success-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your purchase. You will be redirected to the home page shortly.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>
        
        <div className="checkout-content">
          <div className="checkout-form-container">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h2>Shipping Information</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <h2>Payment Information</h2>
              <p className="payment-note">Payment functionality will be added soon. For now, all orders are Cash on Delivery.</p>
              
              <button type="submit" className="btn btn-primary place-order-btn">
                Place Order
              </button>
            </form>
          </div>
          
          <div className="order-summary">
            <h2>Order Summary</h2>
            
            <div className="order-items">
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="order-item">
                  <div className="order-item-image">
                    {item.image ? (
                      <img src={item.image} alt={item.name} />
                    ) : (
                      <div className="order-item-image-placeholder">
                        <span>No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="order-item-details">
                    <h4>{item.name}</h4>
                    <div className="order-item-meta">
                      {item.size && <span>Size: {item.size}</span>}
                      {item.color && <span>Color: {item.color}</span>}
                      <span>Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <div className="order-item-price">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="order-totals">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;