<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
export default {
  data() {
      return {
        count: 0,
      }
  },
  beforeCreate(){
    console.log("lifeCycle is beforeCreate", this.count)
  },
  created(){
    console.log("lifeCycle is created", this.count)
  }
}
</script>