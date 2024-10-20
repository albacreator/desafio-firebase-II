<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <router-link to="/signup">Registrarse</router-link>
      <router-link to="/login">Iniciar Sesión</router-link>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  margin-bottom: 20px;
  margin: auto;
  background-color: rgb(142, 115, 165);
  height: 100%;
  width: 100%;


}
.navbar {
  background-color: #efc1f5;
  padding: 15px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.nav-links {
  list-style: none;
  display: flex; 
  justify-content: space-around; 
}

.nav-links li {
  margin: 0 20px; 
}

.nav-links a {
  color: white; 
  text-decoration: none; 
  font-size: 18px; 
  margin-right: 10px;
}

.nav-links a:hover {
  text-decoration: underline;
}

</style>
