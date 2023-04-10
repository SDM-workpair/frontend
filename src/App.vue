<!-- <script src="https://kit.fontawesome.com/68eab83108.js" crossorigin="anonymous"></script> -->
<template>

    <v-app>
      <!-- v hide if -->
      <Login v-if="$route.path.includes('login')" />
      <NavBar1 v-else/> 
    </v-app>
  
</template>

<script>
import Home from "./view/Home.vue";
import Login from "./view/Login.vue";
import NavBar1 from "./components/NavBar1.vue";

export default {
  components: {
    Home,
    Login,
    NavBar1,
   
  }
};
</script>


<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
