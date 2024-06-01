<template>
    <div class="container">

        <header class="headerSection" >
            <div class="headerLink">
              <router-link to="/" >- Home</router-link>
            </div>

            <div class="headerImage">
              <img src="../assets/bg.jpg" height="250" width="350" alt="">
            </div>

            <div class="headerText">
              <h2>Undergraduate Study System</h2>
            </div>
        </header>
        <section class="sectionRow">


<div class="squareOne">

  <div class="secText">
    <router-link to="/login" >User Login</router-link>
  </div>

  <div class="">
      <img src="../assets/admin.png" width="200" height="200" alt="">
  </div>

</div>



</section>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
