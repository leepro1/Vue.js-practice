<template>
    <div>
        <p>ExamFourChild</p>
        <input type="text" v-model="value" />
        <button type="button" @click="$emit('send', value)">전달</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ExamFourChild",
    data() {
      return {
        value: "",
      };
    }
  };
  </script>
  
  <style scoped>
  input{
    padding: 5px;
    margin-right: 5px;
    width: 200px;
  }
  div{
    background-color: yellow;
    margin: auto;
    padding: 10px;
  }
  button{
    padding: 6px 15px;
  }
  </style>