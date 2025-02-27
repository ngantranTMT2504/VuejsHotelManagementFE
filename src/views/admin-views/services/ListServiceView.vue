<template>
    <main>
        <div class="py-3 mb-3">
            <div class="button-add mb-2">
                <RouterLink to="/admin/services-management/create-service" class="button-primary">
                    <i class="bi bi-plus-square me-1"></i>
                    Add Service 
                </RouterLink>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center gap-4 w-50 mb-3">
            <input type="text" class="form-control w-100" v-model="searchQuery" placeholder="Search by name">
            <div class="icons">
                <a href="">
                    <i class="bi bi-sort-down-alt fs-4 text-dark"></i>
                   
                </a>
            </div>
        </div>
        <div class="list-user">
            <table class="table-design w-100">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col" style="width: 150px">Name</th>
                        <th scope="col" style="width: 150px">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col" class="">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="service in filteredServices">
                        <td>{{ service?.id }}</td>
                        <td>{{ service?.name }}</td>
                        <td>{{ service?.price }}</td>
                        <td>{{ service?.description }}</td>
                        <td>
                            <img :src="service?.imageService" alt="" width="100px" height="80px">
                        </td>
                        <td>
                            <div class="action btn d-flex gap-4">
                                <a href="" @click="editService(service?.id)" class="btn btn-warning text-dark px-2 py-1 rounded"><i
                                        class="bi bi-pencil"></i></a>
                                <a href="" @click="deleteTypeRoom(service?.id)" class="btn btn-danger text-light px-2 py-1 rounded"><i
                                        class="bi bi-trash"></i></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example" class="d-flex justify-content-center">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>
<script setup>
import { ref, onMounted , computed} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const services= ref([])
const searchQuery = ref("");
const router = useRouter();

const API_GETALL = "http://localhost:5287/api/Service/GetServices"
const API_DELETE = "http://localhost:5287/api/Service/DeleteService/"

const serviceList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        services.value = response.data
    } catch (error) {
        console.log("Lỗi!" + error);
    }
}

const filteredServices = computed(() => {
    return services.value.filter(service =>
        service.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const editService = (id) => {
    router.push(`/admin/services-management/edit-service/${id}`);
}

const deleteTypeRoom = (id) => {
    const _confirm = confirm("Bạn có chắc muốn xóa không?");
    if(_confirm) {
        try {
            axios.delete(API_DELETE + `${id}`)
            alert("Xóa thành công")
            serviceList()
        } catch (error) {
            console.log("Lỗi!" + error);
        }
    }
}

onMounted(serviceList)
</script>
<style>
</style>