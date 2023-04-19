<template>
    
  <v-app>
      
  

      <!-- 改這個地方!!!!!! -->
      <v-main>
        <h1>HOME的啦</h1>
        <div class="d-flex justify-content-center"
              v-for="item in matching_rooms">
              
          <h1>{{ item }}</h1>
              
        </div>
        
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
import axios from "axios";

export default {
data() {
  return {
    matching_rooms: []
  };
},
components: {
ChangeLang,
SearchBar
},
methods: {
refresh_mr(){
  axios.post('http://localhost:8000/api/v1/search/matching-room/list',{
    user_email: "",
    prompt: "",
    query_all: true
})
  .then( (mr_response) => {this.matching_rooms = mr_response.data.data.map(aaa => aaa.name);
      console.log(this.matching_rooms);})
  .catch( (error) => console.log(error));
     
   
  }
},
mounted:function(){
  this.refresh_mr();
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
