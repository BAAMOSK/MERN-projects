<template>
  <div>
    <Navbar />
    <h1>Personal Chat Room</h1>
  </div>
</template>

<script>
  import Navbar from './Navbar';
  export default {
    components: {
      'Navbar': Navbar
    }
  }

</script>

<style>
  .chat-lobby {
    display: flex;
    justify-content: space-around;
  }
  .bio-pic {
    width: 200px;
    height: 200px;
    border-radius: 100%;
  }
  .bio-stats {
    //flex-direction: flex-end;
  }
  .chat-container {
    text-align: center;
    width: 75%;
    margin: 0 auto;
    border: 1px solid black;
  }
</style>
