<template>
  <div id="users-section">
    <h1 class="header-title">{{ usersTitle }}</h1>

    <app-table></app-table>
  </div>
</template>

<script>
export default {
  name: "d",

  data() {
    return {
      usersTitle: "Users Table",
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.header-title {
    font-size: 5rem;
    text-align: center;
    opacity: .2;
  }
</style>