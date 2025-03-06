// stores/auth.store.js
import { defineStore } from 'pinia'
import { AuthService } from '@/services/auth.services'
import api from '@/utilities/axios'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
    // userRole: (state) => state.user?.role
  },

  actions: {
    initialize() {
      // Call this when app starts to check existing token
      if (this.token) {
        this.setAuthHeaders()
        this.fetchUserProfile()
      }
    },

    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
      this.setAuthHeaders()
    },

    setUser(user) {
      this.user = user
    },

    // async fetchUserProfile() {
    //   try {
    //     const user = await AuthService.getProfile()
    //     this.setUser(user)
    //   } catch (error) {
    //     this.handleAuthError(error)
    //   }
    // },

    /**
     * Authenticates the user with the provided credentials.
     * Retrieves an access token upon successful login and stores it.
     * Redirects the user to the default dashboard.
     * Handles any authentication errors that occur during the login process.
     *
     * @param {Object} credentials - The user's login credentials.
     * @param {string} credentials.username - The username of the user.
     * @param {string} credentials.password - The password of the user.
     */

    async login(credentials) {
      try {
        const token = await AuthService.login(credentials)
        this.setToken(token)

        // Redirect based on role
        // const redirectPath = this.userRole === 'admin' ? '/admin/dashboard' : '/user/dashboard'

        router.push({ name: 'default.dashboard' })
      } catch (error) {
        this.handleAuthError(error)
      }
    },

    /**
     * Logs out the user by clearing the authentication token and redirecting to the login page.
     * It removes the token from localStorage and deletes the Authorization header from the API.
     * Finally, it navigates the user to the login route.
     */

      logout() {
      this.token = null
      //   this.user = null
      localStorage.removeItem('token')
      delete api.defaults.headers.Authorization
      router.push({ name: 'auth.login' })
    },

    /**
     * Set Authorization header for API requests if token is present.
     * @private
     */
    setAuthHeaders() {
      if (this.token) {
        api.defaults.headers.Authorization = `Bearer ${this.token}`
      }
    },

    handleAuthError(error) {
      this.logout()

      let message = 'Login failed. Please try again later.'
      if (!error.response) {
        message = 'Something went wrong'
      } else {
        switch (error.response.status) {
          case 400:
            message = 'Invalid request format'
            break
          case 401:
            message = 'Invalid credentials'
            break
          case 422:
            message = 'Validation failed: Username (4+ chars), Password (8+ chars)'
            break
          case 500:
            message = 'Server error - please try again later'
            break
        }
      }
      throw new Error(message) // Re-throw for component handling
    }
  }
})
