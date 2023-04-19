<template>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="stylesheet" href="../css/style.css"/>
  <!-- <div v-is='script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"'></div> -->

    <v-app-bar color="black">
      <a href="/" style="text-decoration:none;">
          <font size="6" color="white" face="Arial Black">Teamatch</font>
      </a>
     
     
          <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </ul>
                  
                </div>
                

              </div>
              
                  
                    <a href="#" class="text-decoration-none text-white"><i class="bi bi-bell-fill"></i></a>
                  
                  
                    <a href="#" class="text-decoration-none text-white"><i class="bi bi-person-circle"></i></a>
                  
              
            </nav>

            <!-- <div id="app">
              <route-view></route-view>
            </div> -->
    </v-app-bar>
    <v-navigation-drawer color="black">
      
      <v-list>
        <button href="#" class="btn btn-primary">新增配對空間</button>
      </v-list>
      <v-list>
        <a href="#" class="text-decoration-none text-white"><i class="bi bi-people-fill"></i>  所有配對空間</a>
      </v-list>
      <v-list>
        <a href="#" class="text-decoration-none text-white"><i class="bi bi-person-fill"></i>  我的配對空間</a>
      </v-list>
      <v-list>
        <a href="#" class="text-decoration-none text-white"><i class="bi bi-chat-fill"></i>  我的小組</a>
      </v-list>
      <v-list>
        <hr class="h-color mx-2">
      </v-list>
      <v-list>
        <ChangeLang />
      </v-list>
    </v-navigation-drawer>

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

<!-- <script>
import { mapGetters } from "vuex";
import { GetProductsCategories } from "@/api/home";
export default {
  data() {
    return {
      categories: []
    };
  },
  computed: {
    ...mapGetters({ isLogin: "login/IsLogin" }),
    ...mapGetters({ CartItemLength: "shoppingCart/CartItemLength" }),
    ...mapGetters({ IsSeller: "login/IsSeller" }),
    ...mapGetters({ moneyInfo: "wallet/GetWallet" }),
    getUrl: () =>
      function(category) {
        return `/home?category=${category}`;
      }
  },
  async created() {
    await this.$store.dispatch("wallet/init");
    this.categories = (await GetProductsCategories()).categories;
  },
  methods: {
    logout() {
      this.$store.dispatch("login/logout");
      this.$router.push("/home").catch(err => {
        err;
      });
    },
    titleCase(str) {
      const newStr = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
      return newStr;
    }
  }
};
</script> -->

<!-- <style>
body{
  background: #eee;
}

#side_nav{
  background:'black';
  min-width: 250px;
  max-width: 250px;
}

.content{
  min-height: 100vh;
  width: 100%;
}

hr.h-color{
  border: 0;
  background: #eee;
  height: 3px;
}


.sidebar li a{
  color:#fff;
}

</style>
 -->