import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProductCard.css';
import '../styles/glass.css';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="product-card product-card-glass"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <motion.div
            className="image-placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="product-icon">👕</span>
          </motion.div>
          <motion.div
            className="product-overlay"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="view-details">View Details</span>
          </motion.div>
        </div>
        
        <div className="product-info">
          <motion.h3
            className="product-name"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            {product.name}
          </motion.h3>
          
          <motion.div
            className="product-price"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            ₹{product.price}
          </motion.div>
          
          <motion.div
            className="product-rating"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <span className="stars">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="reviews">({product.reviews})</span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;