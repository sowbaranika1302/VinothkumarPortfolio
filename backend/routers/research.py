from fastapi import APIRouter, HTTPException
from typing import List
from models import ResearchProject, ResearchProjectCreate, ResearchProjectUpdate, SuccessResponse
from database import research_projects_collection
from bson import ObjectId
import uuid
from datetime import datetime

router = APIRouter(prefix="/research", tags=["research"])

@router.get("/", response_model=SuccessResponse)
async def get_research_projects():
    """Get all research projects"""
    try:
        projects = await research_projects_collection.find().sort("created_at", -1).to_list(1000)
        
        # Remove MongoDB ObjectIds
        for project in projects:
            if "_id" in project:
                del project["_id"]
                
        return SuccessResponse(
            data={"research": projects, "total": len(projects)},
            message="Research projects retrieved successfully"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve research projects: {str(e)}")

@router.post("/", response_model=SuccessResponse)
async def create_research_project(project: ResearchProjectCreate):
    """Create new research project (admin only)"""
    try:
        project_dict = project.dict()
        project_dict["id"] = str(uuid.uuid4())
        project_dict["created_at"] = datetime.utcnow()
        project_dict["updated_at"] = datetime.utcnow()
        
        result = await research_projects_collection.insert_one(project_dict)
        if not result.inserted_id:
            raise HTTPException(status_code=500, detail="Failed to create research project")
            
        # Remove MongoDB ObjectId for response
        project_dict.pop("_id", None)
        
        return SuccessResponse(
            data={"research_project": project_dict},
            message="Research project created successfully"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create research project: {str(e)}")

@router.put("/{project_id}", response_model=SuccessResponse)
async def update_research_project(project_id: str, project_update: ResearchProjectUpdate):
    """Update research project (admin only)"""
    try:
        update_dict = {k: v for k, v in project_update.dict().items() if v is not None}
        update_dict["updated_at"] = datetime.utcnow()
        
        result = await research_projects_collection.update_one(
            {"id": project_id},
            {"$set": update_dict}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Research project not found")
            
        updated_project = await research_projects_collection.find_one({"id": project_id})
        if "_id" in updated_project:
            del updated_project["_id"]
            
        return SuccessResponse(
            data={"research_project": updated_project},
            message="Research project updated successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update research project: {str(e)}")

@router.delete("/{project_id}", response_model=SuccessResponse)
async def delete_research_project(project_id: str):
    """Delete research project (admin only)"""
    try:
        result = await research_projects_collection.delete_one({"id": project_id})
        
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Research project not found")
            
        return SuccessResponse(
            data={"deleted_id": project_id},
            message="Research project deleted successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete research project: {str(e)}")