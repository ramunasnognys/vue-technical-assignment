<template>
  <div id="app" >
    <div class="icon-logo"></div>
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

body,
html {
  margin: 0;
  height: 100%;
}

body {
  background: rgb(255, 247, 247);

  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;

}

#app {
  margin: 10px;
  opacity: .7;

}

</style>
