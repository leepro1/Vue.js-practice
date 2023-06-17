<template>
    <div>
        <button type="button" @click="$emit('send')">++</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "CounterNumChildView",
    data() {
      return {
      };
    }
  };
  </script>
  
  <style scoped>
  button{
    background-color: gray;
    padding: 6px 15px;
  }
  </style>