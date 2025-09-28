from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from models import Project, ProjectCreate, ProjectUpdate, SuccessResponse
from database import projects_collection
from bson import ObjectId
import uuid
from datetime import datetime

router = APIRouter(prefix="/projects", tags=["projects"])

@router.get("/", response_model=SuccessResponse)
async def get_projects(category: Optional[str] = Query(None)):
    """Get all projects with optional category filter"""
    try:
        filter_query = {}
        if category and category != "all":
            # Convert category filter format (e.g., "3d-design" to "3D Design")
            category_map = {
                "collections": "Collections",
                "3d-design": "3D Design", 
                "research": "Research",
                "styling": "Styling",
                "accessories": "Accessories",
                "surface-development": "Surface Development"
            }
            filter_query["category"] = category_map.get(category, category)
            
        projects = await projects_collection.find(filter_query).sort("created_at", -1).to_list(1000)
        
        # Convert ObjectId to string for JSON serialization
        for project in projects:
            if "_id" in project:
                del project["_id"]
                
        return SuccessResponse(
            data={"projects": projects, "total": len(projects)},
            message="Projects retrieved successfully"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve projects: {str(e)}")

@router.get("/{project_id}", response_model=SuccessResponse)
async def get_project(project_id: str):
    """Get single project by ID"""
    try:
        project = await projects_collection.find_one({"id": project_id})
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
            
        # Remove MongoDB ObjectId
        if "_id" in project:
            del project["_id"]
            
        return SuccessResponse(
            data={"project": project},
            message="Project retrieved successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve project: {str(e)}")

@router.post("/", response_model=SuccessResponse)
async def create_project(project: ProjectCreate):
    """Create new project (admin only - auth to be added)"""
    try:
        project_dict = project.dict()
        project_dict["id"] = str(uuid.uuid4())
        project_dict["created_at"] = datetime.utcnow()
        project_dict["updated_at"] = datetime.utcnow()
        
        result = await projects_collection.insert_one(project_dict)
        if not result.inserted_id:
            raise HTTPException(status_code=500, detail="Failed to create project")
            
        # Remove MongoDB ObjectId for response
        project_dict.pop("_id", None)
        
        return SuccessResponse(
            data={"project": project_dict},
            message="Project created successfully"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create project: {str(e)}")

@router.put("/{project_id}", response_model=SuccessResponse)
async def update_project(project_id: str, project_update: ProjectUpdate):
    """Update project (admin only - auth to be added)"""
    try:
        update_dict = {k: v for k, v in project_update.dict().items() if v is not None}
        update_dict["updated_at"] = datetime.utcnow()
        
        result = await projects_collection.update_one(
            {"id": project_id},
            {"$set": update_dict}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Project not found")
            
        updated_project = await projects_collection.find_one({"id": project_id})
        if "_id" in updated_project:
            del updated_project["_id"]
            
        return SuccessResponse(
            data={"project": updated_project},
            message="Project updated successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update project: {str(e)}")

@router.delete("/{project_id}", response_model=SuccessResponse)
async def delete_project(project_id: str):
    """Delete project (admin only - auth to be added)"""
    try:
        result = await projects_collection.delete_one({"id": project_id})
        
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Project not found")
            
        return SuccessResponse(
            data={"deleted_id": project_id},
            message="Project deleted successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete project: {str(e)}")