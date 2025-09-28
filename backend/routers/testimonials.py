from fastapi import APIRouter, HTTPException
from typing import List
from models import Testimonial, TestimonialCreate, TestimonialUpdate, SuccessResponse
from database import testimonials_collection
from bson import ObjectId
import uuid
from datetime import datetime

router = APIRouter(prefix="/testimonials", tags=["testimonials"])

@router.get("/", response_model=SuccessResponse)
async def get_testimonials(approved_only: bool = True):
    """Get testimonials (approved only by default)"""
    try:
        filter_query = {}
        if approved_only:
            filter_query["approved"] = True
            
        testimonials = await testimonials_collection.find(filter_query).sort("created_at", -1).to_list(1000)
        
        # Remove MongoDB ObjectIds
        for testimonial in testimonials:
            if "_id" in testimonial:
                del testimonial["_id"]
                
        return SuccessResponse(
            data={"testimonials": testimonials, "total": len(testimonials)},
            message="Testimonials retrieved successfully"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve testimonials: {str(e)}")

@router.post("/", response_model=SuccessResponse)
async def create_testimonial(testimonial: TestimonialCreate):
    """Submit new testimonial (requires admin approval)"""
    try:
        testimonial_dict = testimonial.dict()
        testimonial_dict["id"] = str(uuid.uuid4())
        testimonial_dict["approved"] = False  # Requires admin approval
        testimonial_dict["created_at"] = datetime.utcnow()
        
        result = await testimonials_collection.insert_one(testimonial_dict)
        if not result.inserted_id:
            raise HTTPException(status_code=500, detail="Failed to submit testimonial")
            
        # Remove MongoDB ObjectId for response
        testimonial_dict.pop("_id", None)
        
        return SuccessResponse(
            data={"testimonial": testimonial_dict},
            message="Testimonial submitted successfully and is pending approval"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit testimonial: {str(e)}")

@router.put("/{testimonial_id}", response_model=SuccessResponse)
async def update_testimonial(testimonial_id: str, testimonial_update: TestimonialUpdate):
    """Update testimonial (admin only)"""
    try:
        update_dict = {k: v for k, v in testimonial_update.dict().items() if v is not None}
        
        result = await testimonials_collection.update_one(
            {"id": testimonial_id},
            {"$set": update_dict}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Testimonial not found")
            
        updated_testimonial = await testimonials_collection.find_one({"id": testimonial_id})
        if "_id" in updated_testimonial:
            del updated_testimonial["_id"]
            
        return SuccessResponse(
            data={"testimonial": updated_testimonial},
            message="Testimonial updated successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update testimonial: {str(e)}")

@router.delete("/{testimonial_id}", response_model=SuccessResponse)
async def delete_testimonial(testimonial_id: str):
    """Delete testimonial (admin only)"""
    try:
        result = await testimonials_collection.delete_one({"id": testimonial_id})
        
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Testimonial not found")
            
        return SuccessResponse(
            data={"deleted_id": testimonial_id},
            message="Testimonial deleted successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete testimonial: {str(e)}")

@router.put("/{testimonial_id}/approve", response_model=SuccessResponse)
async def approve_testimonial(testimonial_id: str):
    """Approve testimonial (admin only)"""
    try:
        result = await testimonials_collection.update_one(
            {"id": testimonial_id},
            {"$set": {"approved": True}}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Testimonial not found")
            
        return SuccessResponse(
            data={"testimonial_id": testimonial_id},
            message="Testimonial approved successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to approve testimonial: {str(e)}")