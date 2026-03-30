<template>
  <!-- This is a placeholder for the Blog view. You can replace this with your actual blog content. -->
  <div class="container mt-5">
    <h1 class="text-center">Welcome to the Blog</h1>
    <!-- add post button model-->
    <div class="text-center mb-4">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addPostModal">
        Add Post
      </button>
    </div>
    <!-- load posts -->
    <div class="row mt-4">
      <div class="col-md-4" v-for="post in posts" :key="post.id">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.content }}</p>
            <a :href="'/blog/' + post.slug" class="btn btn-primary">Read More</a>
            <!-- postst comments icon like dislike icon -->
             <div class="mt-3 d-flex justify-content-between">
              <div>
                <i class="fas fa-thumbs-up me-2"></i>{{ post.likes }}
                <i class="fas fa-thumbs-down ms-3 me-2"></i>{{ post.dislikes }}
              </div>
              <div>
                <i class="fas fa-comments me-2"></i>{{ post.comments_count }}
                <!-- onclick show coment and input to add new comment -->
                 <div class="mt-12">
                  <input type="text" class="form-control" placeholder="Add a comment...">
                  <button class="btn btn-secondary mt-2">Submit</button>
                  <!-- show comments -->
                  <div class="mt-3" v-for="comment in post.comments" :key="comment.id">
                    <p><strong>{{ comment.user.name }}:</strong> {{ comment.content }}</p>
                  </div>
                 </div>
              </div>
              <!-- show post date -->
              <div>
                <small class="text-muted">{{ new Date(post.created_at).toLocaleDateString() }}</small>
              </div>
             </div>
            
          </div>
        </div>
      </div>
    </div>
    <!-- Add Post Modal -->
    <div class="modal fade" id="addPostModal" tabindex="-1" aria-labelledby="addPostModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addPostModalLabel">Add New Post</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <!-- Add your form fields for adding a new post here -->
            <form @submit.prevent="addPost">
              <div class="mb-3">
                <label for="postTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="postTitle" v-model="newPost.title" required>
              </div>
              <div class="mb-3">
                <label for="postContent" class="form-label">Content</label>
                <textarea class="form-control" id="postContent" rows="5" v-model="newPost.content" required></textarea>
              </div>
          
              <button type="submit" class="btn btn-primary">Add Post</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/useAuthStore';
const authStore = useAuthStore();
import axios from 'axios';
const posts = ref([]);
const newPost = ref({
  title: '',
  user_id: authStore.user?.id, // Use the authenticated user's ID or default to 1
  content: '',

});


const addPost = async () => {
  try {
    const formData = new FormData();
    formData.append('title', newPost.value.title);
    formData.append('content', newPost.value.content);
    formData.append('user_id', newPost.value.user_id);
    
    const response = await axios.post('http://127.0.1:8000/api/posts', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    posts.value.push(response.data);
    newPost.value = { title: '', user_id: authStore.user?.id || 1, content: '', image_url: '' };
  } catch (err) {
    console.error("Error adding post:", err);
  }
};

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.1:8000/api/posts');
    posts.value = response.data.posts;
    console.log("Posts fetched:", posts.value);
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
});
</script>