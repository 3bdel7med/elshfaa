<template>
    <div>
         <div>
    <div class="container-fluid mt-5 mb-5">
      <div class="row g-2">
        <div class="col-md-12">
          <div class="row g-3">
          <div
            class="col-md-4"
            v-for="medicine in Medicines"
            :key="medicine.id"
          >
          <router-link :to="`/medicine/${medicine.id}`">
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
                <div class="add">
                  <span class="product_fav"><i class="fa fa-heart"></i></span>
                  <span class="product_fav"><i class="fa fa-bag"></i></span>
                </div>
              </div>
            </div>
        </router-link>
          </div>
         
        </div>
      
      </div>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
import axios from 'axios';
import Medicines from './Medicines.vue';

    
//const categoryId = this.$route.params.id;


export default {
    name: 'CategoryProducts',
    data() {
        return {
            id: this.$route.params.id,
            Medicines:[]
        };
    },
    mounted() {
       axios.get(`http://localhost:8000/api/categories/${this.id}/medicines`).then(response=>{
            this.Medicines = response.data;
        })
          .catch(error => {
                        console.error('Error fetching category products:', error);
                    });

    }
};

</script>