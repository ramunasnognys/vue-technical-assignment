<template>
  <div id="user">
    <router-link to="/">back</router-link>
    <div v-if="user">
      <p>{{ user.id }}</p>
      <h1>{{ user.name }}</h1>
      <p>{{ user.phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      blogs: [],
    };
  },
  props: ["id"],

  computed: {
    user() {
      return this.$store.getters.user(this.id); // this.id -> $route.params.id
    },
  },
};
</script>

<style lang="scss" scoped>
#user {
  font-size: 1.6rem;
}
</style>
