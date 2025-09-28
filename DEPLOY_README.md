# Deployment Instructions

## Quick Deploy Steps:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/vinoth-kumar-portfolio.git
   git push -u origin main
   ```

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
