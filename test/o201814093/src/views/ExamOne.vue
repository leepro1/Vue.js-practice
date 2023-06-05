<template>
    <div>
        <h1>ExamOne</h1>
        <p>{{ studentId }}</p>
        <p>{{ name }}</p>
        <p>{{ nowTime }}</p> 
    </div>
</template>
  
  <script>
  export default {
    name: "ExamOne",
    data(){
      return{
        studentId: "201814093",
        name: "이희주",
        nowTime: new Date() 
      };
    }
  };
</script>
  
<style scoped>
</style>