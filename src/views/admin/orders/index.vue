<template>
    <!--Admin order mangement-->
    <div class="container mt-5">
        <h1 class="text-center mb-4">Order Management</h1>
        <div class="card">
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Example order data, replace with dynamic data from API -->
                        <tr v-for="order in orders" :key="order.id">
                            <td>{{ order.id }}</td>
                            <td>{{ order.customerName }}</td>
                            <td>{{ order.totalAmount }}</td>
                            <td>{{ order.status }}</td>
                            <td>
                                <!-- Action buttons for editing and deleting orders -->
                                <button class="btn btn-sm btn-primary me-2">Edit</button>
                                <button class="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- Pagination controls (if needed) -->
                <nav aria-label="Page navigation example">
                    <ul class="pagination>">
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
// Example order data, replace with API call to fetch orders
const orders = ref([
    { id: 1, customerName: 'John Doe', totalAmount: '$100', status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', totalAmount: '$150', status: 'Completed' },
    { id: 3, customerName: 'Bob Johnson', totalAmount: '$80', status: 'Cancelled' },
]);
</script>