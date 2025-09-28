import axios from 'axios';

// Get backend URL from environment
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor to handle API responses
apiClient.interceptors.response.use(
  (response) => {
    // Return the data from success responses
    return response.data.success ? response.data.data : response.data;
  },
  (error) => {
    // Handle error responses
    console.error('API Error:', error);
    
    if (error.response) {
      // Server responded with error status
      const errorMessage = error.response.data?.error || error.response.data?.message || 'Server error';
      throw new Error(errorMessage);
    } else if (error.request) {
      // Network error
      throw new Error('Network error - please check your connection');
    } else {
      // Other error
      throw new Error('An unexpected error occurred');
    }
  }
);

// API service functions
export const portfolioAPI = {
  // Projects
  getProjects: async (category = null) => {
    const params = category && category !== 'all' ? { category } : {};
    return await apiClient.get('/projects/', { params });
  },

  getProject: async (projectId) => {
    return await apiClient.get(`/projects/${projectId}`);
  },

  // About information
  getAboutInfo: async () => {
    return await apiClient.get('/about/');
  },

  // Research projects
  getResearchProjects: async () => {
    return await apiClient.get('/research/');
  },

  // Services
  getServices: async () => {
    return await apiClient.get('/services/');
  },

  // Testimonials
  getTestimonials: async () => {
    return await apiClient.get('/testimonials/');
  },

  // Contact form submission
  submitContactForm: async (formData) => {
    return await apiClient.post('/contact/', formData);
  },

  // Submit testimonial
  submitTestimonial: async (testimonialData) => {
    return await apiClient.post('/testimonials/', testimonialData);
  },

  // Health check
  healthCheck: async () => {
    return await apiClient.get('/health/');
  }
};

// Export default for convenience
export default portfolioAPI;

// Loading states helper
export const createLoadingState = () => ({
  loading: false,
  error: null,
  data: null
});

// Hook-like helper for API calls (can be used in components)
export const useAPICall = () => {
  const [state, setState] = React.useState(createLoadingState());

  const execute = async (apiFunction, ...args) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const data = await apiFunction(...args);
      setState({ loading: false, error: null, data });
      return data;
    } catch (error) {
      setState({ loading: false, error: error.message, data: null });
      throw error;
    }
  };

  return { ...state, execute };
};

// Utility functions
export const handleAPIError = (error) => {
  console.error('API Error:', error);
  
  // You can add custom error handling here
  // For example, show toast notifications, redirect to error page, etc.
  
  return error.message || 'An error occurred';
};

export const retryAPICall = async (apiFunction, maxRetries = 3, delay = 1000) => {
  let lastError;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await apiFunction();
    } catch (error) {
      lastError = error;
      
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
      }
    }
  }
  
  throw lastError;
};