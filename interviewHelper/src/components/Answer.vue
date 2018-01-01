<template>
  <div class="answer-container">
    <div class="correct-container">
      <h1>That's Correct!</h1>
      <button @click="onNextQuestion">Next Question</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      onNextQuestion() {
        this.$emit('confirmed');
      }
    }
  }
</script>

<style>
  .answer-container {
    display: flex;
    justify-content: center;
  }
  .correct-container {
    border: 1px solid black;
    background: lightblue;
    width: 50%;
    border-radius: 10px;
  }
  h1 {
    font-size: 3em;
  }
  button {
    color: white;
    font-size: 3em;
    border-radius: 10px;
    background: green;
    margin-bottom: 20px;
  }
</style>
