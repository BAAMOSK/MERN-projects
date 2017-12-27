<template>
    <div>
        <Navbar />
        <h1>{{ msg }}</h1>
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
                msg: 'Tee Mak'
            }
        }
    }
</script>
