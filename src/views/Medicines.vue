<template>
  <div>
    <div class="container-fluid mt-5 mb-5">
      <div class="row g-2">
        <div class="col-md-12">
          <div class="row g-3">
          <div
            class="col-md-4"
            v-for="medicine in medicines.data"
            :key="medicine.id"
          >
            <div class="product py-4">
              
              <div class="text-center">
                <img :src="medicine.image" width="200" />
              </div>
              <div class="about text-center">
                <h5>{{ medicine.name }}</h5>
                <span>{{ medicine.price }}</span>
              </div>
              <div
                class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"
              >
                <button class="btn btn-primary text-uppercase">
                  Add to cart
                </button>
              
                 <router-link :to="`/medicine/${medicine.id}`" class="btn btn-primary text-uppercase">
                  Review
                </router-link >
                
                <div class="add">
                  <span class="product_fav"><i class="fa fa-heart"></i></span>
                  <span class="product_fav"><i class="fa fa-bag"></i></span>
                </div>
              </div>
            </div>
        
          </div>
          <div class="d-flex justify-content-center mt-4">
            <button
              class="btn btn-primary me-2"
              :disabled="currentPage === 1"
              @click="fetchProducts(currentPage - 1)"
            >
              Previous
            </button>
            <button
              class="btn btn-primary"
              :disabled="currentPage === totalPages"
              @click="fetchProducts(currentPage + 1)"
            >
              Next
            </button>
          </div>
        </div>
      
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      medicines: [],
      currentPage: 1,
      totalPages: 0,
    };
  },
   methods: {
    async fetchProducts(page = 1) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/medicines?page=${page}&per_page=10`);
        this.medicines = response.data;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    },
  },
  mounted() {
    this.fetchProducts(); // Fetch initial products

  }, 
 
};
</script>
<style scoped>
body {
  background-color: #eee;
}

.t-products {
  background-image: linear-gradient(
    to right top,
    #5629c0,
    #5625cb,
    #5620d5,
    #551ae0,
    #5412eb
  );
  color: #fff;
  border-radius: 3px;
}

.processor {
  background-color: #fff;
  margin-top: 5px;
  border-bottom: 1px solid #eee;
}

.brand {
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.type {
  background-color: #fff;
}

.product {
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
}

.about span {
  color: #5629c0;
  font-size: 16px;
}

.cart-button button {
  font-size: 12px;
  color: #fff;
  background-color: #5629c0;
  height: 38px;
}

.cart-button button:focus,
button:active {
  font-size: 12px;
  color: #fff;
  background-color: #5629c0;
  box-shadow: none;
}

.product_fav i {
  line-height: 40px;
  color: #5629c0;
  font-size: 15px;
}

.product_fav {
  display: inline-block;
  width: 36px;
  height: 39px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 11%;
  text-align: center;
  cursor: pointer;
  margin-left: 3px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}

.product_fav:hover {
  background: #5629c0;
}

.product_fav:hover i {
  color: #fff;
}

.about {
  margin-top: 12px;
}

.off {
  position: absolute;
  left: 65%;
  top: 6%;
  width: 80px;
  text-align: center;
  height: 30px;
  line-height: 8px;
  border-radius: 5px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>