<template>
    <div class="nav">
        <div class="left">
            <h1 class="logo"></h1>
            <h1 class="user">
              <router-link to='/dashboard'>
                {{ name }}
              </router-link>
            </h1>
        </div>

            <h1 v-if="learn">
              <router-link to="quiz" class="quiz">QUIZ</router-link>
            </h1>

        <div class="right">
            <ul>
                <li>{{ natural }}</li>
                <li>{{ learning }}</li>
                <li><router-link to="/">LOGOUT</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {        
            return {
                learn: true,
                name: 'Tee Mak',
                natural: 'English',
                learning: 'Spanish'
            }
        }
    }
</script>

<style>
    .nav {
        margin: 0;
        padding: 0;
        border: 1px solid black;
        min-height: 100px;
        height: 10vh;
        background-image: linear-gradient(to right, magenta, blue);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .left {
        display: flex;        
        align-items: center;
    }
    .logo {
        margin: 0;
        margin-left: 15px;
        padding: 0;
        width: 75px;
        height: 75px;
        border: 1px solid green;
        border-radius: 100%;
        background: purple;
    }
    .user {
        margin-left: 10px;
        color: white;
    }
    .right ul {
        display: flex;
        flex-direction: row;
    }
    .right ul li {
        color: white;
        list-style: none;
        padding: 0px 5px;
    }
    a {
        text-decoration: none;
        font-size: 1.5em;
        margin-right: 10px;
        color: white;
        background: green;
        border: 1px solid black;
        padding: 10px;
        border-radius: 5px;
    }
    .quiz {
      background: black;
      color: red;
    }

</style>
