<template>
    
    <v-app>
        
    

        <!-- 改這個地方!!!!!! -->
        <v-main>
          <h1>{{ $t('search') }}</h1>
          <h1>{{ $t('greeting') }}</h1>
          <h1>{{ $t('greeting') }}</h1>
          <h1>{{ $t('greeting') }}</h1>
          <h1>{{ $t('greeting') }}</h1>
            <!-- 给应用提供合适的间距 -->
            <v-container >

            <!-- 如果使用 vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer>
        <!-- -->
        </v-footer>
        
        
   
    
</v-app>

</template>

<script>
import ChangeLang from "../components/ChangeLang.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
components: {
  ChangeLang,
  SearchBar
}
};
</script>


<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
