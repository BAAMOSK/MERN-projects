<template>
  <div class="hello">
    <h1>My Name be Tee!</h1>
    <form>
      <div class="block">
      <label>Language</label>
      <input v-model.lazy="language" type="text">
      </div>
      <div class="block">
      <label>Word</label>
      <input v-model.lazy="word" type="text">
      </div>
      <button @click.prevent="onSubmit">Send</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      language: '',
      word: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        language: this.language,
        word: this.word
      }
      console.log(this.language);
      axios.post('https://teemakwebsite.firebaseio.com/languages.json', formData)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block {
  display: block;
  margin: 30px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
