<template>
  <div id="app">
    
    <!-- <router-link to="/">Home</router-link> | -->
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
name: 'app'
};
</script>

<style lang="scss">
@import url("https://pro.fontawesome.com/releases/v5.10.0/css/all.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 4px solid black;
  height: 100vh;
  padding: 2rem;
}
</style>
