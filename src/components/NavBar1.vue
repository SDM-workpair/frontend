<template>
    <v-main>
      <v-app-bar color="black">
        <SearchBar />
        <v-spacer></v-spacer>
        <ChangeLang />
      </v-app-bar>
      <v-navigation-drawer color="black">
        
        <!-- <v-list>
          
          
        </v-list> -->
      </v-navigation-drawer>
  
      <router-view />
    </v-main>
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
  
  <style>
  #logo {
    width: 250px;
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
  