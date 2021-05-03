<template>
  <div class="toolbar-top">
    <ul>
      <li><router-link class="nav-link" to="/">Home</router-link></li>
      <li><router-link class="nav-link" to="/login">Login</router-link></li>
      <li><router-link class="nav-link" to="/register">Register</router-link></li>
      <li><router-link class="nav-link" to="/search">Search</router-link></li>
      <li><router-link class="nav-link" to="/about">About</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopToolbar',
  components: {
  },
  data() {
    return {}
  }
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  padding: 10px;
  margin: 2px;
}
button {
  cursor: pointer;
  padding: 10px;
  background-color: coral;
  margin-left: 10px;
  border: 0;
}

button:hover,
button:active,
button:focus {
  background-color: #42b983;
}
</style>
