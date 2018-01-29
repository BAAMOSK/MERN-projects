<template>
  <div>
    <Navbar />
    <div class="chat-container">
      
      <img src="https://images.pexels.com/photos/405041/pexels-photo-405041.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" class="user-image"></img>
      <div class="chat-item">
      <p>Name: Tee</p>
      <p>Location: Florida</p>
      <p>Native Language: Spanish</p>
      <p>Learning: English</p>
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
  .chat-container {
    width: 50%;
    border: 10px solid black;
    margin: 0 auto;
    display: flex;
  }
  .user-image {
    height: 200px;
    border-radius: 100%;
    border: 1px solid black;
  }
</style>
