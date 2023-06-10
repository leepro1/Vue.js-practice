<template>
    <div>
      <h1>ExamFour</h1>
      <table>
        <tr>
          <td>Index</td>
          <td>Value</td>
        </tr>
        <tr v-for="(value, index) in list" v-bind:key="value">
          <td>{{ index }}</td>
          <td>{{ value }}</td>
        </tr>
      </table>
      <ExamFourChild v-on:send="addList"></ExamFourChild>
    </div>
  </template>
  
  <script>
  import ExamFourChild from "./ExamFourChild.vue";
  
  export default {
    name: "ExamFour",
    components: {
      ExamFourChild
    },
    data() {
      return {
        list: [],
        lastIndex: 0,
      };
    },
    methods: {
      addList(value) {
        this.list.push(value);
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    border-collapse: collapse;
    width: 400px;
    margin: 0 auto 20px auto;
  }
  td {
    padding: 5px;
    border: 1px solid #aaa;
    text-align: center;
  }
  tr:nth-child(1) {
    background-color: #ddd;
  }
  </style>