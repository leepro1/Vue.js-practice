<template>
  <div>
    <nav>
      <router-link to="/examOne">ExamOne</router-link> | 
      <router-link to="/examTwo">ExamTwo</router-link> | 
      <router-link to="/examThree">ExamThree</router-link> | 
      <router-link to="/examFour">ExamFour</router-link>
    </nav>
    <router-view/>
  </div>
</template>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  width: 700px; 
  margin: 0 auto;
  border: 1px solid #acc;
  text-align: center;
  padding: 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
