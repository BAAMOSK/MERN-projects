<template>
    <div>
        <div class="title">
            <router-link to="/admin">View Products</router-link>
            <router-link to="/admin/new">New Products</router-link>
        </div>

        <router-view/>

    </div>
</template>

<script>
    export default {
        name: 'admin',
        data () {
            return {
                msg: 'Admin'
            }
        }
    }
</script>

<style>
    .title {
        margin: 1%;
    }
    a {
        padding: 5%;
        color: blue;
        text-decoration: none;
    }

</style>
