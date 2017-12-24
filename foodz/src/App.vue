<template>
  <div id="app">
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/cart">Cart</router-link></li>
            <li><router-link to="/admin">Admin</router-link></li>
        </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Nunito', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 2em;
}

nav {
    margin: 0;
    padding: 0;
    background: gray;
    border: 5px solid black;
}

ul {
    displaY: flex;
    justify-content: center;
    list-style: none;
}

ul li {
    padding: 0 2%;
}


ul li a {
    color: white;
    text-decoration: none;
}
</style>
