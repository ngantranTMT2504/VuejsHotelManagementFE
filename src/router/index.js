import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/client-views/HomeView.vue";
import AboutView from "@/views/client-views/AboutView.vue";
import RoomView from "@/views/client-views/RoomView.vue";
import ServiceView from "@/views/client-views/ServiceView.vue";
import GalleryView from "@/views/client-views/GalleryView.vue";
import BlogView from "@/views/client-views/BlogView.vue";
import ContactView from "@/views/client-views/ContactView.vue";
import LoginView from "@/views/client-views/LoginView.vue";
import RegisterView from "@/views/client-views/RegisterView.vue";
import BookingView from "@/views/client-views/BookingView.vue";
import AdminDashboardView from "@/views/admin-views/DashboardView.vue";
import UsersView from "@/views/admin-views/users/UsersView.vue";
import TypeRoomView from "@/views/admin-views/type-room/TypeRoomView.vue";
import ServiceManageView from "@/views/admin-views/services/ServiceManageView.vue";
import RoomManageView from "@/views/admin-views/Rooms/RoomManageView.vue";
import ApprovedBookingView from "@/views/admin-views/ApprovedBookingView.vue";
import AdminLayoutView from "@/views/admin-views/AdminLayoutView.vue";
import CreateUserView from "@/views/admin-views/users/CreateUserView.vue";
import EditUserView from "@/views/admin-views/users/EditUserView.vue";
import ListUserView from "@/views/admin-views/users/ListUserView.vue";
import CreateTypeRoomView from "@/views/admin-views/type-room/CreateTypeRoomView.vue";
import EditTypeRoomView from "@/views/admin-views/type-room/EditTypeRoomView.vue";
import ListTypeRoomView from "@/views/admin-views/type-room/ListTypeRoomView.vue";
import ListServiceView from "@/views/admin-views/services/ListServiceView.vue";
import CreateServiceView from "@/views/admin-views/services/CreateServiceView.vue";
import EditServiceView from "@/views/admin-views/services/EditServiceView.vue";
import ListRoomView from "@/views/admin-views/Rooms/ListRoomView.vue";
import EditRoomView from "@/views/admin-views/Rooms/EditRoomView.vue";
import CreateRoomView from "@/views/admin-views/Rooms/CreateRoomView.vue";
import NotFoundView from "@/views/NotFoundView.vue"
import BookingDetailView from "@/views/client-views/BookingDetailView.vue";
import {Role, TOKEN} from "@/utils/constants.js";
import {jwtDecode} from "jwt-decode";
import Swal from "sweetalert2";
import axios from "axios";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    { 
      path: "/:pathMatch(.*)*", 
      name: "NotFound", 
      component: NotFoundView, 
      meta: { hideLayout: true }
    }, // Trang 404
    {
      path: "/login",
      name: "login",
      component: LoginView,
      beforeEnter: (to, from) => {
        if (sessionStorage.getItem(TOKEN)) {
          return '/admin';
        }
      },
      meta: { hideLayout: true },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: { hideLayout: true },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/room",
      name: "room",
      component: RoomView,
    },
    {
      path: "/service",
      name: "service",
      component: ServiceView,
    },

    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/booking",
      name: "booking",
      component: BookingView,
      meta: { role: 'User', requiresAuth: true },
    },
    {
      path: "/booking-detail",
      name: "booking detail",
      component: BookingDetailView,
    },
    {
      path: "/admin",
      component: AdminLayoutView,
      meta: { hideLayout: true, requiresAuth: true, role: 'Admin' },
      redirect: "/admin/dashboard",
      // meta: { requiresAuth: true, role: 'admin' },
      children: [
        { path: "dashboard", component: AdminDashboardView },
        {
          path: "users",
          component: UsersView,
          redirect: "/admin/users/list-user",
          children: [
            {
              path: "create-user",
              name: "CreateUser",
              component: CreateUserView,
            },
            {
              path: "list-user",
              name: "ListUser",
              component: ListUserView,
            },
            {
              path: "edit-user/:id", // Thêm tham số ID cho edit
              name: "EditUser",
              component: EditUserView,
              props: true, // Kích hoạt props để nhận id từ URL
            },
          ],
        },
        {
          path: "type-rooms",
          component: TypeRoomView,
          redirect: "/admin/type-rooms/list-type-room",
          children: [
            {
              path: "create-type-room",
              name: "CreateTypeRoom",
              component: CreateTypeRoomView,
            },
            {
              path: "list-type-room",
              name: "ListTypeRoom",
              component: ListTypeRoomView,
            },
            {
              path: "edit-type-room/:id", // Thêm tham số ID cho edit
              name: "EditTypeRoomView",
              component: EditTypeRoomView,
              props: true, // Kích hoạt props để nhận id từ URL
            },
          ],
        },
        {
          path: "services-management",
          component: ServiceManageView,
          redirect: "/admin/services-management/list-service",
          children: [
            {
              path: "list-service",
              name: "ListService",
              component: ListServiceView,
            },
            {
              path: "create-service",
              name: "CreateService",
              component: CreateServiceView,
            },
            {
              path: "edit-service/:id", // Thêm tham số ID cho edit
              name: "EditServiceView",
              component: EditServiceView,
              props: true, // Kích hoạt props để nhận id từ URL
            },
          ],
        },
        {
          path: "rooms-management",
          component: RoomManageView,
          redirect: "/admin/rooms-management/list-room",
          children: [
            {
              path: "list-room",
              name: "ListRoom",
              component: ListRoomView,
            },
            {
              path: "create-room",
              name: "CreateRoom",
              component: CreateRoomView,
            },
            {
              path: "edit-room/:id", // Thêm tham số ID cho edit
              name: "EditRoomView",
              component: EditRoomView,
              props: true, // Kích hoạt props để nhận id từ URL
            },
          ],
        },
        { path: "approved-booking", component: ApprovedBookingView },
      ],
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (to.meta.requiresAuth) {
    const token = sessionStorage.getItem(TOKEN);
    if (!token) return "/login";
    const decoded = jwtDecode(token);
    if (decoded[Role] === undefined) {
      errorHandle()
      return false;
    }
    console.log(to.meta.role?.length < 0 || !to.meta.role.includes(decoded[Role]));
    
    if (to.meta.role?.length < 0 || !to.meta.role.includes(decoded[Role])) {
      errorHandle()
      return false;
    }
  }
});

function errorHandle() {
      Swal.fire({
        title: "Error",
        text: "Account này không có quyền truy cập",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#d33",
        confirmButtonText: "Ok",
      }).then( async (result) => {
        if (result.isConfirmed) {
          try {
            if (sessionStorage.getItem(TOKEN)) {
              sessionStorage.removeItem(TOKEN);
            }
            router.push({ path: '/login'})
          } catch (error) {
          }
        }
      });
}

export default router;
