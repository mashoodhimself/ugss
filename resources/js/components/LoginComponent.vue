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
        <section class="sectionRow d-flex justify-content-center" style="text-align: left;">

            <div class="squareOne p-3">

                <div class="d-flex justify-content-center">
                    <img src="../assets/admin.png" width="200" height="200" alt="">
                </div>

                <p v-if="error" class="text-danger text-center mt-3 error">{{ error  }}</p>

                <form @submit.prevent = "login" >

                    <div class="form-group">
                        <label for="">Username/Email</label>
                        <input type="text" name="username" id="username" class="form-control" v-model="username">
                    </div>

                    <div class="form-group mt-3">
                        <label for="">Password</label>
                        <input type="password" name="password" id="password" class="form-control" v-model="password">
                    </div>

                    <div class="form-group mt-3">
                        <button class="btn btn-success" >Login</button>
                    </div>

                </form>

            </div>



        </section>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {

        data() {

            return {
                username: '',
                password: '',
                error: ''
            }

        },
        methods: {

            async login() {
                try {

                    const response = await axios.post("http://127.0.0.1:8000/api/login", {
                        username: this.username,
                        password: this.password
                    });

                    if(response.data.status == false) {
                        this.error = response.data.message;
                        return;
                    }

                    localStorage.setItem('ugss_token', response.data.token )
                    this.$router.push('/admin/dashboard')

                } catch(error) {
                    this.error = error
                }
            }

        },
        mounted() {

            const access_token = localStorage.getItem('ugss_token')
            if( access_token != "" && access_token != null ) {
                this.$router.push('/admin/dashboard')
            }

        }
    }
</script>
