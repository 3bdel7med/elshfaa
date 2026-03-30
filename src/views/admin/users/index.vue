<template>
<!-- user page get users and control of roles and permitions-->
 <div>
    <h1 class="text-center my-4">User Management</h1>
    <div class="card">
        <div class="card-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Example user data, replace with dynamic data from API -->
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.role }}</td>
                        <td>
                            <!-- Action buttons for editing and deleting users -->
                            <button class="btn btn-sm btn-primary me-2">Edit</button>
                            <button class="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Pagination controls (if needed) -->
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>

        </div>
 </div>
 </div>
       
</template>
<script setup>
import { ref } from 'vue';
// Example user data, replace with API call to fetch users
const users = ref([
    { id: 1, name: 'John Doe', email: 'm@m.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: '', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: '', role: 'User' },    
]);


</script>