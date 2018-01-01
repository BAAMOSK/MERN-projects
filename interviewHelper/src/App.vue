<template>
  <div id="app">
    <h1>Interview Helper</h1>
    <transition name="flip" mode="out-in">
      <component :is="mode" @answered="answered($event)" @confirmed="mode='app-question'"></component>
    </transition>
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
    text-align: center;
  }
  .flip-enter {
  //transform: rotateY(0deg); 
  }
  .flip-enter-active {
    animation: flip-in .5s ease-out forwards;
  }
  .flip-leave {
  //transform: rotateY(0deg);
  }
  .flip-leave-active {
    animation: flip-out .5s ease-out forwards;
  }
  @keyframes flip-out {
    0% {
      transform: rotateY(0deg); 
    }
    100% {
      transform: rotateY(90deg);
    }
  }
  @keyframes flip-in {
    0% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }




</style>
