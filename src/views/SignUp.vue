<template>
  <div class="container">
    <h2>Ingresa tus datos para Registrarte</h2>
  <form @submit.prevent="signUp">
    <input v-model="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="clave" required />
    <button type="submit">Registrarse</button>
  </form>
</div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async signUp() {
      const auth = getAuth();
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/'); 
      } catch (error) {
        console.error("Error al registrarse:", error);
      }
    }
  }
}
</script>
<style>
.container{
  text-align: center;
  margin-top: 100px;
}

</style>
