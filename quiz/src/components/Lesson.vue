<template>
    <div>
      <Navbar />
        <h1>Learn Lessons</h1>
        <div class="lesson-container">        
          <div class="question-container">
            <ul>
              <li v-for="question in questions">{{ question }}</li>
            </ul>
          </div>

          <div class="lesson-container">
            <div class="word">
              <img src="https://images.pexels.com/photos/126588/pexels-photo-126588.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb">
              <h1>HAY</h1>
              <p>The food horses eat or you can make a bed out of it.</p>
              <audio controls>
                <source src="" type="audio/ogg">
              </audio>
            </div>
            <div class="word">
              <img src="https://images.pexels.com/photos/187069/pexels-photo-187069.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb">
              <h1>FAY</h1>
              <p>A fay is a fairy, google it if you don't believe me!</p>
              <audio controls>
                <source src="" type="audio/ogg">
              </audio>
            </div>
            <div class="word">
              <img src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&w=1350&q=80">
              <h1>JEFE</h1>
              <p>Hay-fay means boss</p>
              <audio controls>
                <source src="" type="audio/ogg">
              </audio>
            </div>
          </div>
          <button>NEXT</button>

        </div>
    </div>
</template>

<script>
  import Navbar from './Navbar'
  export default {
    components: {
      'Navbar': Navbar 
    },
    data () {
      return {
        learn: true,
        questions: ['Boss', 'Cat', 'Dog', 'Monster', 'Bathroom', 'Hungry', 'yes', 'everything', 'I have', 'only', 'nothing'],
        lesson: ['You know the word hay: The things horses eat.', "A fay is a fairy, google it if you don't believe me!"],
        image: []
      }
    }
  } 

</script>

<style>
  .lesson-container {
    display: flex;
    justify-content: space-around;
  }
  .word {
    width: 30%;
    border: 1px solid black;
  }
  img {
    display: block;
    height: 250px;
    width: 100%
  }
  button {
    margin: 3%;
    height: 50px;
    width: 100px;
    font-size: 1.5em;
    background: blue;
    color: white;
  }
  .lesson-container {
    display: flex;    
    text-align: center;
  }
  .question-container {
    display: flex;
    margin: 0 10px;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
  }
  .question-container ul {
    padding: 0 15px;
  }
  .question-container ul li {
    font-size: 1.3rem;
    color: black;
    list-style: none;
  }
  .question-container ul li:nth-child(even) {
    background-color: #aaa;
  }
</style>
