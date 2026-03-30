<template>
    <div class="container my-5">
        <h1 class="text-center mb-4">Contact Us</h1>
        <div class="row">
            <div class="col-md-6">
                <div class="map-container" id="map" style="height: 400px;"></div> <!-- Set height for the map -->
            </div>
            <div class="col-md-6">
                <form @submit.prevent="handleSubmit">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" v-model="formData.name" class="form-control" id="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" v-model="formData.email" class="form-control" id="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea v-model="formData.message" class="form-control" id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" @click="supmit()" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
  methods:{
    supmit(){
        axios.post('http://127.0.0.1:8000/api/contactus',this.formData).then(responce=>{
            console.log(responce);
            alert('form submited');
            this.formData.name='';
            this.formData.email='';
            this.formData.message='';
        }).catch(error=>{
            console.log(error);
        });
    }
  }
};
</script>

<style>
.map-container {
    width: 100%;  /* Ensure the map takes the full width */
    height: 400px; /* Set a height to display the map */
}
</style>

