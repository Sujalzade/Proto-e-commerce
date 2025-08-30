import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CategoryCard.css';
import '../styles/glass.css';

const CategoryCard = ({ category }) => {
  return (
    <motion.div 
      className="category-card category-card-glass"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`/products/${category.id}`}>
        <div className="category-image">
          <motion.div
            className="image-placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="category-icon">👕</span>
          </motion.div>
        </div>
        <div className="category-info">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            {category.name}
          </motion.h3>
          <motion.div
            className="category-arrow"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            →
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;