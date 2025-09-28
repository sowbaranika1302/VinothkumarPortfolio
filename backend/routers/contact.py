from fastapi import APIRouter, HTTPException
from typing import List
from models import ContactSubmission, ContactSubmissionCreate, SuccessResponse
from database import contact_submissions_collection
from datetime import datetime
import uuid

router = APIRouter(prefix="/contact", tags=["contact"])

@router.post("/", response_model=SuccessResponse)
async def submit_contact_form(submission: ContactSubmissionCreate):
    """Submit contact form"""
    try:
        submission_dict = submission.dict()
        submission_dict["id"] = str(uuid.uuid4())
        submission_dict["submitted_at"] = datetime.utcnow()
        submission_dict["status"] = "new"
        
        result = await contact_submissions_collection.insert_one(submission_dict)
        if not result.inserted_id:
            raise HTTPException(status_code=500, detail="Failed to submit contact form")
        
        # Remove MongoDB ObjectId for response
        submission_dict.pop("_id", None)
        
        # TODO: Send email notification to admin
        # await send_contact_notification(submission_dict)
        
        return SuccessResponse(
            data={"submission_id": submission_dict["id"]},
            message="Thank you for your message! I'll get back to you within 24 hours."
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit contact form: {str(e)}")

@router.get("/", response_model=SuccessResponse)
async def get_contact_submissions(status: str = None):
    """Get all contact submissions (admin only - auth to be added)"""
    try:
        filter_query = {}
        if status:
            filter_query["status"] = status
            
        submissions = await contact_submissions_collection.find(filter_query).sort("submitted_at", -1).to_list(1000)
        
        # Remove MongoDB ObjectIds
        for submission in submissions:
            if "_id" in submission:
                del submission["_id"]
                
        return SuccessResponse(
            data={"submissions": submissions, "total": len(submissions)},
            message="Contact submissions retrieved successfully"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve submissions: {str(e)}")

@router.put("/{submission_id}/status", response_model=SuccessResponse)
async def update_submission_status(submission_id: str, status: str):
    """Update contact submission status (admin only)"""
    try:
        valid_statuses = ["new", "read", "responded", "closed"]
        if status not in valid_statuses:
            raise HTTPException(status_code=400, detail=f"Invalid status. Must be one of: {valid_statuses}")
            
        result = await contact_submissions_collection.update_one(
            {"id": submission_id},
            {"$set": {"status": status, "updated_at": datetime.utcnow()}}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Submission not found")
            
        return SuccessResponse(
            data={"submission_id": submission_id, "new_status": status},
            message="Submission status updated successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update submission status: {str(e)}")

# TODO: Implement email notification function
async def send_contact_notification(submission_dict):
    """Send email notification for new contact submission"""
    # This will be implemented when email service is configured
    pass