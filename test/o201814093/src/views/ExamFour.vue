<template>
    <div>
      <h1>할 일</h1>
      <table>
        <tr>
          <td>Index</td>
          <td>Value</td>
        </tr>
        <tr v-for="todo in todos" v-bind:key="todo.index">
          <td>{{ todo.index }}</td>
          <td>{{ todo.value }}</td>
        </tr>
      </table>
      <ExamFourChild v-on:send="addTodo"></ExamFourChild>
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
        todos: [],
        lastIndex: 0,
      };
    },
    methods: {
      addTodo: function () {
        this.todos.push({ index: ++this.lastIndex, value:this.value });
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    border-bottom: 1px solid gray;
  }
  div {
    padding: 30px;
    margin: 30px auto;
    width: 400px;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 3px #aaa;
  }
  table {
    border-collapse: collapse;
    margin: 20px 0;
    width: 100%;
  }
  tr:nth-child(1) {
    background-color: #eee;
    text-align: center;
  }
  td {
    border: 1px solid gray;
    padding: 6px;
    text-align: center;
    width: 30px;
  }
  </style>