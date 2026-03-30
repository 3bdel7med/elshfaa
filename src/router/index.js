import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Category from '../views/Category.vue'
import Medicines from '../views/Medicines.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import CategoryProducts from '../views/CategoryProducts.vue'
import MedicineId from '../views/MedicineId.vue'
import { useAuthStore } from '../stores/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Pharmacy' },
    },
       {
      path: '/category',
      name: 'category',
      component: Category,
      meta: { title: 'Category' },
    },
      {
      path: '/Medicines',
      name: 'Medicines',
      component: Medicines,
      meta: { title: 'Medicines' },

    },  
    { path: '/category/:id',
      name: 'categoryId',
      component: CategoryProducts 
    },
    { path: '/medicine/:id',
      name: 'medicineId',
      component: MedicineId },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
        meta: { title: 'Profile' },
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue'),
        meta: { title: 'Cart' },
      },
    
    

    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: 'Login' },

    },  {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: { title: 'Register' },

    },
     {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { title: 'Dashboard',requiresAuth: true  },
    },
    {
      path:'/blog',
      name:'blog',
      component: () => import('../views/Blog.vue'),
      meta: { title: 'Blog' },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About Us' }, // Example of setting a title in meta
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Contact.vue'),
      meta: { title: 'Contact Us' }, // Example of setting a title in meta
    },
    // admin routes
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/index.vue'),
      meta: { title: 'Admin Dashboard', requiresAuth: true },
    },
      {
        path: '/admin/users',
        name: 'admin-users',
        component: () => import('../views/admin/users/index.vue'),
        meta: { title: 'Manage Users', requiresAuth: true },
      },
      {
        path: '/admin/medicines',
        name: 'admin-medicines',
        component: () => import('../views/admin/medicines/index.vue'),
        meta: { title: 'Manage Medicines', requiresAuth: true },
      },
      {
        path: '/admin/categories',
        name: 'admin-categories',
        component: () => import('../views/admin/categories/index.vue'),
        meta: { title: 'Manage Categories', requiresAuth: true },
      },
      {
        path: '/admin/orders',
        name: 'admin-orders',
        component: () => import('../views/admin/orders/index.vue'),
        meta: { title: 'Manage Orders', requiresAuth: true },
      }
      

  ],
})
 //Set the document title based on route meta
router.beforeEach((to, from, next) => {
    const title = to.meta.title || 'Default Title'; // Fallback title
    document.title = title; // Set the title
    next();
});
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = !!authStore.token // Check if token exists in Pinia

  // If the user is logged in and tries to access the login page
  if (to.meta.requiresGuest && isAuthenticated) {
    return next({ name: 'dashboard' }) // Redirect to home/dashboard
  }

  // Standard protection for authenticated routes
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: 'login' })
  }

  next() // Proceed as normal
})

export default router
