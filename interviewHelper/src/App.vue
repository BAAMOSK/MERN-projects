<template>
  <div id="app">
    <h1>Interview Helper</h1>
    <component :is="mode" @answered="answered($event)" @confirmed="mode='app-question'"></component>
  </div>
</template>

<script>
  import Question from './components/Question'
  import Answer from './components/Answer'

  export default {
    data () {
      return {
        mode: 'app-question'
      }
    },
    methods: {
      answered(isCorrect) {
        if(isCorrect) {
          this.mode = 'app-answer'
        } else {
          this.mode = 'app-question'
          alert('Wrong!');
        }
      }
    },
    components: {
      appQuestion: Question,
      appAnswer: Answer
    }
  }
  </script>

  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
