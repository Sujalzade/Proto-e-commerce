import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { productData } from '../data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Product data is now imported from products.js
const productsData = productData;

// API Routes
// Get all categories
app.get('/api/categories', (req, res) => {
  res.json(productsData.categories);
});

// Get featured products (random selection for demo)
app.get('/api/products/featured', (req, res) => {
  const allProducts = productsData.products;
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  const featured = shuffled.slice(0, 8);
  res.json(featured);
});

// Get products by category
app.get('/api/products/category/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  const categoryProducts = productsData.products.filter(product => product.category === categoryId);
  const categoryName = productsData.categories.find(cat => cat.id === categoryId)?.name || '';
  
  res.json({
    categoryName,
    products: categoryProducts
  });
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const product = productsData.products.find(product => product.id === id);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.json(product);
});

// Serve the React app for any other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log('\n🚀 Elementary E-commerce Server is running!');
  console.log('📍 Server URL: http://localhost:' + PORT);
  console.log('🌐 Client URL: http://localhost:3000');
  console.log('📱 Open your browser and navigate to: http://localhost:3000');
  console.log('⚡ API Endpoints available at: http://localhost:' + PORT + '/api');
  console.log('\n✨ Happy shopping with Elementary!\n');
});