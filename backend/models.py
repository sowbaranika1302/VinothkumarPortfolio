from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Project Models
class ProjectBase(BaseModel):
    title: str
    category: str
    company: str
    image: str
    description: str
    tools: List[str]
    impact: str
    duration: Optional[str] = None
    role: Optional[str] = None
    challenge: Optional[str] = None
    solution: Optional[str] = None
    results: Optional[List[str]] = []
    gallery: Optional[List[str]] = []

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    category: Optional[str] = None
    company: Optional[str] = None
    image: Optional[str] = None
    description: Optional[str] = None
    tools: Optional[List[str]] = None
    impact: Optional[str] = None
    duration: Optional[str] = None
    role: Optional[str] = None
    challenge: Optional[str] = None
    solution: Optional[str] = None
    results: Optional[List[str]] = None
    gallery: Optional[List[str]] = None

# Contact Form Models
class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: Optional[str] = None
    role: Optional[str] = None
    service: str
    message: str
    timeline: Optional[str] = None
    submitted_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new")  # new, read, responded, closed

class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    role: Optional[str] = None
    service: str
    message: str
    timeline: Optional[str] = None

# About Information Models
class Competency(BaseModel):
    icon: str
    text: str

class Experience(BaseModel):
    company: str
    role: str
    period: str
    description: str

class AboutInfo(BaseModel):
    id: str = Field(default="about_info")
    story: str
    competencies: List[Competency]
    credentials: List[str]
    experience: List[Experience]
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class AboutInfoUpdate(BaseModel):
    story: Optional[str] = None
    competencies: Optional[List[Competency]] = None
    credentials: Optional[List[str]] = None
    experience: Optional[List[Experience]] = None

# Research Models
class ResearchProject(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    organization: str
    description: str
    status: str
    collaboration: Optional[str] = None
    publications: Optional[List[str]] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ResearchProjectCreate(BaseModel):
    title: str
    organization: str
    description: str
    status: str
    collaboration: Optional[str] = None
    publications: Optional[List[str]] = []

class ResearchProjectUpdate(BaseModel):
    title: Optional[str] = None
    organization: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None
    collaboration: Optional[str] = None
    publications: Optional[List[str]] = None

# Service Models
class ServiceItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    deliverables: List[str]
    category: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ServiceItemCreate(BaseModel):
    title: str
    description: str
    deliverables: List[str]
    category: Optional[str] = None

class ServiceItemUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    deliverables: Optional[List[str]] = None
    category: Optional[str] = None

# Testimonial Models
class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    role: str
    text: str
    company: str
    approved: bool = Field(default=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)

class TestimonialCreate(BaseModel):
    name: str
    role: str
    text: str
    company: str

class TestimonialUpdate(BaseModel):
    name: Optional[str] = None
    role: Optional[str] = None
    text: Optional[str] = None
    company: Optional[str] = None
    approved: Optional[bool] = None

# Response Models
class SuccessResponse(BaseModel):
    success: bool = True
    data: Optional[dict] = None
    message: str

class ErrorResponse(BaseModel):
    success: bool = False
    error: str
    code: Optional[str] = None

# Admin Authentication Models
class AdminLogin(BaseModel):
    username: str
    password: str

class AdminToken(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int

# Analytics Models
class PageView(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    page: str
    user_agent: Optional[str] = None
    ip_address: Optional[str] = None
    referrer: Optional[str] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)