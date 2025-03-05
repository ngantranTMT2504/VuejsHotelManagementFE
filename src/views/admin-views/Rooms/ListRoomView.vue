<template>
    <main>
        <div class="py-3 mb-2">
            <div>
                <RouterLink to="/admin/rooms-management/create-room" class="button-primary px-3">
                    <i class="bi bi-plus-square me-1"></i>
                    Add Room
                </RouterLink>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center gap-4 w-50 mb-3">
            <input type="text" class="form-control w-100" v-model="searchQuery"
                placeholder="Search by room number or type">
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
                        <th scope="col">Room number</th>
                        <th scope="col">Type Room</th>
                        <th scope="col">Status</th>
                        <th scope="col" class="">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="room in VisiblePagenation">
                        <td>{{ room?.id }}</td>
                        <td>{{ room?.numberRoom }}</td>
                        <td>{{ room?.typeRoom?.name }}</td>
                        <td>{{ room?.statusName }}</td>
                        <td>
                            <div class="action btn d-flex gap-4">
                                <a @click="editRoom(room.id)" class="btn btn-warning text-dark px-2 py-1 rounded"><i
                                        class="bi bi-pencil"></i></a>
                                <a @click="deleteRoom(room.id)" class="btn btn-danger text-light px-2 py-1 rounded"><i
                                        class="bi bi-trash"></i></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="VisiblePagenation.length <= 0">
                <p class="text-danger text-center py-2">There are no rooms yet</p>
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

const rooms = ref([]);
const searchQuery = ref("");
const router = useRouter();

const API_GETALL = "http://localhost:5287/api/Room/GetRooms"
const API_DELETE = "http://localhost:5287/api/Room/DeleteRoom/"

//Get all rooms
const roomList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        console.log(response.data);
        rooms.value = response.data.reverse();
        //status of room
        if (rooms.value[0] !== null) {
            rooms.value.forEach(element => {
                switch (element?.status) {
                    case 0:
                        element.statusName = "Available";
                        break;
                    case 1:
                        element.statusName = "Occupied";
                        break;
                    case 2:
                        element.statusName = "Maintenance";
                        break;
                    case 3:
                        element.statusName = "NeedsCleaning";
                        break;
                    default:
                        element.statusName = "None";
                        break;
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
}
onMounted(roomList)

//search by number and type room
const filteredRooms = computed(() => {
    return rooms.value.filter(room =>
        room.numberRoom.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        room.typeRoom?.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

//Pass id room to edit page
const editRoom = (id) => {
    router.push(`/admin/rooms-management/edit-room/${id}`);
}

//delete room
const deleteRoom = async (id) => {
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
                await roomList();
            } catch (error) {
                console.error("Lỗi!", error);
                Swal.fire("Lỗi!", "Có lỗi xảy ra khi xóa.", "error");
            }
        }
    });
};

//pagination 
const itemPerPage = ref(4);
const currentPage = ref(1);

const changePage = (page) => {
    if (page >= 1 && page <= totalPage.value) {
        currentPage.value = page
    }
}

const VisiblePagenation = computed(() => {
    const startPage = (currentPage.value - 1) * itemPerPage.value;
    const endPage = startPage + itemPerPage.value;
    return filteredRooms.value.slice(startPage, endPage)
})

const totalPage = computed(() => {
    return Math.ceil(filteredRooms.value.length / itemPerPage.value);
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