<template>
<!--   
  <div class="red" v-if="isVisible"></div>
  <div class="blue" v-if="isVisible === true"></div>

  <div class="black" v-else></div>
 -->
 <div class="red" v-if="count > -1"></div>
 <button @click="count = -count">v-if버튼</button>

 
 <div class="blue" v-show="isVisible"></div>
 <button @click="isVisible= !isVisible">v-show버튼</button>
</template>

<script>
export default {
  data() {
    return {
      isVisible : true,
      count : 1,
    }
  }
}
</script>

<style scoped>
.red {
  width: 100px;
  height: 100px;

  background-color: red;
}
.blue {
  width: 100px;
  height: 100px;

  background-color: blue;
}
.black {
  width: 100px;
  height: 100px;

  background-color: black;
}

</style>