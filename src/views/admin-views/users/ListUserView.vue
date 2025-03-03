<template>
    <main>
        
        <div class="mt-5 d-flex justify-content-between align-items-center gap-4 w-50 mb-3">
            <input type="text" class="form-control w-100" placeholder="Search by email or sdt">
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
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phoneNumber }}</td>
                        <td>{{ user.fullName }}</td>
                        <td>{{ user.dateOfBirth }}</td>
                        <td>{{ user.Gender }}</td>
                        <td>{{ user.address }}</td>
                        <td>{{ user.role }}</td>
                        <td>
                            <div v-if="user.role == 'User'" class="action btn ">
                                <a @click="deleteUser(user.userName)" class="btn btn-danger text-dark px-2 py-1 rounded">Delete</a>
                               
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
import {onMounted, ref} from 'vue';
import apiClient from "@/services/axiosMiddleware.js";
import Swal from "sweetalert2";
import axios from "axios";

const users = ref([])
const API_GETALL = "/Admin/GetUsers";
const API_DELETE = "/Admin/DeleteUser";

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
</script>
<style></style>