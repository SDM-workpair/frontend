<template>
    <div class="popup-overlay" v-if="show">
      <div class="popup">
        <div class="popup-header">
          <h3 class="gaga">{{ $t('add_new_space') }}</h3>
          
        </div>
        <hr class="h-color mx-2">
        <!-- input-panel -->
        
        <!-- 這裡是配對活動名稱 -->
        <div class="input-panel">
          <label for="input-field">{{ $t('roomName') }}</label>
          <input id="input-field" type="text" :placeholder="$t('inputRoomName')" v-model="inputValue" class="ladyinput">

        </div>
        
        <!-- 這裡是配對日期 -->
          <label for="date" class="datelabel">{{ $t('dueDate') }}</label>
          <div class="dada">
            <Datepicker v-model="selectedDate" :placeholder="$t('inputDate')" class="ladyinput"/>
          </div>
          
        <!-- 這裡是配對人數 -->
        <div class="ladyqua">
          <label for="quantity">{{ $t('roomQuantity') }}</label>
          <input id="quantity" type="number" min="1" max="100" v-model="quantity" class="ladyqua1">
        </div>

        <div class="ladyqua">
          <label for="description">{{ $t('roomDescription') }}</label>
          <textarea class="textArea" id="description" name="description" v-model="description"></textarea>
        </div>

        <div class="ladyhaha">
        <button @click="submitInput" class="ladygaga">{{ $t('add') }}</button>
        <!-- <button class="close-btn" @click="close">&times;</button> -->
        <button  @click="close" class="ladygaga">{{ $t('cancel') }}</button>
        </div>
        <div class="popup-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import Datepicker from "vue3-datepicker";
import "vue3-datepicker/dist/vue3-datepicker.css";

  
  

  export default {
    components: {
      Datepicker,
  },
    data() {
    return {
      inputValue: '',
      selectedDate: null,

      quantity: 1,
      // selectedDate: ''

      description: '',
    }
  },
    props: {
      show: Boolean,
    //   title: String,
    },
    methods: {
      close() {
        this.$emit('close');
      },
      submitInput() {
      // 在這裡處理提交輸入的邏輯
      console.log('輸入的值是：', this.inputValue);
    }
    },
  };
  </script>
  
  <style>

  

  .gaga{
    padding: 1rem;
    margin-bottom: 1px;
    color: black;
    font: bold;
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(248, 245, 245, 0.7); */
    background-color: transparent;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup {
    background-color:rgb(235, 233, 233);
    padding: 1rem;
    border-radius: 1rem;
    width: 600px;
    height: 540px;
    /* max-width: 90%;
    max-height: 90%; */
    overflow-y: auto;
    /* border-color: black;
    border-width: 10px; */
    margin-top: 90px;
  }
  
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  
  .close-btn {
    font-size: 1.5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  .popup-body {
    margin-top: 1rem;
  }

  .input-panel {
  display: flex;
  align-items: center;
  height: 20;
}

.ladyinput {
  flex: 1;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid black;
  background-color: white;
  margin-left: 0.5rem;
  width: 400px;
}

.datelabel{
  position: relative;
  top: 35px;
}

.v3dp__datepicker {
  width: 400px;
  left: 105px;
}

.textArea {
  width: 100%;
  height: 120px;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  margin-top: 10px;
  flex: 1;
  border-radius: 1rem;
  border: 1px solid black;
  background-color: white;
}

/* 按鈕的css */
.ladygaga{
  background-color: white; 
  border: 1px solid black;
  color: black;
  padding: 10px;
  text-align: center;
  /* text-decoration: none; */
  /* display: inline-block; */
  font-size: 15px;
  margin: 4px;
  cursor: pointer;
  border-radius: 1.2rem;
}

.ladyhaha{
  margin-left: 370px;
  
}

.ladyqua{
  margin-top: 10px;

}

.ladyqua1{
  margin-top: 10px;
  flex: 1;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid black;
  background-color: white;
  margin-left: 2.5rem;
  width: 70px;
}



  </style>