import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userslist: [
      { id: 1, name: "Mario", role: "Admin" },
      { id: 2, name: "Ramunas", role: "Leader" },
      { id: 3, name: "Alice", role: "Leader" },
    ]
  },
  getters: {
    userslist: (state) => {
      return state.userslist;
    },
    user: (state) => (id) => {
      return state.userslist.find((user) => user.id === id);
    },
  },
});
