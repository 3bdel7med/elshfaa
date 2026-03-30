<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/useAuthStore';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();
const authStore = useAuthStore();
// userId is now a computed property that reacts to changes in the auth store
// cart items and load cart mreedicines
const cartItems = ref([]);
// total price of the cart items
const totalprice = ref(0);

const error = ref(null);

// Reactive user ID
const userId = computed(() => authStore.user?.id);


const getCart = async () => {
    
    error.value = null;
    
    try {
        // Tip: Use an environment variable for your API Base URL
        const response = await axios.get(`http://127.0.0.1:8000/api/cart/${userId.value}`);
        cartItems.value = response.data.items; 
        totalprice.value = response.data.totalPrice;
       

        console.log("Cart items fetched:", cartItems.value);
    } catch (err) {
        error.value = "Failed to load cart items.";
        console.error("Error fetching cart:", err);
    }

};
const checkout = async () => {
  try {

    const response = await axios.post(`http://127.0.0.1:8000/api/orders/${userId.value}`, {
      // You can include any necessary order details here
      totalprice: totalprice.value,
      
    });
    toast.success('Order completed! Your cart is now empty.');
    // Redirect to a success page or refresh cart items
  } catch (error) {
    console.error("Order failed", error);
    toast.error('Could not complete order.');
  }
};


onMounted(async () => {
    // Ensure user data is available before fetching cart
    
    getCart();
});

// Re-fetch if user changes (e.g., login/logout)
watch(userId, (newId) => {
    if (newId) getCart();
    else cartItems.value = [];
});
</script>

<template>
  <div class="cart-container p-4">
    <h2 class="mb-4">Your Shopping Cart</h2>


    
    <!-- Empty Cart State -->
    <div v-if="cartItems.length === 0" class="text-center py-5">
        <i class="fas fa-shopping-basket fa-3x mb-3 text-muted"></i>
        <p>Your cart is empty.</p>
        <router-link to="/medicines" class="btn btn-success">Shop Now</router-link>
    </div>

    <!-- Cart List -->
    <div v-else class="row g-3">
        <!--totalPrice-->
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                <h4 class="mb-0">Total: ${{ totalprice }}</h4>
                <button class="btn btn-primary" @click="checkout">Proceed to Checkout</button>
            </div>
        </div>
        <div v-for="item in cartItems" :key="item.cart_id" class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title fw-bold text-dark">{{ item.name }}</h5>
                    <p class="card-text text-success fw-bold fs-5">${{ item.price }}</p>
                    <button class="btn btn-outline-danger btn-sm">Remove</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
