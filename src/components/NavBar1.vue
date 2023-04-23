<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="stylesheet" href="../css/style.css"/>

  <v-app-bar color="black">
      <v-container class="py-0 fill-height">
        <!-- <v-app-bar-title class="title-color"> -->
          <a href="/" style="text-decoration:none;">
          <font size="6" color="white" face="Arial Black">Teamatch</font>
          </a>
        <!-- </v-app-bar-title> -->
        
        
        
        <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" :placeholder="$t('search')" aria-label="Search">
                      <button class="btn btn-outline-success text-nowrap" type="submit">{{ $t('search') }}</button>
                    </form>
                  </ul>
                  
                </div>
                

              </div>
              
                  
                    
                  
              
            </nav>
            <v-spacer></v-spacer>
            <!-- <v-container container-fluid> -->
              <!-- <v-col> -->
                <!-- <v-container class="indigo darken-2"> -->
                
                    <a href="/notification" class="text-decoration-none text-white"><i class="bi bi-bell-fill bi--7xl hi"></i></a>
                
                    <a href="/profile" class="text-decoration-none text-white"><i class="bi bi-person-circle hi"></i></a>
                <!-- </v-container> -->
              <!-- </v-col> -->
            
            
            
          <!-- </v-container> -->
          </v-container>
    </v-app-bar>
    
    <v-navigation-drawer color="black">
      <v-list class="hehe">
        <b-button @click="showPopup = true" class="btn btn-primary hehe">{{ $t('add_new_space') }}</b-button>
      </v-list>
      <v-list>
        <a href="/" class="text-decoration-none text-white hehe"><i class="bi bi-people-fill hihi"></i>  {{ $t('all_matching_space') }}</a>
      </v-list>
      <v-list>
        <a href="/myMatchRoom" class="text-decoration-none text-white hehe"><i class="bi bi-person-fill hihi"></i>  {{ $t('my_matching_space') }}</a>
      </v-list>
      <v-list>
        <a href="/myGroup" class="text-decoration-none text-white hehe"><i class="bi bi-chat-fill hihi"></i>  {{ $t('my_group') }}</a>
      </v-list>
      <v-list>
        <hr class="h-color mx-2">
      </v-list>
      <v-list class="hehe">
        <div>{{ $t('language') }}:  </div><h6></h6><ChangeLang />
      </v-list>
      <v-list>
        <!-- <DatePicker1 /> -->
      </v-list>
    </v-navigation-drawer>
<!-- <v-main> -->
  <AddNewMatch v-if="showPopup" :show="showPopup" @close="showPopup = false">
      
    </AddNewMatch>

    <router-view />

</template>

<script>
import ChangeLang from "./ChangeLang.vue";
import SearchBar from "./SearchBar.vue";
import AddNewMatch from './AddNewMatch.vue';
// import DatePicker1 from './DatePicker1.vue';
// import { ref } from 'vue';

export default {
components: {
  ChangeLang,
  SearchBar,
  AddNewMatch,
  // DatePicker1
},

data() {
  return {
      showPopup: false,
    };
  }

// setup() {
//     const showPopup = ref(false);

//     const openPopup = () => {
//       showPopup.value = true;
//     };

//     const closePopup = () => {
//       showPopup.value = false;
//     };

//     return {
//       showPopup,
//       openPopup,
//       closePopup
//     };
//   }
};
</script>


<style>
  /* 給 Icon 加上 margin-right 來讓它們有等距的間隔 */
  .hi {
    margin-right: 20px;
    font-size: 1.7rem;
  }

  .hihi {
    margin-right: 5px;
  }

  .hihihi {
    margin-right: 50px;
  }
</style>

<style>
.hehe {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}


.my-router-link {
  text-decoration: none !important;

}

.moneyInfo {
  text-decoration: none !important;
  color: #202020 !important;
}

.leftTextColor {
  color: white ;
}



</style>