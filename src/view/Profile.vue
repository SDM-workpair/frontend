<template>
    
  <v-app>
      
  <!-- 這一行要加 不然會有不置中的問題 -->
  <v-navigation-drawer></v-navigation-drawer>
  <!--  -->

      <!-- 改這個地方!!!!!! -->
      <v-main>
        <h2 class="text-left hahaMR">&nbsp&nbsp&nbsp&nbsp{{$t('myProfile')}}</h2>
        <hr class="h-color mx-2">
    
        <v-container fluid class="profileBody">
      <div class="avatar profileBody"> 
        <img src="avatar.png" alt="User Avatar">
      </div>

      <div class="name-info">
        <label for="name">{{ $t('name') }}:</label>
        <span id="name"></span>
      </div>

      <div class="email-info">
        <label for="email">{{ $t('email') }}:</label>
        <span id="email"></span>
      </div>

      <div class="id-info">
        <label for="id">{{ $t('my_id') }}:</label>
        <input type="text" id="id" disabled>
        <button @click="editId" v-if="!editing">{{ $t('edit') }}</button>
        <div v-if="editing">
          <button @click="confirmEdit" class="hiProfile">{{ $t('confirm') }}</button>
          <button @click="cancelEdit" class="hiProfile">{{ $t('cancel') }}</button>
        </div>
      </div>


          <!-- 给应用提供合适的间距 -->
          <v-container >

          <!-- 如果使用 vue-router -->
              <router-view></router-view>
          </v-container>
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
},
data() {
  return {
    editing: false,
    originalId: "",
    newId: ""
  };
},
methods: {
  async fetchUserProfile() {
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/profile/me', {
        credentials: 'include'
      });
      const data = await response.json();
      // 取得姓名和email並更新HTML
      document.getElementById('name').textContent = data.data.name;
      document.getElementById('email').textContent = data.data.email;
      document.getElementById('id').value = data.data.line_id;
      console.log("hihi");
      console.log(data.data.line_id);
      this.originalId = data.data.line_id;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  },
  editId() {
    this.editing = true;
    document.getElementById('id').disabled = false;
    this.newId = this.originalId;
  },
  
  async confirmEdit() {
    try {
        console.log("1");
        console.log("wdit");
        console.log(document.getElementById('id').value);
        const response = await fetch('http://localhost:8000/api/v1/users/profile', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: document.getElementById('name').textContent,
          line_id: document.getElementById('id').value,
          image: "null"
        })
      });
      const data = await response.json();
      if (response.ok) {
        document.getElementById('id').disabled = true;
        this.editing = false;
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  },
  cancelEdit() {
    this.editing = false;
    document.getElementById('id').disabled = true;
  }
},
mounted() {
  this.fetchUserProfile();
}
};
</script>
<style>

.hahaMR {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 80px;
}

.avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: gray;
    margin-top: 50px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .email-info {
    margin-top: 10px;
  }
  label {
    display: flex;
    margin-right: 10px;
  }

  .profileBody {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
  }
  .profile_h1 {
    margin-top: 20px;
  }

  .hiProfile {
    margin-right: 20px;
    font-size: 1rem;
  }

</style>

<!-- <style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
  }
  h1 {
    margin-top: 20px;
  }
  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: gray;
    margin-top: 50px;
  }
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .email-info {
    margin-top: 10px;
  }
  label {
    display: flex;
    margin-right: 10px;
  }
</style> -->