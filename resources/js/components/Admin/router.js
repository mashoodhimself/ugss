import Vue from 'vue';
import Router from 'vue-router';

import MainComponent from './components/MainComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import DashboardComponent from './components/Admin/DashboardComponent';

{/* <li class="nav-item">
      <a class="nav-link" href="index.php?home">Home</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="index.php?addStudent">Add Student</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="index.php?addFaculty">Add Faculty</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="index.php?addCourse">Add Course</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="index.php?viewStudent">View Students</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="index.php?viewFaculty">View Faculty</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="index.php?viewCourses">View Courses</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="index.php?uploadPost">Upload Post</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="./logout.php">Logout</a>
    </li> */}

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
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    },

];

// Create the router instance
const router = new Router({
    mode: 'history',
    routes
});

export default router;
