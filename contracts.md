# API Contracts & Integration Plan
**Vinoth Kumar Fashion Portfolio - Backend Integration**

## Overview
This document outlines the API contracts and integration strategy to convert the frontend from mock data to a fully functional backend-powered application.

## Current Mock Data Structure (in `/frontend/src/data/mock.js`)

### 1. Portfolio Projects
**Mock Data:** Array of 23+ projects with filtering capabilities
**Backend Requirements:**
- MongoDB collection: `projects`
- Fields: id, title, category, company, image, description, tools[], impact, duration, role, challenge, solution, results[], gallery[]
- API Endpoints needed:
  - `GET /api/projects` - Get all projects with optional category filter
  - `GET /api/projects/:id` - Get single project details
  - `POST /api/projects` - Create new project (admin)
  - `PUT /api/projects/:id` - Update project (admin)
  - `DELETE /api/projects/:id` - Delete project (admin)

### 2. Contact Form Submissions
**Mock Data:** Currently simulated form submission
**Backend Requirements:**
- MongoDB collection: `contact_submissions`
- Fields: name, email, company, role, service, message, timeline, submitted_at, status
- API Endpoints:
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact` - Get all submissions (admin)

### 3. About Information
**Mock Data:** Static about data including experience, credentials, competencies
**Backend Requirements:**
- MongoDB collection: `about_info`
- Single document with fields: story, competencies[], credentials[], experience[]
- API Endpoints:
  - `GET /api/about` - Get about information
  - `PUT /api/about` - Update about info (admin)

### 4. Research Projects
**Mock Data:** Current research initiatives and publications
**Backend Requirements:**
- MongoDB collection: `research_projects`
- Fields: title, organization, description, status, collaboration, publications[]
- API Endpoints:
  - `GET /api/research` - Get research projects
  - `POST /api/research` - Create research project (admin)
  - `PUT /api/research/:id` - Update research project (admin)

### 5. Services Information  
**Mock Data:** Service offerings and packages
**Backend Requirements:**
- MongoDB collection: `services`
- Fields: title, description, deliverables[], pricing, category
- API Endpoints:
  - `GET /api/services` - Get all services
  - `PUT /api/services` - Update services (admin)

### 6. Testimonials
**Mock Data:** Client testimonials
**Backend Requirements:**
- MongoDB collection: `testimonials` 
- Fields: name, role, text, company, approved, created_at
- API Endpoints:
  - `GET /api/testimonials` - Get approved testimonials
  - `POST /api/testimonials` - Submit testimonial
  - `PUT /api/testimonials/:id` - Update/approve testimonial (admin)

## Authentication & Admin Features
**Requirements:**
- Simple admin authentication for content management
- JWT-based auth system
- Protected routes for admin operations
- Admin dashboard for managing content

## Integration Strategy

### Phase 1: Core Backend Setup
1. Create MongoDB models for all collections
2. Implement basic CRUD APIs
3. Add error handling and validation
4. Test all endpoints

### Phase 2: Frontend Integration
1. Replace mock data imports with API calls
2. Add loading states and error handling
3. Implement form submissions
4. Add admin authentication flows

### Phase 3: Enhanced Features
1. Add image upload functionality
2. Implement email notifications for contact forms
3. Add analytics integration (Google Analytics)
4. Social media integration improvements

## API Response Formats

### Success Response
```json
{
  "success": true,
  "data": {...},
  "message": "Operation successful"
}
```

### Error Response  
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

## Environment Variables Needed
```
MONGO_URL=<existing>
DB_NAME=<existing>
JWT_SECRET=<new>
EMAIL_SERVICE_API_KEY=<for contact form notifications>
ADMIN_EMAIL=<for notifications>
```

## Security Considerations
- Input validation on all endpoints
- Rate limiting on contact form
- CORS properly configured
- JWT token expiration
- Admin route protection

## Frontend Files to Modify
1. Replace `import { portfolioData } from '../data/mock'` with API service calls
2. Add loading states to all pages
3. Add error boundaries for failed API calls  
4. Update contact form to use real submission endpoint
5. Add admin login/dashboard components (if needed)

## Testing Strategy
- Unit tests for all API endpoints
- Integration tests for frontend-backend communication  
- Manual testing of all user flows
- Performance testing for image uploads and large datasets

---
**Note:** This contracts document serves as the roadmap for seamless backend integration while maintaining the existing user experience and design quality.