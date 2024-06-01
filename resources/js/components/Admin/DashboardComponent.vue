<template>
    <div class="container">
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
      <router-link class="nav-link" to="/admin/logout">Logout</router-link>
    </li>

  </ul>
</nav>
</header>

<section>

    <h2>Posts Screen</h2>

</section>

<footer class="row bg-dark mt-4">
    <div class="col-md-12 p-2">
      <span class="text-white font-weight-bold">All Rights Reserved &copy;</span>
    </div>
  </footer>
    </div>
</template>

<script>

export default {

    mounted() {
        
      const access_token = localStorage.getItem('ugss_token')

      if(access_token == null || access_token == "") {
        this.$router.push('/login')
      }

    }

}

</script>
