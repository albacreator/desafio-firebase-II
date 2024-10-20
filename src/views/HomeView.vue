<template>
  <div class="container">
    <h1>Bienvenido a  Home</h1>
    <p>Esta vista es privada y solo accesible para usuarios autenticados🤨.</p>
    <button  @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';

export default {
  name: 'HomeView',
  methods: {
    async logout() {
      const auth = getAuth();
      await signOut(auth);
      this.$router.push('/login'); 
    }
  }
}
</script>
<style>
.container{
  text-align: center;
}
button{
  color: rgb(249, 244, 253);
  background-color: rgb(179, 14, 143);
  padding: 10px;
  
}
</style>
