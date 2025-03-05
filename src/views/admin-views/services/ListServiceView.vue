<template>
    <main>
        <div class="py-3 mb-2">
            <div class="button-add">
                <RouterLink to="/admin/services-management/create-service" class="button-primary px-3">
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
                        <th scope="col" style="width: 250px">Name</th>
                        <th scope="col" style="width: 250px">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col" class="">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="service in VisiblePagenation">
                        <td>{{ service?.id }}</td>
                        <td>{{ service?.name }}</td>
                        <td>{{ formatPrice(service?.price) }}</td>
                        <td>
                            <img :src="service?.imageService" alt="" width="120px" height="100px">
                        </td>
                        <td>
                            <div class="action btn d-flex gap-4">
                                <a @click="editService(service?.id)"
                                    class="btn btn-warning text-dark px-2 py-1 rounded"><i class="bi bi-pencil"></i></a>
                                <a @click="DeleteService(service?.id)"
                                    class="btn btn-danger text-light px-2 py-1 rounded"><i class="bi bi-trash"></i></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="VisiblePagenation.length <= 0">
                <p class="text-danger text-center py-2">There are no service yet</p>
            </div>
            <!-- Phân trang -->
            <nav aria-label="Page navigation" class="d-flex justify-content-center mt-3"
                v-if="VisiblePagenation.length > 0 ">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" @click="changePage(currentPage - 1)"
                            :disabled="currentPage == 1">&laquo;</button>
                    </li>
                    <li class="page-item" v-for="pageNumber in VisiblePageNumbers"
                        :class="{ active: currentPage == pageNumber || currentPage == '...' }">
                        <button class="page-link" @click=" changePage(pageNumber)"> {{ pageNumber }}</button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" @click="changePage(currentPage + 1)"
                            :disabled='currentPage === totalPage.value'>&raquo;</button>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const services = ref([])
const searchQuery = ref("");
const router = useRouter();
const API_GETALL = "http://localhost:5287/api/Service/GetServices"
const API_DELETE = "http://localhost:5287/api/Service/DeleteService/"

//Get all service list
const serviceList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        services.value = response.data.reverse();
    } catch (error) {
        console.log("Lỗi!" + error);
    }
}
onMounted(serviceList)

//format price
const formatPrice = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

//search by name
const filteredServices = computed(() => {
    return services.value.filter(service =>
        service.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

//Pass id service to edit page
const editService = (id) => {
    router.push(`/admin/services-management/edit-service/${id}`);
}

//delete service
const DeleteService = async (id) => {
    Swal.fire({
        title: "Bạn có chắc muốn xóa?",
        text: "Hành động này không thể hoàn tác!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy"
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await axios.delete(API_DELETE + `${id}`);
                Swal.fire("Đã xóa!", "Dữ liệu đã được xóa thành công.", "success");
                await serviceList();
            } catch (error) {
                console.error("Lỗi!", error);
                Swal.fire("Lỗi!", "Có lỗi xảy ra khi xóa.", "error");
            }
        }
    });
};

//pagination 
const itemPerPage = ref(3);
const currentPage = ref(1);

const changePage = (page) => {
    if (page >= 1 && page <= totalPage.value) {
        currentPage.value = page
    }
}

const VisiblePagenation = computed(() => {
    const startPage = (currentPage.value - 1) * itemPerPage.value;
    const endPage = startPage + itemPerPage.value;
    return filteredServices.value.slice(startPage, endPage)
})

const totalPage = computed(() => {
    return Math.ceil(filteredServices.value.length / itemPerPage.value);
})

const VisiblePageNumbers = computed(() => {
    let pageNumbers = []
    if (totalPage.value <= 7) {
        for (let i = 1; i <= totalPage.value; i++) {
            pageNumbers.push(i)
        }
    } else {
        if (currentPage <= 4) {
            pageNumbers = [1, 2, 3, 4, 5, "...", totalPage.value]
        } else if (currentPage >= totalPage.value - 3) {
            pageNumbers = [1, "...", totalPage.value - 4, totalPage.value - 3, totalPage.value - 2, totalPage.value - 1, totalPage.value]
        } else {
            pageNumbers = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", + totalPage.value]
        }
    }
    return pageNumbers;
})
</script>
<style></style>