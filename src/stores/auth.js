import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: [],
    token: null,
    isAuthenticated: false,
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/auth/login", credentials);
        this.user = response.data.user;
        this.token = response.data.token;
        this.isAuthenticated = true;
        this.$router.push({ name: "Dashboard" });

      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      this.$router.push({ name: "login" });
    },
    async fetchUser() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/auth/user", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.user = response.data;
      } catch (error) {
        console.error("Fetching user failed:", error);
      }
    }
    
  },
});