<template>
  <div class="table-section">
    <table role="table" id="table">
      <thead role="rowgroup">
        <tr role="row">
          <th role="columnheader">Name</th>
          <th role="columnheader">Email</th>
          <th role="columnheader">Phone</th>
          <th role="columnheader">Company Name</th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        <tr
          v-for="user in users"
          @click="viewUser(user.id)"
          :key="user.id"
          :class="{ highlight: user.id == selectedUser }"
          role="row"
        >
          <td role="cell">{{ user.name }}</td>
          <td role="cell">{{ user.email }}</td>
          <td role="cell">{{ user.phone }}</td>
          <td role="cell">{{ user.company.name }}</td>
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
    },
  },
};
</script>

<style scoped lang="scss">
@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    margin: 0 0 1rem 0;
  }

  td {
    border-bottom: 1px solid rgb(245, 245, 245);
    position: relative;
    padding-left: 50%;
  }

  td:last-child {
    border-bottom: none;
  }

  td:before {
    top: 0;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  td:nth-of-type(n):before {
    font-weight: bold;
    margin-right: 10px;
  }

  td:nth-of-type(1):before {
    content: "Name:";
  }
  td:nth-of-type(2):before {
    content: "Email:";
  }
  td:nth-of-type(3):before {
    content: "Phone:";
  }
  td:nth-of-type(4):before {
    content: "Company Name:";
  }
}

table {
  border-collapse: collapse;
  font-size: 16px;
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
