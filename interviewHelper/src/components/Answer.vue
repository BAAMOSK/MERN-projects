<template>
  <div>
    <h1>That's Correct!</h1>
    <hr>
    <button @click="onNextQuestion">Next Question</button>
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
