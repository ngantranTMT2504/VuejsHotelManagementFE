<template>
    <main>
        <div class="py-1 mb-3">
            <div class="button-add mb-2">
                <RouterLink to="/admin/users/create-user" class="btn btn-success">Add User</RouterLink>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center gap-4 w-50 mb-3">
            <input type="text" class="form-control w-100" placeholder="Search users">
            <button class="btn btn-primary me-2">Search</button>
        </div>
        <div class="list-user">
            <table class="table table-striped">
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
                        <th scope="col">Status</th>
                        <th scope="col" class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.ID">
                        <td>{{ user.ID }}</td>
                        <td>{{ user.Email }}</td>
                        <td>{{ user.Phone }}</td>
                        <td>{{ user.FullName }}</td>
                        <td>{{ user.DateOfBirth }}</td>
                        <td>{{ user.Gender }}</td>
                        <td>{{ user.AddressClient }}</td>
                        <td>{{ user.Role }}</td>
                        <td>{{ user.Status }}</td>
                        <td>
                            <div class="action btn d-flex gap-4">
                                <a href="" class="btn btn-warning text-dark px-2 py-1 rounded"><i
                                        class="bi bi-pencil"></i></a>
                                <a href="" class="btn btn-danger text-light px-2 py-1 rounded"><i
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
import { ref } from 'vue';

const users = ref([
    {
        ID: 1,
        PasswordHash: "abc123",
        Email: "user1@example.com",
        Phone: "0123456789",
        FullName: "Nguyễn Văn A",
        DateOfBirth: "1990-05-10",
        Gender: "Male",
        AddressClient: "Hà Nội, Việt Nam",
        CreatedDate: "2024-02-14",
        Role: "Admin",
        Status: "Active",
    },
    {
        ID: 2,
        PasswordHash: "xyz789",
        Email: "user2@example.com",
        Phone: "0987654321",
        FullName: "Trần Thị B",
        DateOfBirth: "1995-08-20",
        Gender: "Female",
        AddressClient: "Hồ Chí Minh, Việt Nam",
        CreatedDate: "2024-02-14",
        Role: "User",
        Status: "Inactive",
    },
    {
        ID: 3,
        PasswordHash: "p@ssw0rd",
        Email: "user3@example.com",
        Phone: "0933222111",
        FullName: "Lê Văn C",
        DateOfBirth: "1988-11-30",
        Gender: "Male",
        AddressClient: "Đà Nẵng, Việt Nam",
        CreatedDate: "2024-02-14",
        Role: "User",
        Status: "Active",
    },
    {
        ID: 4,
        PasswordHash: "secure@2024",
        Email: "user4@example.com",
        Phone: "0909777666",
        FullName: "Phạm Thị D",
        DateOfBirth: "1992-07-15",
        Gender: "Female",
        AddressClient: "Cần Thơ, Việt Nam",
        CreatedDate: "2024-02-14",
        Role: "Moderator",
        Status: "Active",
    },
    {
        ID: 5,
        PasswordHash: "test123",
        Email: "user5@example.com",
        Phone: "0912345678",
        FullName: "Hoàng Văn E",
        DateOfBirth: "1985-03-25",
        Gender: "Male",
        AddressClient: "Vĩnh Long, Việt Nam",
        CreatedDate: "2024-02-14",
        Role: "User",
        Status: "Banned",
    },
    {
        ID: 6,
        PasswordHash: "test123",
        Email: "user5@example.com",
        Phone: "0912345678",
        FullName: "Hoàng Văn E",
        DateOfBirth: "1985-03-25",
        Gender: "Male",
        AddressClient: "Vĩnh Long, Việt Nam",
        CreatedDate: "2024-02-14",
        Role: "User",
        Status: "Banned",
    },
    {
        ID: 7,
        PasswordHash: "test123",
        Email: "user5@example.com",
        Phone: "0912345678",
        FullName: "Hoàng Văn E",
        DateOfBirth: "1985-03-25",
        Gender: "Male",
        AddressClient: "Vĩnh Long, Việt Nam",
        CreatedDate: "2024-02-14",
        Role: "User",
        Status: "Banned",
    }
])
</script>
<style></style>