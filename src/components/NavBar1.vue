<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="stylesheet" href="../css/style.css"/>

  <v-app-bar app color="black">
      <v-container class="py-0 fill-height">
        <!-- <v-app-bar-title class="title-color"> -->
          <a href="/" style="text-decoration:none;">
          <font size="6" color="white" face="Arial Black">Teamatch</font>
          </a>
        <!-- </v-app-bar-title> -->
        
        
        
        <nav class="navbar navbar-expand-lg">
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
      <v-list>
        <button href="#" class="btn btn-primary">{{ $t('add_new_space') }}</button>
      </v-list>
      <v-list>
        <a href="#" class="text-decoration-none text-white"><i class="bi bi-people-fill"></i>  {{ $t('all_matching_space') }}</a>
      </v-list>
      <v-list>
        <a href="#" class="text-decoration-none text-white"><i class="bi bi-person-fill"></i>  {{ $t('my_matching_space') }}</a>
      </v-list>
      <v-list>
        <a href="#" class="text-decoration-none text-white"><i class="bi bi-chat-fill"></i>  {{ $t('my_group') }}</a>
      </v-list>
      <v-list>
        <hr class="h-color mx-2">
      </v-list>
      <v-list>
        <h6>{{ $t('language') }}: </h6><ChangeLang />
      </v-list>
    </v-navigation-drawer>

    <router-view />

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
  /* 給 Icon 加上 margin-right 來讓它們有等距的間隔 */
  .hi {
    margin-right: 20px;
    font-size: 1.7rem;
  }
</style>

<!-- <style>
#hehe {
  width: 10px;
  height: 10px;
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


</style> -->