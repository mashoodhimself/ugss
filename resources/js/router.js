import Vue from 'vue';
import Router from 'vue-router';

import MainComponent from './components/MainComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';

import DashboardComponent from './components/Admin/DashboardComponent.vue';
import AddStudentComponent from './components/Admin/AddStudentComponent.vue';
import AddCourseComponent from './components/Admin/AddCourseComponent.vue';
import AddFacultyComponent from './components/Admin/AddFacultyComponent.vue';
import UploadPostComponent from './components/Admin/UploadPostComponent.vue';
import ViewCourseComponent from './components/Admin/ViewCourseComponent.vue';
import ViewStudentComponent from './components/Admin/ViewStudentComponent.vue';
import ViewFacultyComponent from './components/Admin/ViewFacultyComponent.vue';
import LogoutComponent from './components/Admin/LogoutComponent.vue';


// Use Vue Router
Vue.use(Router);

// Define routes
const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainComponent
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterComponent
    },
    {
        path: '/admin/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: '/admin/addcourse',
        name: 'Add Course',
        component: AddCourseComponent
    },
    {
        path: '/admin/addfaculty',
        name: 'Add Faculty',
        component: AddFacultyComponent
    },
    {
        path: '/admin/addstudent',
        name: 'Add Student',
        component: AddStudentComponent
    },
    {
        path: '/admin/uploadpost',
        name: 'Upload Post',
        component: UploadPostComponent
    },
    {
        path: '/admin/viewcourse',
        name: 'View Course',
        component: ViewCourseComponent
    },
    {
        path: '/admin/viewstudent',
        name: 'View Student',
        component: ViewStudentComponent
    },
    {
        path: '/admin/viewfaculty',
        name: 'View Faculty',
        component: ViewFacultyComponent
    },
    {
        path: '/admin/logout',
        name: 'Logout',
        component: LogoutComponent
    },

];

// Create the router instance
const router = new Router({
    mode: 'history',
    routes
});

export default router;
