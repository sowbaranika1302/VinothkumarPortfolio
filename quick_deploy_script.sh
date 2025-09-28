#!/bin/bash

# Quick Deploy Script for Vinoth Kumar Portfolio
echo "🚀 Preparing Vinoth Kumar Portfolio for Deployment..."

# Create production requirements for backend
echo "📦 Creating production requirements..."
cat > /app/backend/requirements-production.txt << EOF
fastapi==0.110.1
uvicorn[standard]==0.25.0
motor==3.3.1
pydantic[email]==2.11.9
python-dotenv==1.0.1
pymongo==4.5.0
python-multipart==0.0.9
EOF

# Create Procfile for Railway
echo "⚙️ Creating Procfile for Railway..."
echo "web: uvicorn server:app --host 0.0.0.0 --port \$PORT" > /app/backend/Procfile

# Create railway.json for better deployment
cat > /app/backend/railway.json << EOF
{
  "\$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "uvicorn server:app --host 0.0.0.0 --port \$PORT",
    "healthcheckPath": "/api/health"
  }
}
EOF

# Create production environment template
echo "🔧 Creating production environment template..."
cat > /app/backend/.env.production.example << EOF
# Production Environment Variables for Railway
MONGO_URL=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
DB_NAME=portfolio
PORT=8001
EOF

# Create production environment for frontend
echo "🎨 Creating frontend production config..."
cat > /app/frontend/.env.production << EOF
# Replace with your actual Railway backend URL
REACT_APP_BACKEND_URL=https://your-app-name.up.railway.app
EOF

# Create vercel.json for better frontend deployment
cat > /app/frontend/vercel.json << EOF
{
  "version": 2,
  "name": "vinoth-kumar-portfolio",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "headers": {
        "cache-control": "s-maxage=31536000,immutable"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
EOF

# Create deployment README
cat > /app/DEPLOY_README.md << EOF
# Deployment Instructions

## Quick Deploy Steps:

1. **Push to GitHub:**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/vinoth-kumar-portfolio.git
   git push -u origin main
   \`\`\`

2. **Setup MongoDB Atlas:**
   - Create account at https://cloud.mongodb.com
   - Create free M0 cluster
   - Get connection string
   - Whitelist IP addresses

3. **Deploy Backend to Railway:**
   - Go to https://railway.app
   - Connect GitHub repo
   - Select 'backend' folder
   - Add environment variables:
     - MONGO_URL=your_mongodb_connection_string
     - DB_NAME=portfolio

4. **Deploy Frontend to Vercel:**
   - Go to https://vercel.com
   - Import GitHub repo
   - Select 'frontend' folder  
   - Add environment variable:
     - REACT_APP_BACKEND_URL=your_railway_backend_url

5. **Seed Database:**
   Run seed script once after backend deployment

## Important Files Created:
- backend/Procfile - Railway deployment config
- backend/railway.json - Railway settings
- frontend/vercel.json - Vercel deployment config
- backend/.env.production.example - Environment template

## Support:
See deployment_guide.md for detailed instructions.
EOF

# Make script executable and provide final instructions
chmod +x /app/quick_deploy_script.sh

echo "✅ Deployment preparation complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Review the files created in your project"
echo "2. Follow instructions in DEPLOY_README.md"
echo "3. See deployment_guide.md for detailed guide"
echo ""
echo "🔗 Key URLs to visit:"
echo "- GitHub: https://github.com (create repository)"
echo "- MongoDB Atlas: https://cloud.mongodb.com"
echo "- Railway: https://railway.app" 
echo "- Vercel: https://vercel.com"
echo ""
echo "💡 Tip: Start with MongoDB Atlas, then Railway (backend), then Vercel (frontend)"