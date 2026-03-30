<template>
   
         
 <nav class="navbar navbar-expand-lg navbar-light bg-white custom-nav shadow-sm">
    <div class="container">
      <!-- Brand -->
      <router-link class="navbar-brand d-flex align-items-center fw-bold fs-3" to="/">
        <span class="brand-text">ELSHFaa</span>
        <img
          src="../assets/elshfaa.jpeg"
          class="ms-2 logo-img"
          alt="Elshfaa Logo"
        />
      </router-link>

      <!-- Toggle Button (Mobile) -->
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/medicines">MEDICINES</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/category">CATEGORY</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/blog">BLOG</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/contact">CONTACT</router-link>
          </li>
        </ul>

        <!-- Action Icons & Auth -->
        <div class="d-flex align-items-center right-side" v-if="isLoggedIn">
          <div class="nav-icons d-flex align-items-center me-3">
            <a href="#" class="icon-wrapper">
              <i class="far fa-heart"></i>
              <span class="badge-count">0</span>
            </a>
            
            <router-link to="cart" class="icon-wrapper ms-3 text-decoration-none">
              <i class="fas fa-shopping-cart"></i>
              <span class="badge-count">2</span>
              <span class="cart-price ms-2">$70</span>
            </router-link>
          </div>

          <div class="auth-section">
            <!--user information list-->
            
          
            <div class="d-flex align-items-center gap-3">
              <span class="text-muted">Hello, {{ user.name }}</span>
              <div class="dropdown">
                <a
                  class="dropdown-toggle text-decoration-none"
                  href="#"
                  role="button"
                  id="userMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-user-circle fa-lg"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userMenuLink">
                  <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
                  <li><router-link class="dropdown-item" to="/orders">Orders</router-link></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item text-danger" href="#" @click.prevent="handleLogout">Logout</a></li>
                </ul>
            </div>
            </div>
          
          </div>
        </div>
        <div class="d-flex align-items-center right-side" v-else>
          <router-link to="/login" class="btn btn-login fw-bold">Login</router-link>
          <router-link to="/register" class="btn btn-outline-primary fw-bold ms-3">Register</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/useAuthStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
// get user id

// Use a computed property to reactively track login status
const isLoggedIn = computed(() => !!authStore.user)
const user = computed(() => authStore.user)
const userId = computed(() => authStore.user ? authStore.user.id : null)
//console.log('User ID:', userId.value) // Log the user ID to verify it's being retrieved correctly
const handleLogout = async () => {
  await authStore.logout() // Clears token in store and localStorage
  router.push('/login')
}
</script>




<style scoped>
/* Main Navbar Styling */
.custom-nav {
  padding: 10px 0;
  font-family: 'Poppins', sans-serif;
}

.logo-img {
  height: 45px; 
  width: 45px; 
  border-radius: 50%;
  object-fit: cover;
}

.brand-text {
  color: #333;
  letter-spacing: 1px;
}

/* Nav Links */
.navbar-nav .nav-link {
  color: #444 !important;
  font-weight: 600;
  font-size: 14px;
  transition: 0.3s;
  position: relative;
}

.navbar-nav .nav-link:hover,
.router-link-active {
  color: #67971f !important;
}

/* Icon Badges (The "Num" circles) */
.icon-wrapper {
  position: relative;
  color: #333;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

.badge-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #67971f;
  color: white;
  font-size: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.cart-price {
  font-size: 0.95rem;
  font-weight: 700;
  color: #333;
}

/* Buttons */
.btn-login {
  background-color: #67971f;
  color: white;
  border-radius: 25px;
  padding: 6px 20px;
  transition: 0.3s;
}

.btn-login:hover {
  background-color: #55801a;
  color: white;
}

.btn-logout {
  border: 1px solid #dc3545;
  color: #dc3545;
  border-radius: 25px;
  padding: 6px 20px;
}

.btn-logout:hover {
  background-color: #dc3545;
  color: white;
}

/* Mobile Adjustments */
@media (max-width: 991.98px) {
  .navbar-nav {
    text-align: center;
    padding: 20px 0;
  }
  .right-side {
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }
}
</style>