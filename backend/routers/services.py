from fastapi import APIRouter, HTTPException
from typing import List
from models import ServiceItem, ServiceItemCreate, ServiceItemUpdate, SuccessResponse
from database import services_collection
from bson import ObjectId
import uuid
from datetime import datetime

router = APIRouter(prefix="/services", tags=["services"])

@router.get("/", response_model=SuccessResponse)
async def get_services():
    """Get all services"""
    try:
        services = await services_collection.find().sort("created_at", -1).to_list(1000)
        
        # Remove MongoDB ObjectIds
        for service in services:
            if "_id" in service:
                del service["_id"]
                
        return SuccessResponse(
            data={"services": services, "total": len(services)},
            message="Services retrieved successfully"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve services: {str(e)}")

@router.post("/", response_model=SuccessResponse)
async def create_service(service: ServiceItemCreate):
    """Create new service (admin only)"""
    try:
        service_dict = service.dict()
        service_dict["id"] = str(uuid.uuid4())
        service_dict["created_at"] = datetime.utcnow()
        service_dict["updated_at"] = datetime.utcnow()
        
        result = await services_collection.insert_one(service_dict)
        if not result.inserted_id:
            raise HTTPException(status_code=500, detail="Failed to create service")
            
        # Remove MongoDB ObjectId for response
        service_dict.pop("_id", None)
        
        return SuccessResponse(
            data={"service": service_dict},
            message="Service created successfully"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create service: {str(e)}")

@router.put("/{service_id}", response_model=SuccessResponse)
async def update_service(service_id: str, service_update: ServiceItemUpdate):
    """Update service (admin only)"""
    try:
        update_dict = {k: v for k, v in service_update.dict().items() if v is not None}
        update_dict["updated_at"] = datetime.utcnow()
        
        result = await services_collection.update_one(
            {"id": service_id},
            {"$set": update_dict}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Service not found")
            
        updated_service = await services_collection.find_one({"id": service_id})
        if "_id" in updated_service:
            del updated_service["_id"]
            
        return SuccessResponse(
            data={"service": updated_service},
            message="Service updated successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update service: {str(e)}")

@router.delete("/{service_id}", response_model=SuccessResponse)
async def delete_service(service_id: str):
    """Delete service (admin only)"""
    try:
        result = await services_collection.delete_one({"id": service_id})
        
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Service not found")
            
        return SuccessResponse(
            data={"deleted_id": service_id},
            message="Service deleted successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete service: {str(e)}")