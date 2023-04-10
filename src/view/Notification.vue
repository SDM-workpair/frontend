<template>
    
    <v-app>
      <!-- 這一行要加 不然會有不置中的問題 -->
      <v-navigation-drawer app></v-navigation-drawer>
      <!--                              -->
      
        <!-- 改這個地方!!!!!! -->
        <v-main>
          <div class="ellipse-text">
            NOTIFICATION
          </div>
          <!-- <hr class="h-color mx-3"> -->
          <div class="d-flex justify-content-center ellipse-text"
                v-for="item in matching_rooms">
                
            <v-card class="notifihihi text-center">{{ item }}</v-card>
                
          </div>
          
            <!-- 给应用提供合适的间距 -->
            <v-container >
  
            <!-- 如果使用 vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>
  
     
        
        
   
    
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
    axios.post('http://localhost:8000/api/v1/notification/my-list',{
      
  email: "admin@sdm-teamatch.com",
  is_admin: true,
  name: "--",
  line_id: "",
  image: ""
  })
    .then( (mr_response) => {this.matching_rooms = mr_response.data.data.map(aaa => aaa.content);
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

.ellipse-container {
  width: 200px;
  height: 100px;
  background-color: #333;
  border-radius: 100px / 50px; /* 椭圆形的圆角设置 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.ellipse-text {
  font-size: 24px;
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 16px;}

  
.oval-container {
  display: inline-block;
  border-radius: 40%;
  padding: 100px;
  background-color: #ccc;
  transform: scaleX(3);
}

.oval-text {
  display: inline-block;
  transform: scaleX(1);
}

.notifihihi{
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 16px;
  width: 1000px; 
  /* height: 50px; */
  /* text-align: center; */
  background-color: lightgray;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 30px;
}
  
</style>