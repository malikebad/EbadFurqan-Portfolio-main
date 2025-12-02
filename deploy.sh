#!/bin/bash

# EbadFurqan Portfolio - Hostinger Deployment Script
# This script builds the project and prepares it for deployment to Hostinger

echo "🚀 Starting deployment process for EbadFurqan Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'.' -f1 | sed 's/v//')
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Build the project
echo "🔨 Building project for production..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if dist directory exists and has content
if [ ! -d "dist" ] || [ -z "$(ls -A dist)" ]; then
    echo "❌ Build output directory is empty"
    exit 1
fi

echo ""
echo "🎉 Deployment build completed!"
echo ""
echo "📋 Next steps:"
echo "1. Upload all files from the 'dist' folder to your Hostinger public_html directory"
echo "2. Make sure the .htaccess file is included in the upload"
echo "3. Test your website on your Hostinger domain"
echo ""
echo "📁 Files to upload:"
ls -la dist/
echo ""
echo "🌐 The .htaccess file will handle routing and security headers"
echo ""
echo "📖 See HOSTINGER-DEPLOYMENT.md for detailed deployment instructions"