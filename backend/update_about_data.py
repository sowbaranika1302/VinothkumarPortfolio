"""
Update script to correct the about information and experience data
"""
import asyncio
from datetime import datetime
from database import about_info_collection, init_database

async def update_about_info():
    """Update about information with correct experience data"""
    try:
        await init_database()
        
        updated_about_data = {
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
                    "role": "Lead Quality Analyst", 
                    "period": "Feb 2021 – Jul 2022",
                    "description": "Led quality assurance for AI-driven virtual fashion products, ensuring high-standard visual output for clients including Lululemon, PVH, and Meta. Directed proof-of-concept development for AI-powered styling and virtual dressing room solutions."
                },
                {
                    "company": "Champ Knit Apparels",
                    "role": "Consulting Fashion Designer",
                    "period": "Jun 2021 – Oct 2022", 
                    "description": "Designed and developed seasonal collections based on market trends and brand direction. Utilized Clo3D for digital rendering to visualize and refine designs, improving precision and efficiency."
                },
                {
                    "company": "Lulu Group International",
                    "role": "Fashion Designer",
                    "period": "Oct 2019 – Jan 2021",
                    "description": "Directed the women's wear private label at Lulu Fashion, leading trend forecasting, seasonal concept development, design execution, and coordination through to production. Led the development of Lulu India's first sustainable women's wear label."
                },
                {
                    "company": "NJ Studio",
                    "role": "Assistant Designer/Stylist",
                    "period": "August - October 2019",
                    "description": "Contributed to visual storytelling through celebrity styling and costume design in films, advertising, and reality shows. Worked with creative directors and production teams to customize clothes with project themes."
                }
            ],
            "updated_at": datetime.utcnow()
        }
        
        # Update the about information
        result = await about_info_collection.replace_one(
            {"id": "about_info"},
            updated_about_data,
            upsert=True
        )
        
        if result.modified_count > 0 or result.upserted_id:
            print("✅ About information updated successfully!")
        else:
            print("⚠️ No changes made to about information")
            
    except Exception as e:
        print(f"❌ Error updating about information: {e}")
        raise e

if __name__ == "__main__":
    asyncio.run(update_about_info())