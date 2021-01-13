import axios from 'axios'
import { apiUrl } from './config'

// request intercepter
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
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },

  // Default Error Handling for common error codes.
  // TODO: Add Logic to these.
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          console.log(error.response.status)
          return Promise.reject(error)     
        case 401:
          console.log(error.response.status)
          return Promise.reject(error)
        case 403:
          console.log(error.response.status)
          return Promise.reject(error)
        case 404:
          alert('page not exist');
          return Promise.reject(error)
        case 502:
          setTimeout(() => {
            
          }, 1000);
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
  logInGetToken(username = 'chris@spatial-integrity.ca', password = 'Sherlock-password') {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    return axios.post(`${apiUrl}token`, params)
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