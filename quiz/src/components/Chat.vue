<template>
  <div>
    <Navbar />
    <div class="chat-container">
      <div class="chat-lobby">
      <img src="https://images.pexels.com/photos/745766/pexels-photo-745766.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" class="bio-pic">
      <div class="bio-stats">
      <p>BIO</p>
      </div>
      </div>
      <button>CHAT</button>
    </div>
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
  }
  .bio-pic {
    width: 300px;
    height: 300px;
    border-radius: 100%;
  }
  .bio-stats {
    flex-direction: flex-end;
  }
  .chat-container {
    text-align: center;
    width: 75%;
    margin: 0 auto;
    border: 1px solid black;
  }
</style>
