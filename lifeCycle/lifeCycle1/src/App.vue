<template>
  <div>
    {{ count }}
    <h1>라이프사이클 test</h1>
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
    this.test()
  },
  created(){
    console.log("lifeCycle is created", this.count)
  },
  beforeMount(){
    console.log("lifeCycle is beforeMount", document.querySelector("h1"))
  },
  mounted(){
    console.log("lifeCycle is mounted", document.querySelector("h1"))
  },
  methods: {
    test(){
      console.log("test 함수입니다.")
    }
  }
}
</script>