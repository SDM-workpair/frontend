<template>
 
    <!-- 這邊語謙的login要加 才不會有上面白白的 -->
    <v-app-bar app color="black">
         
          <v-spacer></v-spacer>
          {{ $t('language') }} : <ChangeLang />
    </v-app-bar>


    <v-main style="background-color: black;">
      
        <div style="text-align:center;">
        <font size="6" color="white" face="Arial Black">Teamatch</font>
                  <h2 style="color:white">{{ $t('loginMessage') }}<font size="6" color="white" face="Arial Black">Teamatch</font></h2>
        </div>
        
              <div class="center">
                  <div id="g_id_onload"
                          data-client_id="1053350950008-u5aj1t8vr0if3hlf80etdaaf7g8odadg.apps.googleusercontent.com"
                          data-callback="handleCallback"
                          data-auto_prompt="false" style="text-align: center;">
                          
                  </div>
                  <div class="g_id_signin"
                          data-type="standard"
                          data-size="large"
                          data-theme="outline"
                          data-text="sign_in_with"
                          data-shape="rectangular"
                          data-logo_alignment="center"
                          data-width=328
                          style="text-align: center;">
                  </div>
                  
                  
       
              </div>
              
  
            </v-main>

  
  </template>
  <script>
  import ChangeLang from "../components/ChangeLang.vue";
  export default {
    components: {
      ChangeLang
    },
  };
  
  window.handleCallback = (response) => {
    console.log("here");
    console.log(response);
    console.log(response.credential);
  
  
    fetch("http://localhost:8000/api/v1/auth/sso-login", {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({credential: response.credential})
    })
    .then(response => response.json())
    .then(data => {
      //const params = new URLSearchParams();
      //params.append('data', JSON.stringify(data));
      //window.location.href = 'http://localhost:8080/?' + params.toString();
  
      sessionStorage.setItem('data', JSON.stringify(data));
      window.location.href = 'http://localhost:8080/';
      
      console.log(data); // The response data
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  
    //window.location.href = 'http://localhost:8080/';
  }
    
  </script>
  <style>
      .center {
    display: flex;
    justify-content: center;
    height: 100vh;
  }
  </style>