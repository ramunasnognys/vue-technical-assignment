## Vue Technical Assignment

You can view the demo aplication [**here**](https://vue-technical-assignment.vercel.app/)

<b>Includes:</b>
- [**Vue.js**](https://vuejs.org//) JavaScript framework (version 2.6.11)
- [**Babel**](https://babeljs.io/) next generation JavaScript (transpiler for module-system & flow)
- [**ESLint**](https://eslint.org/) static code analysis tool for identifying problematic patterns found in JavaScript code
- [**Axios**](https://github.com/axios/axios) Promise based HTTP client for the browser and node.js
- [**VuexStore**](https://vuex.vuejs.org/guide/) object state manager

## Project setup

```bash
git clone https://github.com/ramunasnognys/vue-technical-assignment.git
cd vue-technical-assignment
npm / yarn install
```

## Scripts 

```bash
npm / yarn
serve ------------ compiles and hot-reloads for development
build ------------ compiles and minifies for production
lint  ------------ lints and fixes files
```

## Assignment 
Create a Vue.js application that would have 2 pages:
1. **Users**
   - [ ] list all users from the given API (1) in a custom made table
   - [ ] hovering on table rows
   - [ ] on the user click - redirect to a Single user page
   - [ ] on the user click - redirect to a Single user page
    - Table properties: *name, email, phone, company name*
2. **Single User**
   - [ ] in this page you need to display user information from the api 1 or api 2.
    - Table properties: *name, email, address (street, suite, city, zipcode), phone, website, company (name only)*

**API**
1. https://jsonplaceholder.typicode.com/users
2. https://jsonplaceholder.typicode.com/users/{id}


