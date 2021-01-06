<template>
    <div id="user">
       <router-link to="/">back</router-link>
       <div v-if="user">
           <h1>{{ user.name }}</h1>
           <p>{{ user.role }}</p>
       </div>
    </div>
</template>

<script>
export default {
    // name: 'User'    
    props: [
        'id'
    ],

    computed: {
        user() {
            return this.$store.getters.user(parseInt(this.id)) // this.id = $route.params.id
        }
    }
}
</script>

<style lang="scss" scoped>
#user {
    font-size: 1.6rem;

}
</style>