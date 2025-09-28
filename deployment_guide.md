# Full-Stack Portfolio Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (free)
- Railway account (free)
- MongoDB Atlas account (free)

## Step 1: Create GitHub Repository

### 1.1 Initialize Git Repository
```bash
cd /app
git init
git add .
git commit -m "Initial commit - Vinoth Kumar Portfolio"
```

### 1.2 Create GitHub Repository
1. Go to GitHub.com and create new repository
2. Name it: `vinoth-kumar-portfolio`
3. Make it public or private
4. Don't initialize with README (we already have files)

### 1.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/vinoth-kumar-portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Setup MongoDB Atlas (Database)

### 2.1 Create MongoDB Atlas Account
1. Go to https://cloud.mongodb.com
2. Sign up for free account
3. Create new project: "Vinoth Portfolio"

### 2.2 Create Database Cluster
1. Choose "Build a Database" → "M0 Sandbox (Free)"
2. Select region closest to your users
3. Name cluster: "portfolio-cluster"

### 2.3 Configure Database Access
1. Database Access → Add New Database User
2. Username: `portfolio_user`
3. Password: Generate secure password
4. Database User Privileges: "Read and write to any database"

### 2.4 Configure Network Access
1. Network Access → Add IP Address
2. Choose "Allow Access from Anywhere" (0.0.0.0/0)
3. Or add specific IPs for better security

### 2.5 Get Connection String
1. Connect → Connect your application
2. Copy connection string (looks like):
```
mongodb+srv://portfolio_user:<password>@portfolio-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

## Step 3: Deploy Backend to Railway

### 3.1 Prepare Backend for Production

Create `/app/backend/requirements-production.txt`:
```txt
fastapi==0.110.1
uvicorn[standard]==0.25.0
motor==3.3.1
pydantic[email]==2.11.9
python-dotenv==1.0.1
pymongo==4.5.0
```

Create `/app/backend/Procfile`:
```
web: uvicorn server:app --host 0.0.0.0 --port $PORT
```

Create `/app/backend/runtime.txt`:
```
python-3.11.6
```

### 3.2 Deploy to Railway
1. Go to https://railway.app
2. Sign in with GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Choose "backend" folder as root directory

### 3.3 Configure Environment Variables in Railway
```
MONGO_URL=mongodb+srv://portfolio_user:<password>@portfolio-cluster.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
DB_NAME=portfolio
```

### 3.4 Configure Custom Start Command
In Railway dashboard:
- Settings → Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`

## Step 4: Deploy Frontend to Vercel

### 4.1 Prepare Frontend for Production

Update `/app/frontend/.env.production`:
```
REACT_APP_BACKEND_URL=https://your-backend-url.railway.app
```

### 4.2 Deploy to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. "New Project" → Import your GitHub repository
4. Framework Preset: "Create React App"
5. Root Directory: `frontend`
6. Build Command: `npm run build`
7. Output Directory: `build`

### 4.3 Configure Environment Variables in Vercel
```
REACT_APP_BACKEND_URL=https://your-backend-url.railway.app
```

## Step 5: Seed Production Database

### 5.1 Update Backend Seed Script for Production
Run the seed script once after deployment:
```bash
# SSH into Railway or run locally with production MongoDB URL
python seed_data.py
```

## Step 6: Custom Domain (Optional)

### 6.1 Frontend Domain (Vercel)
1. Vercel Dashboard → Domains
2. Add custom domain: `vinothkumar.com`
3. Configure DNS records as instructed

### 6.2 Backend Domain (Railway)
1. Railway Dashboard → Settings → Domains  
2. Add custom domain: `api.vinothkumar.com`
3. Update frontend environment variable

## Step 7: SSL & Security

Both Vercel and Railway provide automatic SSL certificates.

### Additional Security Headers (Optional)
Add to backend `server.py`:
```python
from fastapi.middleware.trustedhost import TrustedHostMiddleware

app.add_middleware(
    TrustedHostMiddleware, 
    allowed_hosts=["vinothkumar.com", "api.vinothkumar.com", "localhost"]
)
```

## Step 8: Monitoring & Analytics

### 8.1 Add Google Analytics (Optional)
1. Create Google Analytics account
2. Add tracking code to frontend
3. Update privacy policy

### 8.2 Error Monitoring (Optional)
- Frontend: Sentry for React
- Backend: Sentry for Python

## Deployment Checklist

- [ ] GitHub repository created and code pushed
- [ ] MongoDB Atlas database created and configured
- [ ] Backend deployed to Railway with environment variables
- [ ] Frontend deployed to Vercel with backend URL
- [ ] Database seeded with portfolio data
- [ ] Custom domain configured (optional)
- [ ] SSL certificates working
- [ ] Contact form tested in production
- [ ] All pages loading correctly

## Costs
- **MongoDB Atlas**: Free (M0 tier - 512MB storage)
- **Railway**: Free tier (500 hours/month)
- **Vercel**: Free (unlimited for personal projects)
- **Custom Domain**: $10-15/year (optional)

## Maintenance
- Monitor usage limits on free tiers
- Regular backups of MongoDB data
- Keep dependencies updated
- Monitor for security updates

## Troubleshooting

### Common Issues:
1. **CORS errors**: Ensure backend CORS settings include frontend domain
2. **Database connection**: Check MongoDB Atlas IP whitelist
3. **Environment variables**: Verify all vars set correctly in both platforms
4. **Build failures**: Check node/python versions match requirements

### Debug Commands:
```bash
# Check backend logs
railway logs --tail

# Check frontend build locally
npm run build
npm run start
```