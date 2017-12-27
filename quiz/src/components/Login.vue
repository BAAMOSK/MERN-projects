<template>
    <div class="login">
        <h1>Register or Login</h1>
        <form>
            <label>UserName</label>
            <input type="text"></input>
            <label>Password</label>
            <input type="text"></input>
            <div class="submit">
                <router-link to="/dashboard">Submit</router-link>
                <!-- <button>Submit</button> -->
            </div>
        </form>
    </div>
</template>

<script>

</script>


<style scoped>
    .login {
        text-align: center;   
    }
    .submit {
        margin: 25px;
    }
    a {
        padding: 10px;
        color: white;
        background: blue;
        border: 2px solid black;
        border-radius: 35px;
        text-decoration: none;
    }
</style>
