<script setup>
import { useAuthStore } from '@/stores/useAuthStore';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  // Only fetch if we don't already have the user data
  if (!authStore.user) {
    authStore.getUser();
  }
});
</script>

<template>
 <div class="bg-light">
    <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">
        <div class="card profile-card shadow  mt-4" v-if="authStore.user">
            <div class="card-body text-center">
                <img src="https://via.placeholder.com/150" alt="User Profile" class="rounded-circle profile-img mb-3">
                <h3 class="card-title mb-0">{{ authStore.user.name }}</h3>
                <p class="text-muted">Web Developer</p>
                <p class="card-text">Passionate web developer with 5 years of experience in creating responsive and
                    user-friendly websites.</p>

                <div class="d-flex justify-content-center mb-3">
                    <a href="#" class="btn btn-outline-primary me-2"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="btn btn-outline-primary me-2"><i class="fa fa-linkedin"></i></a>
                    <a href="#" class="btn btn-outline-primary"><i class="fa fa-github"></i></a>
                </div>

                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item bg-transparent">
                        <i class="bi bi-envelope-fill me-2"></i>{{ authStore.user.email }}
                    </li>
                    <li class="list-group-item bg-transparent"><i class="bi bi-geo-alt-fill me-2"></i>New York, USA</li>
                    <li class="list-group-item bg-transparent"><i class="bi bi-briefcase-fill me-2"></i>TechCorp Inc.
                    </li>
                </ul>

                <div class="d-flex justify-content-between text-center mt-4">
                    <div>
                        <h5 class="mb-0">1.5k</h5>
                        <small class="text-muted">Followers</small>
                    </div>
                    <div>
                        <h5 class="mb-0">120</h5>
                        <small class="text-muted">Projects</small>
                    </div>
                    <div>
                        <h5 class="mb-0">4.8</h5>
                        <small class="text-muted">Rating</small>
                    </div>
                </div>

                <button class="btn btn-primary w-100 mt-4">Connect</button>
            </div>
        </div>
    </div>
</div>
</template>
<style>
  .profile-card {
    max-width: 340px;
    background-color: #f8f9fa;
}

.profile-img {
    width: 150px;
    height: 150px;
    object-fit: cover;
}
</style>