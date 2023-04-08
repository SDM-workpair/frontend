<template>
    
        <v-app>

            <v-navigation-drawer color="black">
              <img src="../assets/logo.png">
              <!-- < v-on:click="redirect_to_login" /> -->
            </v-navigation-drawer>

            <v-app-bar color="black">
              
              <v-responsive max-width="400">
                <!-- <v-text-field
                  :label="$t('search')"
                  solo
                  dense
                  flat
                  hide-details
                  rounded
                  append-outer-icon="search"
                >
              </v-text-field> -->
              <SearchBar/>
                
        </v-responsive>
        <v-spacer></v-spacer>
                <ChangeLang />
            </v-app-bar>

            <!-- 根据应用组件来调整你的内容 -->
            <v-main>
              <h1>{{ $t('search') }}</h1>
              <h1>{{ $t('greeting') }}</h1>
              <h1>{{ $t('greeting') }}</h1>
              <h1>{{ $t('greeting') }}</h1>
              <h1>{{ $t('greeting') }}</h1>
              <h1>{{ $t('search') }}</h1>
              <h1>{{ $t('greeting') }}</h1>
              <h1>{{ $t('greeting') }}</h1>
              <h1>{{ $t('greeting') }}</h1>
              <h1>{{ $t('greeting') }}</h1>
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
  import ChangeLang from "./ChangeLang.vue";
  import SearchBar from "./SearchBar.vue";
  
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
  