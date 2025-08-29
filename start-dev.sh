#!/bin/bash

echo "🚀 Starting Elementary E-commerce Development Environment..."
echo ""

# Check if node_modules exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing root dependencies..."
    npm install
fi

if [ ! -d "client/node_modules" ]; then
    echo "📦 Installing client dependencies..."
    cd client && npm install && cd ..
fi

echo "✨ All dependencies are ready!"
echo "🌐 Starting development servers..."
echo ""

# Start the development environment
npm run dev
