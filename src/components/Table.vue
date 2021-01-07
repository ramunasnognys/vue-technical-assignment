<template>
  <div class="table-section">
    <nav>
      <router-link to="/"><i class="fas fa-home"></i>Home</router-link>
    </nav>
    <table id="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          @click="viewUser(user.id)"
          :key="user.id"
          :class="{ highlight: user.id == selectedUser }"
        >
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.company.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UsersTable",
  data() {
    return {
      selectedUser: null,
    };
  },
  computed: {
    userslist() {
      return this.$store.getters.userslist;
    },
    ...mapState(["users"]),
  },

  mounted() {
    this.$store.dispatch("loadusers");
  },

  methods: {
    viewUser(userid) {
      this.$router.push({ name: "user", params: { id: userid } });
    },
    selectRow(user) {
      this.selectedUser = user;
      //Do other things
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#table {
  // max-width: 1000px;
  // background: white;
}
table {
  border-collapse: collapse;
  width: 100%;
}
tbody tr:hover {
  cursor: pointer;
  background: #1f4465;
  color: white;
}
tbody tr:nth-child(even):hover {
  background: #1f4465;
}

tbody tr:nth-child(even) {
  background: #ecf0f1;
}

td,
th {
  padding: 0.5rem;
  text-align: left;
}
thead {
  background: #1f4465;
  color: #e2e2e2;
}

.highlight {
  background-color: pink;
}
</style>
