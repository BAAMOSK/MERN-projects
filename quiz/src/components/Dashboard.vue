<template>
    <div>
        <Navbar />
        <div class="options-container">
            <h1>Choose Native Language</h1>
            <ul class="language">
                <li v-for='item in languages' @click="select">{{ item }}</li>
            </ul>
        </div>
        <div class="options-container">
            <h1>What Language Do You Want To Learn</h1>
            <ul class="language">
               <li v-for='item in languages' @click="select">{{ item }}</li>
            </ul>
        </div>
        <router-link to="/lesson">START</router-link>
    </div>
</template>

<script>
    import Navbar from './Navbar'

    export default {
        components: {
            'Navbar': Navbar
        },
        data() {
            return {
              selected: false,
              languages: ['English', 'Spanish', 'Cantonese', 'Mandarin', 'Khmer', 'Thai', 'French'] 
            }
        },
        methods: {
            select () {
                console.log($0);
            }
        }
    }
</script>

<style>
    .options-container {
        padding: 20px;
    }
    .language {
        display: flex;
        justify-content: space-around;
    }
    .language li {
        padding: 15px;        
        color: black;
        border: 2px solid black;
        border-radius: 15px;
    }
    .language li:hover {
        background: lightblue;
    }
    .selected {
        color: white;
        background: rebeccapurple;
    }
    a {
        margin-left: 40px;
        border-radius: 10px;
    }
</style>
