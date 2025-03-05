import api from '@/utilities/axios'

export const AuthService = {
  async login(credentials) {
    let response = await api.post('/auth/token', {
      username: credentials.username,
      password: credentials.password
    })

    return response.data.access_token
  }
}
