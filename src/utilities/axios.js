import axios from 'axios'

const api = axios.create({
  maxBodyLength: Infinity,
  baseURL: process.env.VUE_APP_BACKEND_URL + '/api', // Adjust to match your backend URL
  headers: { 'Content-Type': 'application/json' }
  //   withCredentials: true // Include cookies with every request
})

// Handle 401 errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status && error.response.status === 401) {
      if (error.config.isAuthRequest) {
        return Promise.reject(error)
      }
      window.location.href = '/auth/login' // Redirect to login on unauthorized error
    }
    return Promise.reject(error)
  }
)

export default api
