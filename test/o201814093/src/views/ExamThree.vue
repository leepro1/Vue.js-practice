<template>
    <div>
      <h1>ExamThree</h1>
      <div>
        <select v-model="selectedColor">
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
      </div>
      <ExamThreeChild v-bind:color="selectedColor" />
  </div>
</template>

<script>
import ExamThreeChild from "./ExamThreeChild.vue";

export default {
  name: "ExamThree",
  components: {
    ExamThreeChild
  },
  data() {
    return {
      selectedColor: "yellow",
    };
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 10px;
}
select {
  margin-bottom: 20px;
}
</style>