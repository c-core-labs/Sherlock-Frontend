import axios from 'axios'
import { apiUrl } from './config'

// request intercepter
// TODO get token from state.
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// response interceptor 
axios.interceptors.response.use(
  response => {
    if (response.data && response.data.status === 200 || response.data.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },

  // Default Error Handling for common error codes.
  // TODO: Add notifications / logic to these
  error => {
    if (error.status) {
      switch (error.status) {
        case 400: // Invalid request
          // Generic error message
          // Log error.
          return Promise.reject(error)       
        case 401: // Unauthorised - authntication possible - redirect to login
          // Show login modal, or redirect
          return Promise.reject(error)
        case 403: // Forbidden - display alert
          // Display error - " yOu don't have permission to access this resource..."
          return Promise.reject(error)
        case 404: // Not found
          // Display an error message "Resource not found blah blah..."
          Promise.reject(error)
          break
        default:
          return Promise.reject(error.response);
      }
      return Promise.reject(error.response);
    }
  }
)

const api = {

  // Auth Routes
  logInGetToken(username = 'chris@ccboyce.com', password = 'Sherlock-password1') {
    return fetch(
      'https://stac-api.c-core.app/login',
      {
        method:'POST',
        body: JSON.stringify({ username, password })
      }
    )

    // const params = new URLSearchParams();
    // params.append('username', username);
    // params.append('password', password);
    // return axios.post(`${apiUrl}/login`, {}, {params: {username, password} })
  },

  // TODO: Implement refresh token flow.
  refreshToken(refreshToken) {
    return axios.post(`${apiUrl}/refresh-token`, refreshToken)
  },

  getMe() {
    return axios.get(`${apiUrl}/users/me`)
  },

  tileRoute(cogUrl) {
    return axios.get(`${apiUrl}/somethingToGoHere...`)
  }
  
}


export default api