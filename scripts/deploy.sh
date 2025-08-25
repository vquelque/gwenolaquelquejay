#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Starting deployment to GitHub Pages..."

# Clean previous build
echo "🧹 Cleaning previous build..."
npm run clean

# Build the site
echo "🔨 Building the site..."
npm run build

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment completed!"
echo "🌐 Your site should be available at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
echo "⏱️  It may take a few minutes for changes to appear."
