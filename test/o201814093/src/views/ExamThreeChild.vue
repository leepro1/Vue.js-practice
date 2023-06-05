<template>
  <div class="box" v-bind:class="color">
    <h2>ExamThreeChild</h2>
  </div>
</template>

<script>
export default {
  name: "ExamThreeChild",
  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.box {
  display: inline-block;
  padding: 20px;
  width: 300px;
  border: 1px solid gray;
  box-shadow: 5px 5px 5px #aaa;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}

.red {
  background-color: red;
}
</style>