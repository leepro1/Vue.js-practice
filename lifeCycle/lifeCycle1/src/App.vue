<template>
  <div>{{ rawHtml }}</div>
  <div>{{ rawHtml2 }}</div>
  <h1 v-html="rawHtml2"></h1>
  
  <h2 v-bind:class="{active:isActive}">액티브</h2>
  <h2 :class="{active:isActive}">액티브</h2>
  <button @click="change">버튼</button>

  <h3 :style="{color:'blue'}">스타일 바인딩 테스트</h3>
</template>

<script>
export default {
  data() {
    return {
      rawHtml: '이것은 텍스트입니다.',
      rawHtml2: '<span style="color:red">이것은 빨간색입니다.</span>',
      isActive: false,
    }
  },
  methods: {
    change() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
h2.active {
  color:aquamarine
}
</style>