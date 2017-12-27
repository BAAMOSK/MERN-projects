<template>
    <div class="nav">
        <div class="left">
            <h1 class="logo"></h1>
            <h1 class="user">UserName</h1>
        </div>
        <div class="right">
            <ul>
                <li>Logout</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {        
            return {
                name: 'NAVBAR'
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
        background: #888;
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
        padding: 0;
        width: 100px;
        height: 100px;
        border: 1px solid green;
        border-radius: 100%;
        background: purple;
    }
    .user {
        margin-left: 10px;
    }


</style>
