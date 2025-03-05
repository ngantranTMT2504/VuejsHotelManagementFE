<template>
    <main>
        <div class="py-3 mb-2">
            <div>
                <RouterLink to="/admin/type-rooms/create-type-room" class="button-primary px-3">
                    <i class="bi bi-plus-square me-1"></i>
                    Add Type Room
                </RouterLink>
            </div>
        </div>
        <!-- Thanh tìm kiếm -->
        <div class="d-flex justify-content-between align-items-center gap-4 w-50 mb-3">
            <input type="text" class="form-control w-100" v-model="searchQuery" placeholder="Search by name">
            <div class="icons">
                <a href="#">
                    <i class="bi bi-sort-down-alt fs-4 text-dark"></i>
                </a>
            </div>
        </div>
        <!-- Bảng danh sách loại phòng -->
        <div class="list-user">
            <table class="table-design w-100">
                <thead>
                    <tr style="height: 50px">
                        <th scope="col" style="width: 55px">ID</th>
                        <th scope="col" style="width: 200px">Type Name</th>
                        <th scope="col" style="width: 250px">Price per night</th>
                        <th scope="col" style="width: 250px">Capacity</th>

                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="type in VisiblePagenation" :key="type.id">
                        <td>{{ type?.id }}</td>
                        <td>{{ type?.name }}</td>
                        <td>{{ formatPrice(type?.price) }}</td>
                        <td>{{ type?.capacity }}</td>

                        <td>
                            <img :src="type?.imageRoom" alt="Room Image" width="120" height="100">
                        </td>
                        <td class="text-center">
                            <div class="d-flex gap-2">
                                <button @click="editTypeRoom(type.id)"
                                    class="btn btn-warning text-dark px-2 py-1 rounded">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button @click="deleteTypeRoom(type.id)"
                                    class="btn btn-danger text-light px-2 py-1 rounded">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="VisiblePagenation.length <= 0">
                <p class="text-danger text-center py-2">There are no type rooms yet</p>
            </div>
            <!-- Phân trang -->
            <nav aria-label="Page navigation" class="d-flex justify-content-center mt-3"
                v-if="VisiblePagenation.length > 0">
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
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from "sweetalert2";

const typeRooms = ref([]);
const searchQuery = ref("");
const router = useRouter();
const API_GETALL = "http://localhost:5287/api/TypeRoom/GetTypeRooms";
const API_DELETE = "http://localhost:5287/api/TypeRoom/DeleteTypeRoom/";

//Get list type room
const typeRoomList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        typeRooms.value = response.data.reverse();
    } catch (error) {
        console.error("Lỗi!", error);
    }
};
onMounted(typeRoomList);

//Format price
const formatPrice = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

//Search by key word
const filteredTypeRooms = computed(() => {
    return typeRooms.value.filter(room =>
        room.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

//Pass id to edit page
const editTypeRoom = (id) => {
    router.push(`/admin/type-rooms/edit-type-room/${id}`);
};

//Delete type room
const deleteTypeRoom = async (id) => {
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
                await typeRoomList();
            } catch (error) {
                console.error("Lỗi!", error);
                Swal.fire("Lỗi!", "Có lỗi xảy ra khi xóa.", "error");
            }
        }
    });
};

//Pagination
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
    return filteredTypeRooms.value.slice(startPage, endPage)
})

const totalPage = computed(() => {
    return Math.ceil(filteredTypeRooms.value.length / itemPerPage.value);
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

<style>
.table-design tbody tr:hover {
    background-color: #ddd;
}

.table-design thead {
    background-color: var(--primary-color);
    color: var(--secondary-color);

}

.table-design thead th,
.table-design td {
    padding: 8px;

}

.button-primary {
    display: inline-block;
    border-radius: 25px;
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    padding: 10px;
    font-weight: 600;
    color: var(--secondary-color);
    text-decoration: none;
    transition: 0.3s ease-in;
}

.button-primary:hover {
    background-color: white;
    color: var(--primary-color);
}

.pagination .page-item button {
    border: none;
    background: white;
    padding: 6px 12px;
    cursor: pointer;
    color: var(--primary-color)
}

.pagination .page-item button:hover {
    background: var(--primary-color);
    color: var(--secondary-color);
}

.pagination .page-item .active {
    background: #31365a;
}
</style>
