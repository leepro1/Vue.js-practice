<template>
    <div>
        <h1>{{ num }}</h1>
        <CounterNumChildView v-on:send="plusNum"></CounterNumChildView>
    </div>
  </template>
  
  <script>
  import CounterNumChildView from "./CounterNumChildView.vue";
  
  export default {
    name: "CounterNumView",
    components: {
        CounterNumChildView
    },
    data() {
      return {
        num: 0
      };
    },
    methods: {
      plusNum() {
        this.num++;
      },
    },
  };
  </script>
  
  <style scoped>
    h1{margin-left: 35px;}
    div{margin: 30px;}
  </style>