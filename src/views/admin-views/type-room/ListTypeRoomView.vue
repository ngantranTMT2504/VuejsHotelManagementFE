<template>
    <main>
        <div class="py-3 mb-3">
            <div class="mb-2">
                <RouterLink to="/admin/type-rooms/create-type-room" class="button-primary">
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
        <div class="list-user mb-5">
            <table class="table-design w-100">
                <thead >
                    <tr style="height: 50px">
                        <th scope="col" style="width: 35px">ID</th>
                        <th scope="col" style="width: 150px">Type Name</th>
                        <th scope="col" style="width: 150px">Price per night</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col" class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="type in filteredTypeRooms" :key="type.id">
                        <td>{{ type?.id }}</td>
                        <td>{{ type?.name }}</td>
                        <td>{{ formatPrice(type?.price) }}</td>
                        <td>{{ type?.capacity }}</td>
                        <td>{{ type?.description }}</td>
                        <td>
                            <img :src="type?.imageRoom" alt="Room Image" width="100" height="80">
                        </td>
                        <td class="text-center">
                            <div class="d-flex gap-2">
                                <button @click="editTypeRoom(type.id)" class="btn btn-warning text-dark px-2 py-1 rounded">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button @click="deleteTypeRoom(type.id)" class="btn btn-danger text-light px-2 py-1 rounded">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Phân trang -->
            <nav aria-label="Page navigation example" class="d-flex justify-content-center">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link">&laquo;</button>
                    </li>
                    <li class="page-item"><button class="page-link">1</button></li>
                    <li class="page-item"><button class="page-link">2</button></li>
                    <li class="page-item"><button class="page-link">3</button></li>
                    <li class="page-item">
                        <button class="page-link">&raquo;</button>
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

const typeRooms = ref([]);
const searchQuery = ref("");
const router = useRouter();

const API_GETALL = "http://localhost:5287/api/TypeRoom/GetTypeRooms";
const API_DELETE = "http://localhost:5287/api/TypeRoom/DeleteTypeRoom/";

const typeRoomList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        typeRooms.value = response.data.reverse();
    } catch (error) {
        console.error("Lỗi!", error);
    }
};

const formatPrice = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

const filteredTypeRooms = computed(() => {
    return typeRooms.value.filter(room =>
        room.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const editTypeRoom = (id) => {
    router.push(`/admin/type-rooms/edit-type-room/${id}`);
};

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
  }).then( async (result) => {
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



onMounted(typeRoomList);
</script>

<style>
.table-design tbody tr:hover {background-color: #ddd;}
.table-design thead{
    background-color: var(--primary-color);
    color: var(--secondary-color);
    
}
.table-design thead th, .table-design td {
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
    background-color:white ;
    color: var(--primary-color);
}

.pagination .page-item button {
    border: none;
    background: transparent;
    padding: 6px 12px;
    cursor: pointer;
    color: var(--primary-color)
}

.pagination .page-item button:hover {
    background: #ddd;
    border-radius: 5px;
}
</style>
