from fastapi import APIRouter, HTTPException
from models import AboutInfo, AboutInfoUpdate, SuccessResponse
from database import about_info_collection
from datetime import datetime

router = APIRouter(prefix="/about", tags=["about"])

@router.get("/", response_model=SuccessResponse)
async def get_about_info():
    """Get about information"""
    try:
        about_info = await about_info_collection.find_one({"id": "about_info"})
        if not about_info:
            raise HTTPException(status_code=404, detail="About information not found")
            
        # Remove MongoDB ObjectId
        if "_id" in about_info:
            del about_info["_id"]
            
        return SuccessResponse(
            data={"about": about_info},
            message="About information retrieved successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve about information: {str(e)}")

@router.put("/", response_model=SuccessResponse)
async def update_about_info(about_update: AboutInfoUpdate):
    """Update about information (admin only - auth to be added)"""
    try:
        update_dict = {k: v for k, v in about_update.dict().items() if v is not None}
        update_dict["updated_at"] = datetime.utcnow()
        
        result = await about_info_collection.update_one(
            {"id": "about_info"},
            {"$set": update_dict}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="About information not found")
            
        updated_about = await about_info_collection.find_one({"id": "about_info"})
        if "_id" in updated_about:
            del updated_about["_id"]
            
        return SuccessResponse(
            data={"about": updated_about},
            message="About information updated successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update about information: {str(e)}")