<template>
    <div>
        <p>ExamFour</p>
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
  </style>