<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Users Table",
    };
  },
};
</script>

<style lang="scss">
@import url("https://pro.fontawesome.com/releases/v5.10.0/css/all.css");
* {
  box-sizing: border-box;
}

body {
  // background-color: #EEEEEE;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body,
html {
  margin: 0;
  height: 100%;
}
#app {
  // width: 50%;
  margin: 10px;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #e2e2e2;
  border-radius: 3px;
  color: black;
  font-weight: bold;
  margin-right: 15px;
}

.fas {
  margin-right: 5px;
}
</style>
