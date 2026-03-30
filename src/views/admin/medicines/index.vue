<template>
    <!-- Admin Medicines mangement-->
     <div class="container mt-5">
        <h1 class="text-center mb-4">Medicine Management</h1>
        <div class="card">
            <!-- Button to add a new medicine -->
            <div class="card-header"></div>
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addMedicineModal">
                    Add New Medicine
                </button>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Example medicine data, replace with dynamic data from API -->
                        <tr v-for="medicine in medicines.data" :key="medicine.id">
                            <td>{{ medicine.id }}</td>
                            <td>{{ medicine.name }}</td>
                            <td>{{ medicine.description }}</td>
                            <td>{{ medicine.price }}</td>
                            <td>
                                <!-- Action buttons for editing and deleting medicines -->
                                <button class="btn btn-sm btn-primary me-2">Edit</button>
                                <button class="btn btn-sm btn-danger" @click="deleteMedicine(medicine.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- Pagination controls (if needed) -->
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled"  >
                             <button
                                class="btn btn-primary me-2"
                                :disabled="currentPage === 1"
                                @click="fetchProducts(currentPage - 1)"
                                >Previous</button>
                        </li>
          
                        <li class="page-item" :disabled="currentPage === totalPages"
                       >
                            <button
                                class="btn btn-primary"
                                :disabled="currentPage === totalPages"
                                @click="fetchProducts(currentPage + 1)"
                                >Next</button>
                        </li>
                       
                    </ul>
                </nav>
            </div>
        </div>
        <!-- Add New Medicine Modal (optional) -->
        <div class="modal fade" id="addMedicineModal" tabindex="-1" aria-labelledby="addMedicineModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addMedicineModalLabel">Add New Medicine</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="medicineName" class="form-label">Medicine Name</label>
                                <input type="text" class="form-control" id="medicineName" placeholder="Enter medicine name">
                            </div>
                            <div class="mb-3">
                                <label for="medicineDescription" class="form-label">Medicine Description</label>
                                <textarea class="form-control" id="medicineDescription" rows="3" placeholder="Enter medicine description"></textarea>
                            </div>
                            <div class="mb-3">

                                <label for="medicinePrice" class="form-label">Medicine Price</label>
                                <input type="text" class="form-control" id="medicinePrice" placeholder="Enter medicine price">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Save Medicine
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
// prepage and total page for pagination
const currentPage = ref(1);
const totalPages = ref(0);
const medicines = ref([]);

onMounted(() => {
  // Fetch medicines from API and populate the medicines ref
    fetchProducts(currentPage.value);

});
/*
 axios.get('http://127.0.0.1:8000/api/medicines?page=${page}&per_page=10').then(response => {
     medicines.value = response.data;
    totalPages.value = response.data.total_pages; // Assuming the API returns total pages
    currentPage.value = response.data.current_page; // Assuming the API returns current page


    
    });*/
async function fetchProducts(page = 1) {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/medicines?page=${page}&per_page=9`);
      medicines.value = response.data;
      totalPages.value = response.data.total_pages;
      currentPage.value = response.data.current_page;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  function deleteMedicine(id) {
    // Implement the logic to delete a medicine
    axios.delete(`http://127.0.0.1:8000/api/medicines/${id}`)
      .then(() => {
        // Remove the deleted medicine from the list
        medicines.value = medicines.value.filter(medicine => medicine.id !== id);
      })
      .catch(error => {
        console.error('Error deleting medicine:', error);
      });
  }


</script>