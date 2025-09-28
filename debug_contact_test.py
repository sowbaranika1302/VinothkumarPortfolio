#!/usr/bin/env python3
"""
Debug Contact Endpoint Issues
"""

import requests
import json

BACKEND_URL = "https://sustainable-designer.preview.emergentagent.com/api"

def test_contact_debug():
    """Debug contact endpoint issues"""
    
    contact_data = {
        "name": "Emma Thompson",
        "email": "emma.thompson@sustainablefashion.com",
        "company": "EcoStyle Innovations",
        "role": "Head of Sustainability",
        "service": "Sustainable Collection Development",
        "message": "Testing contact form functionality",
        "timeline": "Short-term (1-3 months)"
    }
    
    print("=== DEBUGGING CONTACT ENDPOINT ===")
    
    # Test with trailing slash
    print("\n1. Testing POST /api/contact/ (with trailing slash)")
    try:
        response = requests.post(f"{BACKEND_URL}/contact/", json=contact_data)
        print(f"Status: {response.status_code}")
        print(f"Headers: {dict(response.headers)}")
        print(f"Response: {response.text}")
    except Exception as e:
        print(f"Exception: {e}")
    
    # Test without trailing slash
    print("\n2. Testing POST /api/contact (without trailing slash)")
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=contact_data)
        print(f"Status: {response.status_code}")
        print(f"Headers: {dict(response.headers)}")
        print(f"Response: {response.text}")
    except Exception as e:
        print(f"Exception: {e}")
    
    # Test GET to see what happens
    print("\n3. Testing GET /api/contact/")
    try:
        response = requests.get(f"{BACKEND_URL}/contact/")
        print(f"Status: {response.status_code}")
        print(f"Response: {response.text}")
    except Exception as e:
        print(f"Exception: {e}")
    
    # Test error handling
    print("\n4. Testing 404 error handling")
    try:
        response = requests.get(f"{BACKEND_URL}/non-existent-endpoint")
        print(f"Status: {response.status_code}")
        print(f"Response: {response.text}")
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == "__main__":
    test_contact_debug()