<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
        <select @change="onChange($event)" style="color:white">
            <option value="zh" style="color:black">繁體中文</option>
            <option value="en" style="color:black">English</option>
        </select>
      <!-- <div>{{ $t('greeting') }}</div>
      <div>{{ $t('goodbye') }}</div> -->
    </div>
  </template>
  
  <script>
  
  export default {
    methods: {
      onChange(event) {
        this.$i18n.locale = event.target.value
        }
      
    }
    // components: {
    //   HelloWorld
    // }
  }


  </script>
  
  <!-- <style>
  #hehe {
    border-color: red
  }
  </style>
   -->