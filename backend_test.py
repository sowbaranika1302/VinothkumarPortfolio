#!/usr/bin/env python3
"""
Comprehensive Backend API Testing for Vinoth Kumar's Fashion Portfolio Website
Tests all core endpoints with proper data validation and error handling
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Backend URL from frontend environment
BACKEND_URL = "https://sustainable-designer.preview.emergentagent.com/api"

class PortfolioAPITester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.session = requests.Session()
        self.test_results = []
        
    def log_test(self, test_name, success, details="", response_data=None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        if response_data:
            result["response_data"] = response_data
        self.test_results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}")
        if details:
            print(f"    Details: {details}")
        if not success and response_data:
            print(f"    Response: {response_data}")
        print()

    def test_health_endpoints(self):
        """Test basic health check endpoints"""
        print("=== TESTING HEALTH ENDPOINTS ===")
        
        # Test root endpoint
        try:
            response = self.session.get(f"{self.base_url}/")
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "API is running successfully" in data.get("message", ""):
                    self.log_test("GET /api/ - Root endpoint", True, 
                                f"Status: {response.status_code}, Service: {data.get('data', {}).get('service')}")
                else:
                    self.log_test("GET /api/ - Root endpoint", False, 
                                f"Unexpected response format", data)
            else:
                self.log_test("GET /api/ - Root endpoint", False, 
                            f"Status: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /api/ - Root endpoint", False, f"Exception: {str(e)}")

        # Test health endpoint
        try:
            response = self.session.get(f"{self.base_url}/health")
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and data.get("data", {}).get("status") == "healthy":
                    self.log_test("GET /api/health - Health check", True, 
                                f"Status: {response.status_code}, Health: {data.get('data', {}).get('status')}")
                else:
                    self.log_test("GET /api/health - Health check", False, 
                                f"Unexpected response format", data)
            else:
                self.log_test("GET /api/health - Health check", False, 
                            f"Status: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /api/health - Health check", False, f"Exception: {str(e)}")

    def test_projects_endpoints(self):
        """Test projects endpoints"""
        print("=== TESTING PROJECTS ENDPOINTS ===")
        
        # Test get all projects
        try:
            response = self.session.get(f"{self.base_url}/projects")
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "projects" in data.get("data", {}):
                    projects = data["data"]["projects"]
                    total = data["data"]["total"]
                    self.log_test("GET /api/projects - Get all projects", True, 
                                f"Retrieved {total} projects")
                    
                    # Store a project ID for individual project test
                    if projects and len(projects) > 0:
                        self.test_project_id = projects[0].get("id")
                else:
                    self.log_test("GET /api/projects - Get all projects", False, 
                                f"Unexpected response format", data)
            else:
                self.log_test("GET /api/projects - Get all projects", False, 
                            f"Status: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /api/projects - Get all projects", False, f"Exception: {str(e)}")

        # Test projects with category filter
        try:
            response = self.session.get(f"{self.base_url}/projects?category=Collections")
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "projects" in data.get("data", {}):
                    projects = data["data"]["projects"]
                    total = data["data"]["total"]
                    # Verify all returned projects have Collections category
                    collections_only = all(p.get("category") == "Collections" for p in projects)
                    self.log_test("GET /api/projects?category=Collections - Filter by category", 
                                collections_only, 
                                f"Retrieved {total} Collections projects, filter working: {collections_only}")
                else:
                    self.log_test("GET /api/projects?category=Collections - Filter by category", False, 
                                f"Unexpected response format", data)
            else:
                self.log_test("GET /api/projects?category=Collections - Filter by category", False, 
                            f"Status: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /api/projects?category=Collections - Filter by category", False, f"Exception: {str(e)}")

        # Test individual project retrieval
        if hasattr(self, 'test_project_id') and self.test_project_id:
            try:
                response = self.session.get(f"{self.base_url}/projects/{self.test_project_id}")
                if response.status_code == 200:
                    data = response.json()
                    if data.get("success") and "project" in data.get("data", {}):
                        project = data["data"]["project"]
                        self.log_test(f"GET /api/projects/{self.test_project_id} - Get specific project", True, 
                                    f"Retrieved project: {project.get('title', 'Unknown')}")
                    else:
                        self.log_test(f"GET /api/projects/{self.test_project_id} - Get specific project", False, 
                                    f"Unexpected response format", data)
                else:
                    self.log_test(f"GET /api/projects/{self.test_project_id} - Get specific project", False, 
                                f"Status: {response.status_code}", response.text)
            except Exception as e:
                self.log_test(f"GET /api/projects/{self.test_project_id} - Get specific project", False, f"Exception: {str(e)}")
        else:
            self.log_test("GET /api/projects/{project_id} - Get specific project", False, 
                        "No project ID available from previous test")

    def test_contact_endpoint(self):
        """Test contact form submission"""
        print("=== TESTING CONTACT ENDPOINT ===")
        
        # Test contact form submission with provided test data
        contact_data = {
            "name": "Emma Thompson",
            "email": "emma.thompson@sustainablefashion.com",
            "company": "EcoStyle Innovations",
            "role": "Head of Sustainability",
            "service": "Sustainable Collection Development",
            "message": "We're interested in developing a sustainable collection for our upcoming season. Would love to discuss your approach to circular design and sustainable sourcing.",
            "timeline": "Short-term (1-3 months)"
        }
        
        try:
            response = self.session.post(f"{self.base_url}/contact", json=contact_data)
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "submission_id" in data.get("data", {}):
                    submission_id = data["data"]["submission_id"]
                    self.log_test("POST /api/contact - Submit contact form", True, 
                                f"Contact form submitted successfully, ID: {submission_id}")
                else:
                    self.log_test("POST /api/contact - Submit contact form", False, 
                                f"Unexpected response format", data)
            else:
                self.log_test("POST /api/contact - Submit contact form", False, 
                            f"Status: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("POST /api/contact - Submit contact form", False, f"Exception: {str(e)}")

        # Test contact form with invalid email
        invalid_contact_data = {
            "name": "Test User",
            "email": "invalid-email",
            "service": "Testing",
            "message": "Test message"
        }
        
        try:
            response = self.session.post(f"{self.base_url}/contact", json=invalid_contact_data)
            if response.status_code == 422:  # Validation error expected
                self.log_test("POST /api/contact - Invalid email validation", True, 
                            "Correctly rejected invalid email format")
            else:
                self.log_test("POST /api/contact - Invalid email validation", False, 
                            f"Expected 422 validation error, got {response.status_code}")
        except Exception as e:
            self.log_test("POST /api/contact - Invalid email validation", False, f"Exception: {str(e)}")

    def test_about_endpoint(self):
        """Test about information endpoint"""
        print("=== TESTING ABOUT ENDPOINT ===")
        
        try:
            response = self.session.get(f"{self.base_url}/about")
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "about" in data.get("data", {}):
                    about = data["data"]["about"]
                    required_fields = ["story", "competencies", "credentials", "experience"]
                    has_all_fields = all(field in about for field in required_fields)
                    self.log_test("GET /api/about - Get about information", has_all_fields, 
                                f"About info retrieved, has all required fields: {has_all_fields}")
                else:
                    self.log_test("GET /api/about - Get about information", False, 
                                f"Unexpected response format", data)
            else:
                self.log_test("GET /api/about - Get about information", False, 
                            f"Status: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /api/about - Get about information", False, f"Exception: {str(e)}")

    def test_research_endpoint(self):
        """Test research projects endpoint"""
        print("=== TESTING RESEARCH ENDPOINT ===")
        
        try:
            response = self.session.get(f"{self.base_url}/research")
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "research" in data.get("data", {}):
                    research = data["data"]["research"]
                    total = data["data"]["total"]
                    self.log_test("GET /api/research - Get research projects", True, 
                                f"Retrieved {total} research projects")
                else:
                    self.log_test("GET /api/research - Get research projects", False, 
                                f"Unexpected response format", data)
            else:
                self.log_test("GET /api/research - Get research projects", False, 
                            f"Status: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /api/research - Get research projects", False, f"Exception: {str(e)}")

    def test_services_endpoint(self):
        """Test services endpoint"""
        print("=== TESTING SERVICES ENDPOINT ===")
        
        try:
            response = self.session.get(f"{self.base_url}/services")
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "services" in data.get("data", {}):
                    services = data["data"]["services"]
                    total = data["data"]["total"]
                    self.log_test("GET /api/services - Get service offerings", True, 
                                f"Retrieved {total} services")
                else:
                    self.log_test("GET /api/services - Get service offerings", False, 
                                f"Unexpected response format", data)
            else:
                self.log_test("GET /api/services - Get service offerings", False, 
                            f"Status: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /api/services - Get service offerings", False, f"Exception: {str(e)}")

    def test_testimonials_endpoint(self):
        """Test testimonials endpoint"""
        print("=== TESTING TESTIMONIALS ENDPOINT ===")
        
        try:
            response = self.session.get(f"{self.base_url}/testimonials")
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "testimonials" in data.get("data", {}):
                    testimonials = data["data"]["testimonials"]
                    total = data["data"]["total"]
                    # Verify all testimonials are approved (default behavior)
                    all_approved = all(t.get("approved", False) for t in testimonials)
                    self.log_test("GET /api/testimonials - Get approved testimonials", True, 
                                f"Retrieved {total} testimonials, all approved: {all_approved}")
                else:
                    self.log_test("GET /api/testimonials - Get approved testimonials", False, 
                                f"Unexpected response format", data)
            else:
                self.log_test("GET /api/testimonials - Get approved testimonials", False, 
                            f"Status: {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /api/testimonials - Get approved testimonials", False, f"Exception: {str(e)}")

    def test_cors_configuration(self):
        """Test CORS configuration"""
        print("=== TESTING CORS CONFIGURATION ===")
        
        try:
            # Test preflight request
            headers = {
                'Origin': 'https://sustainable-designer.preview.emergentagent.com',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Request-Headers': 'Content-Type'
            }
            response = self.session.options(f"{self.base_url}/projects", headers=headers)
            
            cors_headers = {
                'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
                'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
                'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
            }
            
            cors_working = (
                cors_headers['Access-Control-Allow-Origin'] == '*' or 
                'sustainable-designer.preview.emergentagent.com' in str(cors_headers['Access-Control-Allow-Origin'])
            )
            
            self.log_test("CORS Configuration", cors_working, 
                        f"CORS headers present: {cors_working}")
                        
        except Exception as e:
            self.log_test("CORS Configuration", False, f"Exception: {str(e)}")

    def test_error_handling(self):
        """Test error handling for invalid requests"""
        print("=== TESTING ERROR HANDLING ===")
        
        # Test 404 for non-existent project
        try:
            response = self.session.get(f"{self.base_url}/projects/non-existent-id")
            if response.status_code == 404:
                self.log_test("404 Error Handling - Non-existent project", True, 
                            "Correctly returns 404 for non-existent project")
            else:
                self.log_test("404 Error Handling - Non-existent project", False, 
                            f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_test("404 Error Handling - Non-existent project", False, f"Exception: {str(e)}")

        # Test 404 for non-existent endpoint
        try:
            response = self.session.get(f"{self.base_url}/non-existent-endpoint")
            if response.status_code == 404:
                self.log_test("404 Error Handling - Non-existent endpoint", True, 
                            "Correctly returns 404 for non-existent endpoint")
            else:
                self.log_test("404 Error Handling - Non-existent endpoint", False, 
                            f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_test("404 Error Handling - Non-existent endpoint", False, f"Exception: {str(e)}")

    def run_all_tests(self):
        """Run all test suites"""
        print(f"🚀 Starting Backend API Tests for: {self.base_url}")
        print("=" * 60)
        
        self.test_health_endpoints()
        self.test_projects_endpoints()
        self.test_contact_endpoint()
        self.test_about_endpoint()
        self.test_research_endpoint()
        self.test_services_endpoint()
        self.test_testimonials_endpoint()
        self.test_cors_configuration()
        self.test_error_handling()
        
        # Summary
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results if result["success"])
        failed_tests = total_tests - passed_tests
        
        print("=" * 60)
        print("🏁 TEST SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {total_tests}")
        print(f"✅ Passed: {passed_tests}")
        print(f"❌ Failed: {failed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if failed_tests > 0:
            print("\n❌ FAILED TESTS:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"  - {result['test']}: {result['details']}")
        
        print("\n" + "=" * 60)
        return failed_tests == 0

if __name__ == "__main__":
    tester = PortfolioAPITester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)