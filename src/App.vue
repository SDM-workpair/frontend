<!-- <script src="https://kit.fontawesome.com/68eab83108.js" crossorigin="anonymous"></script> -->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <div>
      <NavBar />
        <h1>{{ $t('search') }}</h1>
        <h1>{{ $t('greeting') }}</h1>
        <h1>{{ $t('greeting') }}</h1>
        <h1>{{ $t('greeting') }}</h1>
        <h1>{{ $t('greeting') }}</h1>
                
  </div> -->
  <Login />
</template>

<script>
import Home from "./view/Home.vue";
import Login from "./view/Login.vue";
export default {
  components: {
    Home,
    Login
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
