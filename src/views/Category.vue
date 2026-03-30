<template>
  <div>
    <div class="container bg-light rounded">
      <div class="h4 font-weight-bold text-center py-3">Explore more</div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 my-lg-0 my-3"
          v-for="category in categories"
          :key="category.id"
        >
        <router-link :to="{ name: 'categoryId', params: { id: category.id } }">
          <div class="box bg-white" >
            <div class="d-flex align-items-center">
              <div
                class="rounded-circle mx-3 text-center d-flex align-items-center justify-content-center blue"
              >
                <img :src="category.image" alt="" />
              </div>
              <div class="d-flex flex-column">
                <b>{{ category.name }}</b>
                <a href="#">
                  <p class="text-muted">23 classes</p>
                </a>
              </div>
            </div>
          </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default{
  data(){
    return{
      categories:[]
    }
  },
   mounted() {
    axios.get('http://127.0.0.1:8000/api/categories').then(response=>{
      this.categories= response.data;
    })
      .catch(error => {
                    console.error('Error fetching categories:', error);
                });
  },
  getMedecines(){
    axios.get('http://127.0.0.1:8000/api/cat_medicines').then(response=>{
      this.medecines= response.data;
    })
      .catch(error => {
                    console.error('Error fetching medecines:', error);
                });
  }
}

</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background-color: #f8f8f8;
}
.container {
  margin-top: 20px;
  padding: 40px 20px;
}
.box {
  padding: 40px 30px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}
.box:hover {
  box-shadow: 2px 2px 10px #a5a5a5;
  transform: scale(1.03);
}
a:hover {
  text-decoration: none;
}
img {
  object-fit: contain;
  width: 35px;
  height: 35px;
  /* padding: 20px; */
}
p.text-muted {
  margin: 0;
  font-size: 0.9rem;
}
b {
  font-size: 1.12rem;
}
.rounded-circle {
  width: 60px;
  height: 60px;
  background-color: red;
}
.blue {
  background-color: #bedcfa;
  transform: rotateZ(90deg);
}
.pale-blue {
  background-color: #eff8ff;
}
.pale-orange {
  background-color: #ffe5b9;
}
.pale-purple {
  background-color: #e8e8e8;
}
.pale-cyan {
  background-color: #cffffe;
}
.pale-pink {
  background-color: #ffe4e4;
}
.pale-pale {
  background-color: #f4eeff;
}
.pale-green {
  background-color: #a0ffe6;
}
.pale-pista {
  background-color: #dbf6e9;
}
</style>