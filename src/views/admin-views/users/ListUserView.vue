<template>
    <main>
        
        <div class="mt-5 d-flex justify-content-between align-items-center gap-4 w-50 mb-3">
            <input type="text" class="form-control w-100" placeholder="Search by email or sdt" v-model="searchQuery">
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
                        <th scope="col">STT</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Fullname</th>
                        <th scope="col">Date of birth</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                        <th scope="col">Role</th>
                        <th scope="col" class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in VisiblePagenation" :key="user.id">
                        <td height="50px">{{ index + 1 }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phoneNumber }}</td>
                        <td>{{ user.fullName }}</td>
                        <td>{{ user.dateOfBirth }}</td>
                        <td>{{ user.Gender }}</td>
                        <td>{{ user.address }}</td>
                        <td>{{ user.role }}</td>
                        <td>
                            <div v-if="user.role == 'User'" class="action btn ">
                                <a @click="deleteUser(user.userName)" class="btn btn-danger text-dark px-2 py-1 rounded">Unactive</a>
                               
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
import {onMounted, ref , computed} from 'vue';
import apiClient from "@/services/axiosMiddleware.js";
import Swal from "sweetalert2";

const users = ref([])
const API_GETALL = "/Admin/GetUsers";
const API_DELETE = "/Admin/DeleteUser";
const searchQuery = ref("")

const getUsersList = async () => {
  try {
    const response = await apiClient.get(API_GETALL);
    users.value = response.data.reverse();
  } catch (error) {
    console.error("Lỗi!", error);
  }
};
const deleteUser = async (id) => {
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
        await apiClient(API_DELETE + `/${id}`, {
          method: "DELETE",
        });
        await Swal.fire("Đã xóa!", "Dữ liệu đã được xóa thành công.", "success");
        await getUsersList();
      } catch (error) {
        console.error("Lỗi!", error);
        await Swal.fire("Lỗi!", "Có lỗi xảy ra khi xóa.", "error");
      }
    }
  });
};

onMounted(getUsersList);

//Search by key word
const filteredUser = computed(() => {
    return users.value.filter(user =>
        user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

//Pagination
const itemPerPage = ref(5);
const currentPage = ref(1);

const changePage = (page) => {
    if (page >= 1 && page <= totalPage.value) {
        currentPage.value = page
    }
}

const VisiblePagenation = computed(() => {
    const startPage = (currentPage.value - 1) * itemPerPage.value;
    const endPage = startPage + itemPerPage.value;
    return filteredUser.value.slice(startPage, endPage)
})

const totalPage = computed(() => {
    return Math.ceil(filteredUser.value.length / itemPerPage.value);
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