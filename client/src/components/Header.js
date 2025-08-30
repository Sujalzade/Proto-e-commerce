import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import './Header.css';
import '../styles/glass.css';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = cart && Array.isArray(cart) ? cart.reduce((total, item) => total + (item.quantity || 0), 0) : 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className="header header-glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            <div className="logo-container">
              <motion.div 
                className="logo-mark logo-glass"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="logo-text">LV</span>
              </motion.div>
              <div className="brand-text">
                <motion.h1 
                  className="brand-name"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  The Le Veneor
                </motion.h1>
                <motion.span 
                  className="brand-tagline"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Clothing
                </motion.span>
              </div>
            </div>
          </Link>
        </motion.div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <motion.ul 
            className="nav-list"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.li whileHover={{ y: -2 }}>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <Link to="/products/tshirts" onClick={() => setIsMenuOpen(false)}>T-Shirts</Link>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <Link to="/products/shirts" onClick={() => setIsMenuOpen(false)}>Shirts</Link>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <Link to="/products/jeans" onClick={() => setIsMenuOpen(false)}>Jeans</Link>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <Link to="/products/hoodies" onClick={() => setIsMenuOpen(false)}>Hoodies</Link>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <Link to="/products/shoes" onClick={() => setIsMenuOpen(false)}>Shoes</Link>
            </motion.li>
          </motion.ul>
        </nav>

        <div className="header-actions">
          <motion.div 
            className="cart-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {cartItemCount > 0 && (
                <motion.span 
                  className="cart-count"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {cartItemCount}
                </motion.span>
              )}
            </Link>
          </motion.div>

          <motion.button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;