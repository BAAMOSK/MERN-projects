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
               languages: ['English', 'Spanish', 'Cantonese', 'Mandarin', 'Khmer', 'Thai', 'French'] 
            }
        },
        methods: {
            select () {
                console.log('clicked');
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
        color: white;
        background: blue;
    }
    .language li:active {
        background: lightblue;
    }
    a {
        margin-left: 40px;
        border-radius: 10px;
    }
</style>
