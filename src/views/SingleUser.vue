<template>
  <div id="user">
    <h1 class="header-title">{{ userTitle }}</h1>

    <div class="card">
      <header class="card__header">
        <h1 class="card__user-name">
          {{ user.name }}
        </h1>
        <hr />
      </header>

      <table class="table">
        <tr>
          <td class="item">Company Name:</td>
          <td>{{ user.company.name }}</td>
        </tr>
        <tr>
          <td class="item">Email:</td>
          <td>{{ user.email }}</td>
        </tr>
        <tr>
          <td class="item">Phone:</td>
          <td>{{ user.phone }}</td>
        </tr>
        <tr>
          <td class="item card__address">Website:</td>
          <td>{{ user.website }}</td>
        </tr>
      </table>
      <hr />
      <p class="address">
        {{ user.address.suite }}, {{ user.address.street }}
        {{ user.address.zipcode }}, {{ user.address.city }}
      </p>
      <div class="card__footer">
        <router-link to="/" class="card__back">
          <li data-hover="users page"><a href="">go back</a></li>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "User",
  data() {
    return {
      blogs: [],
      userTitle: "User Profile",
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

$breakpoint-alpha: 600px;

.header-title {
  font-size: 5rem;
  text-align: center;
  opacity: 0.1;

   @media (max-width: $breakpoint-alpha) {
     font-size: 3rem;
   }
}

.card {
  padding: 30px;
  background: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.4);
    @media (max-width: $breakpoint-alpha) { 
      margin-top: 20px;
      padding: 20px;
      }


  &__user-name {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  .address {
    margin-top: 1rem;
    text-align: center;
  }

  &__footer {
    margin: 2rem 0 1rem;
    text-align: right;
  }

  a,
  li {
    display: block;
    text-decoration: none;
    color: black;
  }

// card body
.table {
  margin: 1em 0;
  min-width: 300px;
  @media (min-width: $breakpoint-alpha) { min-width: 400px;}
  th,
  td.item {
    text-align: left;
    color: #34495e;
    font-weight: bold;
    @media (min-width: $breakpoint-alpha) {
      display: table-cell;
      padding: 0.25em 0.5em;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }
}

.user-name {
  letter-spacing: -1px;
  color: #34495e;
}

.table {
  th,
  td {
    margin: 0.5em 1em;
    @media (min-width: $breakpoint-alpha) {
      padding: 0.5em !important;
    }
  }
}

// go back link
  .card__back {
    margin: 5% auto;
    text-align: center;
    
  }
  
  li:hover {
    cursor: pointer;
  }
  li {
    background: transparent;
    outline: none;
    position: relative;
    padding: 15px 50px;
    overflow: hidden;
  }

  li:hover:before {
    opacity: 1;
    transform: translate(0, 0);
  }
  li:before {
    content: attr(data-hover);
    position: absolute;
    top: 1.1em;
    left: 0;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 800;
    font-size: 0.8em;
    opacity: 0;
    transform: translate(-100%, 0);
    transition: all 0.4s ease-in-out;
  }
  /*li div (li text before hover)*/
  li:hover a {
    opacity: 0;
    transform: translate(100%, 0);
    
  }
  li a {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 800;
    font-size: 0.8em;
    transition: all 0.4s ease-in-out;
    color: #111;
  }
}


 
</style>
