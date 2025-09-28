"""
Seed script to populate the database with initial data from mock.js
Run this once to migrate from mock data to database
"""
import asyncio
import uuid
from datetime import datetime
from database import (
    projects_collection, 
    research_projects_collection, 
    services_collection, 
    testimonials_collection,
    init_database
)

# Sample projects data (subset for testing)
sample_projects = [
    {
        "id": str(uuid.uuid4()),
        "title": "Sustainable Women's Wear Collection",
        "category": "Collections",
        "company": "Lulu Group",
        "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
        "description": "Directed the development of Lulu India's first sustainable womenswear line through market research and trend analysis.",
        "tools": ["Market Research", "Adobe Illustrator", "Clo3D"],
        "impact": "First sustainable initiative for the brand, reduced carbon footprint by 30%",
        "duration": "6 months",
        "role": "Lead Designer & Project Manager",
        "challenge": "Balancing sustainability goals with commercial viability while maintaining design excellence and consumer appeal.",
        "solution": "Implemented comprehensive sustainable materials research, collaborated with ethical suppliers, and developed innovative circular design processes.",
        "results": [
            "30% reduction in environmental impact",
            "25% increase in customer satisfaction", 
            "Successful launch across 50+ retail locations",
            "Award recognition for sustainability innovation"
        ],
        "gallery": [
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop"
        ],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Hemp Fiber Classification Research",
        "category": "Research",
        "company": "USDA / Kent State",
        "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
        "description": "USDA-funded research standardizing hemp fibers for U.S. textile industry.",
        "tools": ["Laboratory Testing", "Data Analysis", "Research Methodology"],
        "impact": "Contributing to U.S. hemp textile standardization",
        "duration": "12 months",
        "role": "Lead Researcher",
        "challenge": "Developing standardized classification system for hemp fibers in the American textile market.",
        "solution": "Comprehensive fiber analysis using advanced microscopy and standardized testing protocols.",
        "results": [
            "Published research in peer-reviewed journal",
            "Contributed to industry standardization",
            "Collaboration with multiple universities",
            "USDA recognition and continued funding"
        ],
        "gallery": [
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop"
        ],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "title": "3D Printed Quasi-Fabrics",
        "category": "3D Design",
        "company": "Kent State Research",
        "image": "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
        "description": "Innovative TPU fabric structures using 3D printing technology.",
        "tools": ["3D Printing", "TPU Materials", "Fusion 360"],
        "impact": "Prototype development for next-generation textiles",
        "duration": "8 months",
        "role": "Research Lead & Designer",
        "challenge": "Creating functional fabric-like structures using 3D printing technology.",
        "solution": "Developed innovative TPU printing techniques and flexible structural designs.",
        "results": [
            "5 successful prototype designs",
            "Patent application filed",
            "Conference presentations",
            "Industry collaboration opportunities"
        ],
        "gallery": [
            "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
        ],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "title": "AI-Powered Quality Assurance",
        "category": "Research",
        "company": "Mad Street Den",
        "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
        "description": "Implemented AI systems for global fashion quality control.",
        "tools": ["Machine Learning", "Computer Vision", "Python"],
        "impact": "99.2% accuracy in defect detection across global clients",
        "duration": "18 months",
        "role": "Technology Lead",
        "challenge": "Implementing AI-powered quality control systems for diverse fashion manufacturing.",
        "solution": "Developed computer vision algorithms and machine learning models for automated defect detection.",
        "results": [
            "99.2% defect detection accuracy",
            "Deployed across 15+ global clients",
            "40% reduction in quality control time",
            "Industry recognition and awards"
        ],
        "gallery": [
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop"
        ],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Luxury Accessories Line",
        "category": "Accessories",
        "company": "Independent",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
        "description": "Premium leather goods with sustainable sourcing.",
        "tools": ["Leather Working", "CAD Design", "Sustainable Sourcing"],
        "impact": "100% traceable supply chain implementation",
        "duration": "10 months",
        "role": "Creative Director & Designer",
        "challenge": "Creating luxury accessories while maintaining complete supply chain transparency.",
        "solution": "Implemented blockchain-based traceability and ethical sourcing partnerships.",
        "results": [
            "100% supply chain traceability",
            "Premium market positioning",
            "Sustainable luxury certification",
            "Celebrity and influencer adoption"
        ],
        "gallery": [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop"
        ],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

# Research projects data
research_data = [
    {
        "id": str(uuid.uuid4()),
        "title": "Hemp Fiber Classification for U.S. Textiles",
        "organization": "USDA / Kent State University",
        "description": "Leading research to standardize hemp fiber classification for the American textile industry",
        "status": "Ongoing",
        "collaboration": "Texas Tech University",
        "publications": ["Fibers Journal 2025", "Textile Research Quarterly"],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "title": "3D Printed Quasi-Fabrics Development",
        "organization": "Kent State University",
        "description": "Developing innovative fabric structures using TPU 3D printing technology",
        "status": "Prototype Phase",
        "collaboration": "Materials Science Department",
        "publications": ["Advanced Materials Conference 2024"],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "title": "AI in Fashion Quality Assurance",
        "organization": "Mad Street Den",
        "description": "Machine learning algorithms for automated fashion quality control",
        "status": "Deployed",
        "collaboration": "Global Fashion Brands",
        "publications": ["Fashion Technology Review", "AI in Manufacturing Journal"],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

# Services data
services_data = [
    {
        "id": str(uuid.uuid4()),
        "title": "Sustainable Collection Development",
        "description": "End-to-end sustainable fashion collection creation from concept to market",
        "deliverables": ["Market Research", "Trend Analysis", "Sustainable Sourcing", "Design Development"],
        "category": "consulting",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "title": "ESG & Circular Design Strategies",
        "description": "Comprehensive sustainability strategies for fashion brands",
        "deliverables": ["ESG Assessment", "Circular Design Implementation", "Supply Chain Optimization"],
        "category": "strategy",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "title": "AI & Digital Fashion Solutions",
        "description": "Technology integration for modern fashion businesses",
        "deliverables": ["AI Implementation", "Digital Prototyping", "Quality Assurance Systems"],
        "category": "technology",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Research & Innovation Consulting",
        "description": "Advanced material research and innovation partnerships",
        "deliverables": ["Material Innovation", "Research Collaboration", "Technology Transfer"],
        "category": "research",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

# Testimonials data
testimonials_data = [
    {
        "id": str(uuid.uuid4()),
        "name": "Sarah Chen",
        "role": "Creative Director",
        "text": "Vinoth led our first sustainable collection with exceptional market insight and innovative approach. His work reduced our environmental impact while maintaining commercial success.",
        "company": "Lulu Group International",
        "approved": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Dr. Michael Rodriguez",
        "role": "Professor of Materials Science",
        "text": "Vinoth's contribution to our USDA-funded hemp research has been invaluable. His interdisciplinary approach bridges fashion design with rigorous scientific methodology.",
        "company": "Kent State University",
        "approved": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Priya Sharma",
        "role": "VP Technology",
        "text": "Vinoth's leadership in AI quality assurance transformed how our global clients approach fashion manufacturing. His technical and creative expertise is rare in the industry.",
        "company": "Mad Street Den",
        "approved": True,
        "created_at": datetime.utcnow()
    }
]

async def seed_database():
    """Seed the database with initial data"""
    try:
        # Initialize database first
        await init_database()
        
        # Clear existing data (optional - remove in production)
        # await projects_collection.delete_many({})
        # await research_projects_collection.delete_many({})
        # await services_collection.delete_many({})
        # await testimonials_collection.delete_many({})
        
        # Insert sample projects
        if await projects_collection.count_documents({}) == 0:
            await projects_collection.insert_many(sample_projects)
            print(f"✅ Inserted {len(sample_projects)} projects")
        else:
            print("🔄 Projects already exist, skipping...")
            
        # Insert research projects
        if await research_projects_collection.count_documents({}) == 0:
            await research_projects_collection.insert_many(research_data)
            print(f"✅ Inserted {len(research_data)} research projects")
        else:
            print("🔄 Research projects already exist, skipping...")
            
        # Insert services
        if await services_collection.count_documents({}) == 0:
            await services_collection.insert_many(services_data)
            print(f"✅ Inserted {len(services_data)} services")
        else:
            print("🔄 Services already exist, skipping...")
            
        # Insert testimonials
        if await testimonials_collection.count_documents({}) == 0:
            await testimonials_collection.insert_many(testimonials_data)
            print(f"✅ Inserted {len(testimonials_data)} testimonials")
        else:
            print("🔄 Testimonials already exist, skipping...")
            
        print("🎉 Database seeding completed successfully!")
        
    except Exception as e:
        print(f"❌ Error seeding database: {e}")
        raise e

if __name__ == "__main__":
    asyncio.run(seed_database())