<template>
    <!-- Admin Categories Management Page -->
     <div class="container mt-5">
        <h1 class="text-center mb-4">Category Management</h1>
        <!-- Button to add a new category -->
        <div class="mb-3">
            <!-- Trigger the Add New Category Modal -->
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addCategoryModal">
                Add New Category
            </button>
        </div>
           
        <div class="card">
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Example category data, replace with dynamic data from API -->
                        <tr v-for="category in categories" :key="category.id">
                            <td>{{ category.id }}</td>
                            <td>{{ category.name }}</td>
                            <td>{{ category.description }}</td>
                            <td>
                                <!-- Action buttons for editing and deleting categories -->
                                <button class="btn btn-sm btn-primary me-2">Edit</button>
                                <button class="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- Pagination controls (if needed) -->
                <nav aria-label="Page navigation example">
                    <ul class="pagination"></ul>
                </nav>
            </div>
        </div>
        <!-- Add New Category Modal (optional) -->
        <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addCategoryModalLabel">Add New Category</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="categoryName" class="form-label">Category Name</label>
                                <input type="text" class="form-control" id="categoryName" placeholder="Enter category name">
                            </div>
                            <div class="mb-3">
                                <label for="categoryDescription" class="form-label">Category Description</label>
                                <textarea class="form-control" id="categoryDescription" rows="3" placeholder="Enter category description"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Save Category
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script setup>

import { ref,onMounted } from 'vue';
import axios from 'axios';
// Example category data, replace with API call to fetch categories
const categories = ref([]);
onMounted(() => {
  // Fetch categories from API and populate the categories ref
 axios.get('http://127.0.0.1:8000/api/categories').then(response => { categories.value = response.data; });
});
</script>