# Elementary - Minimalist E-commerce Platform

A modern, minimalist e-commerce platform built with React and Node.js.

## 🚀 Quick Start

### Option 1: Simple Development (Recommended)
```bash
# Just run this one command and everything will work!
npm run dev
```

### Option 2: Manual Setup
```bash
# Install dependencies
npm run install-all

# Start development servers
npm run dev
```

### Option 3: Using the startup script
```bash
# Make the script executable (first time only)
chmod +x start-dev.sh

# Run the startup script
./start-dev.sh
```

## 🌐 Access Your Application

Once you run `npm run dev`, your application will be available at:

- **Frontend (React App)**: http://localhost:3000
- **Backend API**: http://localhost:5005
- **API Endpoints**: http://localhost:5005/api

## 📁 Project Structure

```
elementary/
├── client/                 # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/                 # Node.js backend
│   └── index.js
├── data/                   # Product data
│   └── products.json
├── package.json            # Root package.json
└── start-dev.sh           # Development startup script
```

## 🔧 Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run server` - Start only the backend server
- `npm run client` - Start only the React frontend
- `npm run build` - Build the React app for production
- `npm start` - Start the production server
- `npm run install-all` - Install all dependencies

## 🛠️ Development

The development environment automatically:
- Starts the backend server on port 5005
- Starts the React development server on port 3000
- Sets up proxy configuration for API calls
- Enables hot reloading for both frontend and backend

## 🚨 Troubleshooting

### Connection Refused Error
If you get "localhost refused to connect":

1. **Check if servers are running:**
   ```bash
   # Check backend
   curl http://localhost:5005/api/categories
   
   # Check frontend
   curl http://localhost:3000
   ```

2. **Restart the development environment:**
   ```bash
   # Stop any running processes
   pkill -f "npm run dev"
   
   # Start again
   npm run dev
   ```

3. **Check port conflicts:**
   ```bash
   # Check what's using port 3000
   lsof -i :3000
   
   # Check what's using port 5005
   lsof -i :5005
   ```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
rm -rf client/node_modules client/package-lock.json
npm run install-all
```

## 📦 Dependencies

### Root Dependencies
- Express.js - Backend framework
- CORS - Cross-origin resource sharing
- Morgan - HTTP request logger

### Client Dependencies
- React 18
- React Router DOM
- Axios for API calls
- Framer Motion for animations
- Anime.js for animations

## 🌟 Features

- Responsive design
- Product catalog with categories
- Shopping cart functionality
- Modern animations
- RESTful API
- Hot reloading in development

## 📝 Notes

- The backend runs on port 5005 (not 5000 as some tutorials suggest)
- The frontend proxy is correctly configured to point to the backend
- Both servers start simultaneously with `npm run dev`
- The development environment automatically handles all configuration

---

**Happy coding! 🎉**