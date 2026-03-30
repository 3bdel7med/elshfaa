import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
  }),
  actions: {
    async login(credentials) {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login', credentials)
      this.token = response.data.access_token
      this.user = response.data.user
      localStorage.setItem('user', JSON.stringify(this.user))
      localStorage.setItem('token', this.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
    },
  
    async logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    }
  }
})
