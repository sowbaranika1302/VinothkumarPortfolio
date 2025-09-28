from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import logging
from pathlib import Path
from dotenv import load_dotenv
import os

# Import database and models
from database import init_database, close_database
from models import SuccessResponse

# Import routers
from routers import projects, contact, about, research, services, testimonials

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Lifespan events for database initialization
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    await init_database()
    print("🚀 Backend server started successfully")
    yield
    # Shutdown
    await close_database()
    print("👋 Backend server shutdown complete")

# Create FastAPI app with lifespan
app = FastAPI(
    title="Vinoth Kumar Portfolio API",
    description="Backend API for Vinoth Kumar's Fashion Portfolio Website",
    version="1.0.0",
    lifespan=lifespan
)

# Create API router with /api prefix
api_router = APIRouter(prefix="/api")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Basic health check endpoint
@api_router.get("/", response_model=SuccessResponse)
async def root():
    return SuccessResponse(
        data={"service": "Vinoth Kumar Portfolio API", "version": "1.0.0"},
        message="API is running successfully"
    )

@api_router.get("/health", response_model=SuccessResponse)
async def health_check():
    return SuccessResponse(
        data={"status": "healthy", "service": "portfolio-api"},
        message="Service is healthy"
    )

# Include all routers
api_router.include_router(projects.router)
api_router.include_router(contact.router)
api_router.include_router(about.router)
api_router.include_router(research.router)
api_router.include_router(services.router)
api_router.include_router(testimonials.router)

# Include the API router in the main app
app.include_router(api_router)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Error handlers
@app.exception_handler(404)
async def not_found_handler(request, exc):
    from fastapi.responses import JSONResponse
    return JSONResponse(
        status_code=404,
        content={"success": False, "error": "Endpoint not found", "code": "NOT_FOUND"}
    )

@app.exception_handler(500)
async def internal_error_handler(request, exc):
    from fastapi.responses import JSONResponse
    logger.error(f"Internal server error: {exc}")
    return JSONResponse(
        status_code=500,
        content={"success": False, "error": "Internal server error", "code": "INTERNAL_ERROR"}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)