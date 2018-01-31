<template>
    <div class="login">
        <form>
          <h1>Register or Login</h1>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Password"></input>
          <div class="submit">
              <router-link class="btn btn--secondary" to="/dashboard">Submit</router-link>
                <!-- <button>Submit</button> -->
          </div>
        </form>
    </div>
</template>

<script>

</script>


<style scoped>
    .login {
      height: 100vh;
        text-align: center;   
        display: flex;
        align-items: center;
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

    .login {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: var(--color-primary-0);
        background-image: linear-gradient(to right, rgba(255,0,255, .8), rgba(48,79,254 ,.9));
    }

    .login form {
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid black;
      border-radius: 10px;
        position: relative;
    }

    .login form > * {
      padding: 2rem;
      font-size: 1.3rem;
    }
    
    .login input {
      margin: 50px;
      border-radius: 10px;
    }

    .btn--secondary {
      background: blue;
      border: 1px solid black;
      transition: all .3s;
      margin: 2%;
      position: absolute;
      top: 85%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .btn--secondary:hover {
      padding: 4%;
    }
</style>
