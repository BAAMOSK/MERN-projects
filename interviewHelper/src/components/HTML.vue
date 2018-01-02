<template>
  <div>
    <h1>HTML</h1>
    <ul>
      <li>{{ questions[counter] }}</li>
    </ul>
    <p v-if="show" class="answer-button">
      <button @click="showAnswer">SHOW</button>
    </p>
    <p v-else class="answer">
      {{ answers[counter] }}
    </p>
    <button v-if="!show" id="hide-button" @click="showAnswer">HIDE</button>
    <div class="button-container">
      <button v-model="counter" @click="prev">PREV</button>
      <button v-model="counter" @click="next">NEXT</button>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {        
        counter: 0,
        show: true,
        questions: [
          'Why do you need doctype?',
          'What is the use of data-* attribute?',
          'How can you generate a public key in HTML?',
          'How can you change the direction of html text?',
          'How can you highlight text in html?',
          'How can you apply CSS to a part of HTML only?',
          'Explain standard and quirks mode.',
          'How do you serve HTML in multiple languages?',
          'How to select SVG or Canvas for your site?',
          'How would you differentiate div, section, and article.',
          'What are the differences between div and span?',
          'What is the optional tag?',
          'Which resource would be downloaded first?',
          'Will the browser make http requests for the following cases?',
          'What is a semantic tag?',
          'Can you describe progressive enhancement and graceful degradation?',
          'What are cookies, sessionStorage, and localStorage?'
        ],
        answers: [
          'The doctype lets the browser know if it is reading HTML or XML. XML is extensible markup and has rules. HTML was designed to display data. HTML is opening a page and showing you. XHTML is like giving you a book.',
          'Data attributes all start with data- and allow you to store extra data in the DOM. You can easily access the data attribute using JavaScript.',
          `HTML has a keygen tag that generates a key. It is deprecated. <keygen name='name' challenge='challenge string' keytype='type' keyparams='pqg-params'>`,
          'Bi-directional override. There is left-to-right, right-to-left, and auto. Auto lets the browser configure it. <p dir="rtl"></p>',
          '<mark></mark> Anything inside the mark tags will be highlighted yellow by default. To change the color use the background-color value.',
          'Use the scope attribute. It is obselete.',
          'Quirks mode allows the browser to render without complying with W3C and IETF standards. It was used for backwards compatability. Currently only Netscape browsers use Quirks mode.',
          'You can use the Google translate API. Create specific content based on the charset.',
          'SVG is object model based like Illustrator. Canvas is pixel based like Photoshop. A weather or astronomy map would probably use canvas to render particles. It does not need to update the DOM like a SVG.',
          'Section would be the top level div that has children with the same theme. Article can be thought of a paragraph of a book. It should be a complete and self-contained element. Divs have no semantic meaning, they can be thought of as dividers.',
          'Divs are block level elements and spans are inline elements.',
          'Optional tags are self closing tags. <p>, <ul>, <li>, <body> do not require a closing tag.',
          'Css files are downloaded parallel to each other but block other data.',
          'If an img is set to display: none or visibility: hidden it will still trigger an HTTP request.',
          'Semantic tags are descriptive tags. They explain what the tags are like nav, article, header, footer.',
          'It is about the design process. Progressive enhancement is starting from a baseline and then building with newer tech. Graceful degredation is building the optimal experience then designing fallbacks.',
          'Cookies are for storing small amounts of website data, such as a user name. Sessions storage is temporary data like a token so that a user does not have to login each time they visit different pages. Local storage is for persistent data on your local machine.'
        ]
      }
    },
    methods: {
      prev() {
        if(this.counter === 0) {
          this.show = true;
          this.counter = this.questions.length - 1;
          return;
        }
        this.show = true;
        this.counter--;
      },
      next() {
        if(this.counter === this.questions.length - 1) {
          this.show = true;
          this.counter = 0;
          return;
        }
        this.show = true;
        this.counter++;
      },
      showAnswer() {
        this.show = !this.show;
      }
    }
  }
</script>

<style>
  ul {
    font-size: 2em;
    list-style: none;
  }
  p {
    background: lightgray;
    padding: 10px;
    font-size: 2em;
    margin: 0 auto;
    width: 450px;
    text-align: left;
    border-radius: 10px;
  }
  .button-container {    
    margin: 20px;
    padding: 20px;
    font-size: 2em;    
  }
  button {
    margin: 0 100px;
    height: 50px;
    width: 100px;
  }
  .answer-button {
    border: 1px solid black;
    text-align: center;
  }
  #hide-button {
    position: absolute;
    top: 27%;
    right: 20%;
  }
</style>
