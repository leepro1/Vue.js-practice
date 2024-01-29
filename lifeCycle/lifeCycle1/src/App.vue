<template>
  <div>
    <li v-for="sample in sampleArr" :key="sample">{{ sample }}</li>
  </div>  
  <div>
    <li v-for="(user, index) in sampleObjectArr" :key="user.id">{{ index }} /{{ user.name }} / {{ user.age }}</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sampleArr : ['a', 'b', 'c', 'd'],
      sampleObjectArr : [
        {id:1, name:'이희주', age:22},
        {id:2, name:'오이주', age:12},
        {id:3, name:'엄주탱', age:25},
        {id:4, name:'손민주', age:42}
      ]
    }
  }
}
</script>

<style scoped>

</style>