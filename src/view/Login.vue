<template>
<v-app>
<v-app-bar color="black">
        <v-spacer></v-spacer>
        <ChangeLang />
</v-app-bar>

<body bgcolor="black">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>style="text-align:center;"
    <br>margin:auto
    <!-- <div v-is='script src="https://accounts.google.com/gsi/client" async defer'> -->
            <!-- <script src="https://accounts.google.com/gsi/client" async defer></script> -->
            <div  style="text-align:center;">
                <font face="monospace" style="color:white;" size="10">Teamatch</font>
                <h1 style="color:white;">{{ $t('loginMessage') }}</h1>
            </div>
            <div class="center">
                <div id="g_id_onload"
                        data-client_id="1053350950008-u5aj1t8vr0if3hlf80etdaaf7g8odadg.apps.googleusercontent.com"
                        data-login_uri="http://localhost:8000/api/v1/auth/sso-login"
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

        <!-- </div> -->
</body>
</v-app>
</template>
<script>
import ChangeLang from "../components/ChangeLang.vue";
export default {
    components: {
      ChangeLang
    }
  };
</script>
<style>
    .center {
  display: flex;
  justify-content: center;
  height: 100vh;
}
</style>