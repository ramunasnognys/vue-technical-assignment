import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
  state: {
    users: [],
  },

  getters: {
    userslist: (state) => {
      return state.userslist;
    },
    user: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },
  },

  // make api call
  actions: {
    loadusers({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((data) => {
          let users = data.data;
          commit("SET_USERS", users);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  // refresh api state
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
});
