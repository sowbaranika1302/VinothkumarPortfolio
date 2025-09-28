from motor.motor_asyncio import AsyncIOMotorClient
from typing import Optional
import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
db_name = os.environ.get('DB_NAME', 'vinoth_portfolio')

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# Collections
projects_collection = db.projects
contact_submissions_collection = db.contact_submissions
about_info_collection = db.about_info
research_projects_collection = db.research_projects
services_collection = db.services
testimonials_collection = db.testimonials
page_views_collection = db.page_views

async def get_database():
    """Get database instance"""
    return db

async def close_database():
    """Close database connection"""
    client.close()

# Initialize collections with indexes
async def init_database():
    """Initialize database with indexes and default data"""
    try:
        # Create indexes for better performance
        await projects_collection.create_index("category")
        await projects_collection.create_index("created_at")
        await contact_submissions_collection.create_index("submitted_at")
        await contact_submissions_collection.create_index("status")
        await research_projects_collection.create_index("status")
        await testimonials_collection.create_index("approved")
        await page_views_collection.create_index("timestamp")
        
        # Check if about_info exists, create default if not
        about_info = await about_info_collection.find_one({"id": "about_info"})
        if not about_info:
            default_about = {
                "id": "about_info",
                "story": "From NIFT to leading sustainable innovation at Lulu Group, then advancing AI in fashion at Mad Street Den, and now pursuing cutting-edge research at Kent State University. I bridge creativity, technology, and sustainability to create meaningful impact in fashion.",
                "competencies": [
                    {"icon": "Leaf", "text": "Sustainable Fashion"},
                    {"icon": "Zap", "text": "Fiber Innovation"},
                    {"icon": "Box", "text": "3D Visualization"},
                    {"icon": "RefreshCw", "text": "Circular Design"},
                    {"icon": "Brain", "text": "AI in Fashion"},
                    {"icon": "Users", "text": "Cross-Functional Leadership"}
                ],
                "credentials": [
                    "Master's in Fashion Design & Merchandising - Kent State University (Current)",
                    "Bachelor's in Fashion Design - NIFT",
                    "Inside LVMH Certificate",
                    "ESG & Sustainability Certification",
                    "Published Research in Fibers Journal (2025)"
                ],
                "experience": [
                    {
                        "company": "Kent State University",
                        "role": "Graduate Research Assistant",
                        "period": "2024 - Present",
                        "description": "Leading USDA-funded hemp fiber classification research"
                    },
                    {
                        "company": "Mad Street Den",
                        "role": "Fashion Technology Lead",
                        "period": "2022 - 2024",
                        "description": "Directed AI quality assurance for global fashion clients"
                    },
                    {
                        "company": "Lulu Group International",
                        "role": "Senior Fashion Designer",
                        "period": "2020 - 2022",
                        "description": "Led sustainable collection development and market research"
                    }
                ]
            }
            await about_info_collection.insert_one(default_about)
            
        print("✅ Database initialized successfully")
        
    except Exception as e:
        print(f"❌ Database initialization error: {e}")
        raise e