<template>
    <div>
        <p v-if="access">Please login below</p>
        <p v-else="access">Welcome {{username}}!</p>
        <div> 
            <button v-on:click="login">Login</button>
        </div>

        <form>
            <label>Search</label>
            <input type='text' v-model="keyword" placeholder="Search Post...">
        </form>
        
        <!-- <input type="text" v-model="username"/> -->

        <div class="box" v-for="post in filteredList">
            <h1>{{post.title}}</h1>
            <img v-bind:src="post.img"></img>
            <small>Posted by {{post.author}}</small>
            <p>
                <a v-bind:href="post.link">{{post.title}}</a>
            </p>
        </div>
    </div>
</template>

<script>
    class Post {
        constructor(title, link, author, img) {
            this.title = title;
            this.link = link;
            this.author = author;
            this.img = img;
        }
    }

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'JavaScript',
      access: true,
      username: 'Tee',
      keyword: '',
      postList: [
        new Post('Vue', 'https://github.com', 'Tee Mak', 'https://vuejs.org/images/logo.png'),
        new Post('React', 'https://github.com', 'Facebook', 'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'),
        new Post('Angular', 'https://github.com', 'Google', 'https://vuejs.org/images/logo.png'),
        new Post('Vanilla', 'http://teemak.website', 'Erza Dog', 'https://vuejs.org/images/logo.png'),
        new Post('Python', 'https://github.com', 'Quora', 'https://vuejs.org/images/logo.png'),
        new Post('Asp.net', 'https://github.com', 'Microsoft', 'https://vuejs.org/images/logo.png'),
      ]
    }
  },
  computed: {
    filteredList () {
        return this.postList.filter(post => {
            return post.title.toLowerCase().includes(this.keyword.toLowerCase());
        });
    }
  },
  methods: {
    showName: function() {
        console.log('Hi My name is Tee!')
    },
    login: function() {
        this.access = !this.access
    }
  }
}
</script>

<style scoped>
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
.box {
    width: 20%;
    display: inline-block;
    margin: 2%;
    padding: 2%;
    border: 2px solid black;
}
img {
    display: block;
    height: 100px;
    width: 100px;
    margin: auto;
}
form {
    margin: 1%;
    padding: 1%;
}

form input {
    line-height: 2em;
}

</style>
