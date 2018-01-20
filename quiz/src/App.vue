<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
}

:root {
  --color-primary-0: #EF5284; /* Main Primary color */
  --color-primary-1: #FFF7F9; 
  --color-primary-2: #F993B3; 
  --color-primary-3: #E31D5C; 
  --color-primary-4: #7A042A; 

  --color-secondary-0: #FF8557; 	/* Main Secondary color (1) */
  --color-secondary-1: #FFF9F7; 
  --color-secondary-2: #FFB397; 
  --color-secondary-3: #FF5D21; 
  --color-secondary-4: #8A2905; 

  --color-tertiary-0: #C947CD; 	/* Main Secondary color (2) */
  --color-tertiary-1: #FFF6FF; 
  --color-tertiary-2: #E88BEB; 
  --color-tertiary-3: #A216A7; 
  --color-tertiary-4: #57045A;  
}

</style>
