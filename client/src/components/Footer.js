import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/logo.svg" alt="Le Veneor Clothing Logo" className="footer-logo-image" />
            </div>
            <p>Minimalist fashion for the modern individual.</p>
          </div>
          
          <div className="footer-section">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/products/tshirts">T-Shirts</Link></li>
              <li><Link to="/products/shirts">Shirts</Link></li>
              <li><Link to="/products/jeans">Jeans</Link></li>
              <li><Link to="/products/shorts">Shorts</Link></li>
              <li><Link to="/products/jackets">Jackets</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Help</h4>
            <ul>
              <li><Link to="/">Shipping</Link></li>
              <li><Link to="/">Returns</Link></li>
              <li><Link to="/">Sizing</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Email: hello@leveneorclothing.com</li>
              <li>Phone: +91 123 456 7890</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Le Veneor Clothing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;