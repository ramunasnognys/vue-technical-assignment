<template>
  <div id="table">
    <!-- <table cellspacing="0">
      <tr v-for="(user, index) in userslist" :key="index">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="name">{{ user.name }}</td>
            <td class="role">{{ user.role }}</td> -->
            <!-- <td>
              <router-link :to="{ name: 'user', params: { id: user.id } }">
                view
              </router-link>
            </td> -->
            <!-- <td>{{ user.role }}</td>
            <td>{{ user.role }}</td>
          </tr>
        </tbody>
        <td>
          <button @click="viewUser(user.id)">view</button>
        </td>
      </tr>
    </table> -->

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
           <!-- <tr v-for="(user, index) in userslist" :key="index"> -->
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.company.name }}</td>
          <td>
            <td>
              <!-- <router-link :to="{ name: 'user', params: { id: user.id } }"> -->
              <router-link :to="{ name: 'user', params: { id: user.id }}"> here </router-link>
           
          </td>
          <td>
            <button @click="viewUser(user.id)">view</button>
          </td>
        </tr>
      </tbody>
    </table>
  
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "UsersList",
  computed: {
    
    userslist() {
      return this.$store.getters.userslist;
    },

    loadusers() {
      return this.$store.getters.loadusers;
    },
    ...mapState([
      'users'
    ])
  },

  mounted () {
    this.$store.dispatch("loadusers");
  }, 

  methods: {
    viewUser(userid) {
      this.$router.push({ name: "user", params: { id: userid } });
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#table {
  background: #eeeeee;
  font-size: 1rem;
  display: grid;
  padding: 3em;
}
table {
   border-collapse: collapse;
  width: 100%;
}
td,
th {
  padding: 0.5rem;
  text-align: left;
  border: 1px solid #ccc;
}
tbody tr:hover {
  background: yellow;
}
.api-data {
  margin-top: 2rem;
  border: 1px solid blue;
  padding: 10px;
  letter-spacing: 2px;
  font-style: italic;
  background: #fff;
}
</style>
