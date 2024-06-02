<template>
    <div class="container">
        <HeaderComponent />

        <section>
            <h2>View Course</h2>
        </section>

        <FooterComponent />
    </div>
</template>

<script>

import HeaderComponent from './Inc/HeaderComponent.vue'
import FooterComponent from './Inc/FooterComponent.vue'

export default {

    name: "ViewCourseComponent",
    components: {
        HeaderComponent,
        FooterComponent
    },

    mounted() {

        const access_token = localStorage.getItem('ugss_token')

        if (access_token == null || access_token == "") {
            this.$router.push('/login')
        }

    }
}


</script>