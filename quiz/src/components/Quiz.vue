<template>
    <div class="quiz-container">
        <Navbar />
        <div class="quiz-header">
          <h1>Take the quiz here!</h1>
          <div class="question">
            {{ question }}
          </div>
        </div>
        
        <div>
          <ul class="answers">
            <div class="answers-container">
              <li>Hola</li>
              <audio controls>
              </audio>
            </div>
            <div class="answers-container">
              <li>Jefe</li>
              <audio controls>
              </audio>
            </div>
            <div class="answers-container">
              <li>Honcho</li>
              <audio controls>
              </audio>
            </div>
            <div class="answers-container">
              <li>Roto</li>
              <audio controls>
              </audio>
            </div>
          </ul>
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
        learn: false,
        question: 'How do you say boss?'
      }
    }
  }

</script>

<style>
  .quiz-header {
    text-align: center;
  }
  .quiz-container {
    background: #bbb;
    height: 100vh;
  }
  .question {
    font-size: 2em;
  }
  .answers {
    display: grid;
    grid-template-columns: 1fr 1fr;  
  }
  .answers-container {
    width: 50%;
    justify-self: center;
    border: 1px solid black;
    border-radius: 10px;
    padding: 50px;
    margin: 15px;  
    background: #ddd;
  }
  .answers-container li {
    font-size: 2em;
    background: gray;
    border: 1px dotted black;
    border-radius: 20px;
    height: 50px;
    list-style: none;
    text-align: center;
  }
  audio {
    margin: 15px auto;
    display: flex;
    justify-content: center;
  }
</style>
