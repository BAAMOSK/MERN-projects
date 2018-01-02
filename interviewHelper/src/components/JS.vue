<template>
  <div>
    <h1>JS</h1>
    <form>
      <label>Question</label>
      <input type="text" name="question" v-model="question"></input>
      <br>
      <label>Answer</label>
      <input type="text" name="answer" v-model="answer"></input>
      <button type="button" @click="onSubmit">SEND</button>
    </form>
    <div>
      <h1>{{ dbQ }}</h1>
      <h1>{{ dbA }}</h1>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    created () {
      axios.get('https://vuefs-c40c3.firebaseio.com/qa.json')
        .then(res => {
          console.log(res)
          const data = res.data
          const qa = []
          for (let key in data) {
            const item = data[key]
            item.id = key
            qa.push(item);
          }
          console.log(qa)
          this.dbQ = qa[0].question
          this.dbA = qa[0].answer
        })
        .catch(err => console.log(err))
    },
    data () {
      return {
        dbQ: '',
        dbA: '',
        question: '',
        answer: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          question: this.question,
          answer: this.answer
        }
        console.log(formData);
        axios.post('https://vuefs-c40c3.firebaseio.com/qa.json', formData)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
    }
  }
</script>

<style>
  form {
    font-size: 2em;
  }
</style>
