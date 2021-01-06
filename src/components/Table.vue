<template>
  <div id="table">
    <table cellspacing="0">
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
            <td class="role">{{ user.role }}</td>
            <!-- <td>
              <router-link :to="{ name: 'user', params: { id: user.id } }">
                view
              </router-link>
            </td> -->
            <td>{{ user.role }}</td>
            <td>{{ user.role }}</td>
          </tr>
        </tbody>
        <td>
          <button @click="viewUser(user.id)">view</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  computed: {
    userslist() {
      return this.$store.getters.userslist;
    },
  },
  methods: {
    viewUser(userid) {
      this.$router.push({ name: "user", params: { id: userid } });
    },
  },
  data: () => {
    return {
      status: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#table {
  background: #eeeeee;
  font-size: 1rem;
  display: grid;
  place-content: center;
  padding: 3em;

thead, tbody {
  // background: yellow;
}

th, td, tr {
  text-align: left;
  border: 1px solid grey;
  // padding: 10px;
  margin: 20px 0;
  
}
  table {
    width: 600px;

    tr {
      // margin: 30px;
      // padding: 15px;
    }
    td {
      padding: 15px;
    }

   
    .name {
      // text-align: left;
      // max-width: 50px;
    }
  }
}


// TABLE RESET
.clear-user-agent-styles table,
.clear-user-agent-styles thead,
.clear-user-agent-styles tbody,
.clear-user-agent-styles tfoot,
.clear-user-agent-styles tr,
.clear-user-agent-styles th,
.clear-user-agent-styles td {
    display: block;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
    border-collapse: inherit;
    border-spacing: 0;
    border-color: inherit;
    vertical-align: inherit;
    text-align: left;
    font-weight: inherit;
    -webkit-border-horizontal-spacing: 0;
    -webkit-border-vertical-spacing: 0;
}
th, td {
    // display: inline;
}
</style>
