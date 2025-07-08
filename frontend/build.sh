#!/bin/bash

# ======================================
# Build script for frontend (React/Vue/Static)
# À exécuter avant le déploiement sur Render
# ======================================

set -e  # Quitte en cas d'erreur

echo "⚙️  Building frontend..."

# ----------------------------
# 1. Installer les dépendances
# ----------------------------
if [ -f "package.json" ]; then
    echo "📦  Installing Node.js dependencies..."
    npm install
else
    echo "❌  package.json not found. Is this a Node.js project?"
    exit 1
fi

# ----------------------------
# 2. Builder les assets
# ----------------------------
if [ -f "vite.config.js" ] || [ -f "vite.config.ts" ]; then
    echo "🔨  Building with Vite..."
    npm run build
elif [ -f "webpack.config.js" ]; then
    echo "📦  Building with Webpack..."
    npm run build
else
    echo "⚠️  No build tool detected. Copying static files..."
    mkdir -p ./static
    cp -r ./src/* ./static/ 2>/dev/null || :
fi

# ----------------------------
# 3. Déplacer les fichiers vers Django
# ----------------------------
if [ -d "../backend/static" ]; then
    echo "🚚  Moving assets to Django static folder..."
    rm -rf ../backend/static/*
    cp -r ./dist/* ../backend/static/  # Pour Vite/Webpack
    cp -r ./static/* ../backend/static/ 2>/dev/null || :  # Pour les fichiers statiques bruts
fi

echo "✅  Frontend build complete!"