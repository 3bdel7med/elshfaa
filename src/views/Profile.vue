<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
            <!-- input image -->
            <input type="file"  @change="handleFileUpload" accept="image/*"   class="form-control" placeholder="Upload Image">
            <span class="font-weight-bold">{{authStore.user?.name}}</span><span class="text-black-50">{{authStore.user?.email}}</span><span> </span></div>
        </div>
        <div class="col-md-9 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input v-model="first_name" type="text" class="form-control" placeholder="first name" value=""></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input v-model="surname" type="text" class="form-control" value="" placeholder="surname"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input v-model="mobile" type="text" class="form-control" placeholder="enter phone number" value=""></div>
                    <div class="col-md-12"><label class="labels">Address Line </label><input v-model="address" type="text" class="form-control" placeholder="enter address line 1" value=""></div>
                    <div class="col-md-12"><label class="labels">Postcode</label><input v-model="postcode" type="text" class="form-control" placeholder="enter address line 2" value=""></div>
                    <div class="col-md-12"><label class="labels">Education</label><input v-model="education" type="text" class="form-control" placeholder="education" value=""></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input v-model="country" type="text" class="form-control" placeholder="country" value=""></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input v-model="state" type="text" class="form-control" value="" placeholder="state"></div>
                </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">Bio</label><input v-model="bio" type="text" class="form-control" placeholder="enter bio" value="">
                        </div>
                    </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
      
    </div>
</div>


</template>
<script setup>
import { useAuthStore } from '@/stores/useAuthStore';
import axios from 'axios'
const authStore = useAuthStore();
// user id
const userId = authStore.user?.id;
const form = reactive({
  first_name: '',
  last_name: '',
  phone: '',
  address: '',
  postcode: '',
  jop: '',
  education: '',
  country: '',
  state: '',
  address: '',
  profile_picture: null // This will hold the File object
});
// Capture the file from the input event
const handleFileUpload = (event) => {
  form.profile_picture = event.target.files[0];
};
const updateProfile = async () => {
  const data = new FormData();
  
  // Append text fields
  data.append('last_name', form.last_name);
  data.append('jop', form.jop);
  data.append('address', form.address);
  
  // Append the image file if it exists
  if (form.profile_picture) {
    data.append('profile_picture', form.profile_picture);
  }

  try {
    const response = await axios.post('/api/profile/update', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // If using Laravel Sanctum/Breeze, ensure Authorization header is included
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      }
    });
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error updating profile:', error.response.data);
  }
};



</script>
<style>

.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: rgb(99, 39, 120);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #682773
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #BA68C8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #BA68C8
}
</style>