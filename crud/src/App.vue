<template>
  <div id="app">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name">
      <button @click="submitName()">Add</button>
    </div>
  
    <div>
      <ul>
        <li v-for="data of names" :key="data['.key']">
          <div v-if="!data.edit">
            {{data.name}}
            <button @click='removePerson(data[".key"])'>REMOVE</button>
            <button @click="setEditName(data['.key'])">EDIT</button>
          </div>
          <div v-else>
            <input type="text" v-model="data.name"></input>
            <button @click="saveEdit(data)">Save</button>
            <button @click="cancelEdit(data['.key'])">Cancel</button>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import { namesRef } from './firebase'

  export default {
    name: 'app',
    data () {
      return {
        name: ''
      }
    },
    methods: {
      submitName() {
        namesRef.push({ name: this.name, edit: false }) 
      },
      removePerson (key) {
        namesRef.child(key).remove();
      },
      setEditName (key) {
        namesRef.child(key).update({ edit: true });
      },
      saveEdit (data) {
        const key = data['.key'];
        namesRef.child(key).set({ name: data.name, edit: false })
      },
      cancelEdit (key) {
        namesRef.child(key).update({ edit: false })
      }
    },
    firebase: {
      names: namesRef
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px;
}

a {
  color: #42b983;
}
</style>
