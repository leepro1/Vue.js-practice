<template>
  <div>
    <nav>
      <router-link to="/ProductListView">제품</router-link> | 
      <router-link to="/counterNum">카운터</router-link> 
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
  text-align: left;
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