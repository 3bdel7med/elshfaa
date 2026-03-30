<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="thumbnail">
            <img
              :src="Medicine.image"
              alt=""
              class="img-responsive"
            />
            <div class="caption">
              <h4 class="pull-right">${{ Medicine.price }}</h4>
              <h4><a href="#">{{ Medicine.name }}</a></h4>
              <p>
                {{ Medicine.description }}.
              </p>
            </div>
            <div class="ratings">
              <p>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                (15 reviews)
              </p>
            </div>
            <div class="space-ten"></div>
            <div class="btn-ground text-center">
              <button @click="addToCart" type="button" class="btn btn-primary">
                <i class="fa fa-shopping-cart"></i> Add To Cart
              </button>
              
            </div>
            <div class="space-ten"></div>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>
<script setup>

import axios from "axios";
import { useAuthStore } from "../stores/auth";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();
const authStore = useAuthStore();
const userId = authStore.user ? authStore.user.id : null;
const route = useRoute();
const medicineId = route.params.id;
// get the medicine details based on the route parameter
const Medicine = ref({});
onMounted(() => {
  axios
    .get(`http://127.0.0.1:8000/api/medicines/${medicineId}`)
    .then((response) => {
      Medicine.value = response.data;
    })
    .catch((error) => {
      console.error("There was an error fetching the medicine details!", error);
    });
});
// add to cart method
const toast = useToast();
const addToCart = () => {
  // Implement the logic to add the medicine to the cart
  axios
    .post(`http://127.0.0.1:8000/api/cart/${userId}/${Medicine.value.id}`, {
     quantity: 1, // You can adjust the quantity as needed
    })
    .then((response) => {
      console.log("Medicine added to cart!", response.data);
          toast.success('Medicine added to cart successfully!');


      
    })
    .catch((error) => {
           console.error("Error details:", error.response?.data || error.message);
      toast.error('Failed to add medicine to cart.');
    });

};
/*
export default {
  
  data() {
    return {
      Medicine: {},

      // get the medicine ID from the route parameters
     // id: this.$route.params.id,
     // get the user ID from the auth store
     userId: useAuthStore().user ? useAuthStore().user.id : null,
      
    };
  },
  mounted() {
    // Simulate fetching medicine details based on the ID
    axios
      .get(`http://127.0.0.1:8000/api/medicines/${this.$route.params.id}`)
      .then((response) => {
        this.Medicine = response.data;
        console.log(this.Medicine);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the medicine details!",
          error
        );
      });
  },
  // add to cart method
  methods: {
    addToCart() {
      // get the user ID from the auth store
      const userId = this.authStore.user.id;
      // Implement the logic to add the medicine to the cart
      console.log(`Adding ${this.Medicine.id} to  cart!`+this.userId);
      
    },
  }
};*/
</script>
<style>
.product_view .modal-dialog {
  max-width: 800px;
  width: 100%;
}
.pre-cost {
  text-decoration: line-through;
  color: #a5a5a5;
}
.space-ten {
  padding: 10px 0;
}
img{
    width: 200px;
    height: 200px;
}
</style>