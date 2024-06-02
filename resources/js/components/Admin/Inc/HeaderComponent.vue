<template>

    <header class="row border bg-dark mb-4 shadow">

        <div class="col-md-2 pt-3 text-white">
            <span class="font-weight-bold">Admin Panel :~</span>
        </div>

        <nav class="col-md-10 navbar navbar-expand-sm">
            <ul class="navbar-nav text-white">

                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/dashboard">Home</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/addstudent">Add Student</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/addfaculty">Add Faculty</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/addcourse">Add Course</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/viewstudent">View Student</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/viewfaculty">View Faculty</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/viewcourse">View Courses</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/uploadpost">Upload Post</router-link>
                </li>

                <li class="nav-item">
                    <button @click="logout" class="nav-link">Logout</button>
                </li>

            </ul>
        </nav>
    </header>

</template>

<script>

export default {
    methods: {
        logout() {
            localStorage.removeItem('ugss_token')
            this.$router.push('/login')
        }
    }
}

</script>