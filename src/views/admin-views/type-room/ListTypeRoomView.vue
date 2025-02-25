<template>
        <main>
            <div class="py-1 mb-3">
                <div class="button-add mb-2">
                    <RouterLink to="/admin/type-rooms/create-type-room" class="btn btn-success">Add Type Room</RouterLink>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center gap-4 w-50 mb-3">
                <input type="text" class="form-control w-100" placeholder="Search tyle room">
                <button class="btn btn-primary me-2">Search</button>
            </div>
            <div class="list-user">
                <table class="table table-striped">
                    <thead class="table-primary">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Type Name</th>
                            <th scope="col">Price per night</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">description</th>
                            <th scope="col">image</th>
                            <th scope="col" class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="type in typeRooms ">
                            <td>{{ type?.id }}</td>
                            <td>{{ type?.name }}</td>
                            <td>{{ type?.price }}</td>
                            <td>{{ type?.capacity }}</td>
                            <td>{{ type?.description }}</td>
                            <td>
                                <img :src="type?.imageRoom" alt="" width="100px" height="100px">
                            </td>
                            <td>
                                <div class="action btn d-flex gap-4">
                                    <a href="" @click="editTypeRoom(type.id)" class="btn btn-warning text-dark px-2 py-1 rounded"><i
                                            class="bi bi-pencil"></i></a>
                                    <a href="" @click="deleteTypeRoom(type.id)" class="btn btn-danger text-light px-2 py-1 rounded"><i
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
                            <a  class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const typeRooms = ref({
    id: null,
    name: "",
    price: null,
    capacity: null,
    description: "",
    imageRoom: ""
})

const router = useRouter();

const API_GETALL = "http://localhost:5287/api/TypeRoom/GetTypeRooms"
const API_DELETE = "http://localhost:5287/api/TypeRoom/DeleteTypeRoom/"

const typeRoomList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        typeRooms.value = response.data
    } catch (error) {
        console.log("Lỗi!" + error);
    }
}

const editTypeRoom = (id) => {
    router.push(`/admin/type-rooms/edit-type-room/${id}`);
}

const deleteTypeRoom = (id) => {
    const _confirm = confirm("Bạn có chắc muốn xóa không?");
    if(_confirm) {
        try {
            axios.delete(API_DELETE + `${id}`)
            alert("Xóa thành công")
            typeRoomList()
        } catch (error) {
            console.log("Lỗi!" + error);
        }
    }
}

onMounted(typeRoomList)

</script>
<style>
</style>