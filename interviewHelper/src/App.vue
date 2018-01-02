<template>
  <div id="app">
    <router-link to="/"><h1>Dashboard</h1></router-link>
    <Main />
    <!-- <transition name="flip" mode="out-in">
      <component :is="mode" @answered="answered($event)" @confirmed="mode='app-question'"></component>
    </transition> -->
    <router-view />
  </div>
</template>

<script>
  import Main from './components/Main'
  /* import Question from './components/Question'
  import Answer from './components/Answer' */

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
      /*appQuestion: Question,
      appAnswer: Answer*/
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
  a {
    text-decoration: none;
    color: red;
  }




</style>
