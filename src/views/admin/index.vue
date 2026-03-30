<template>
    <div class="container mt-5">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard. Here you can manage your application.</p>
    
        <!-- Add more admin functionalities here -->
        <div class="card mt-4">
        <div class="card-body">
            <h5 class="card-title">User Management</h5>
            <p class="card-text">Manage users, roles, and permissions.</p>
            <router-link to="/admin/users" class="btn btn-primary">Go to User Management</router-link>
        </div>
        </div>
        <!--Medicine mangement-->
        <div class="card mt-4">
        <div class="card-body">
            <h5 class="card-title">Medicine Management</h5>
            <p class="card-text">Manage medicines, categories, and inventory.</p>
            <router-link to="/admin/medicines"  class="btn btn-primary">Go to Medicine Management</router-link>
        </div>
        </div>
        <!--Order mangement-->
        <div class="card mt-4">
        <div class="card-body">
            <h5 class="card-title">Order Management</h5>
            <p class="card-text">Manage customer orders, track shipments, and handle returns.</p>
            <router-link to="/admin/orders" class="btn btn-primary">Go to Order Management</router-link>
        </div>
        </div>
         <!--Category mangement-->
         <div class="card mt-4">
        <div class="card-body">
            <h5 class="card-title">Category Management</h5>
            <p class="card-text">Manage medicine categories and classifications.</p>
            <router-link to="/admin/categories" class="btn btn-primary">Go to Category Management</router-link>
        </div>
    
        <div class="card mt-4">
        <div class="card-body">
            <h5 class="card-title">Content Management</h5>
            <p class="card-text">Manage articles, categories, and media.</p>
            <a href="#" class="btn btn-primary">Go to Content Management</a>
        </div>
        </div>
    
        <div class="card mt-4">
        <div class="card-body">
            <h5 class="card-title">Settings</h5>
            <p class="card-text">Configure application settings and preferences.</p>
            <a href="#" class="btn btn-primary">Go to Settings</a>
        </div>
        </div>
        <div class="card mt-4">
        <div class="card-body">
            <h5 class="card-title">Analytics</h5>
            <p class="card-text">View application analytics and reports.</p>
            <a href="#" class="btn btn-primary">Go to Analytics</a>

        </div>
    </div>
    </div>
    </div>
</template>