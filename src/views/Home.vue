<template>
  <div id="users-section">
    <h1 class="header-title">{{ usersTitle }}</h1>

    <app-table></app-table>
  </div>
</template>

<script>
export default {
  name: "Users",

  data() {
    return {
      usersTitle: "Users Table",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
$breakpoint-alpha: 600px;

.header-title {
  font-size: 5rem;
  margin-bottom: 40px;
  text-align: center;
  opacity: 0.2;

  @media (max-width: $breakpoint-alpha) {
    font-size: 3rem;
  }
}
</style>