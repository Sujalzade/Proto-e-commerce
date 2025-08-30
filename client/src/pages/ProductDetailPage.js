import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    // Fetch product details
    fetch(`http://localhost:5005/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        if (data.sizes && data.sizes.length > 0) {
          setSelectedSize(data.sizes[0]);
        }
        if (data.colors && data.colors.length > 0) {
          setSelectedColor(data.colors[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching product details:', err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedSize, selectedColor);
      setAddedToCart(true);
      
      // Reset the "Added to cart" message after 3 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail">
          <div className="product-image-container">
            {product.image ? (
              <img src={product.image} alt={product.name} className="product-detail-image" />
            ) : (
              <div className="product-detail-image-placeholder">
                <span>No Image Available</span>
              </div>
            )}
          </div>
          
          <div className="product-info-container">
            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-price">₹{product.price}</div>
            
            <div className="product-rating">
              <span className="stars">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </span>
              <span className="reviews">({product.reviews} reviews)</span>
            </div>
            
            <div className="product-description">
              {product.description}
            </div>
            
            {product.sizes && product.sizes.length > 0 && (
              <div className="product-sizes">
                <h3>Size</h3>
                <div className="size-options">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {product.colors && product.colors.length > 0 && (
              <div className="product-colors">
                <h3>Color</h3>
                <div className="color-options">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="quantity-selector">
              <h3>Quantity</h3>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={decrementQuantity}>-</button>
                <span className="quantity">{quantity}</span>
                <button className="quantity-btn" onClick={incrementQuantity}>+</button>
              </div>
            </div>
            
            <div className="product-actions">
              <button 
                className="btn btn-primary add-to-cart-btn"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              
              {addedToCart && (
                <div className="added-to-cart">
                  Item added to cart! <Link to="/cart">View Cart</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;