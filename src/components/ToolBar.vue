<template>
  <div class="header">
      <ul>
          <li><router-link to="/news">News</router-link></li>
          <li><router-link to="/ask">Ask</router-link></li>
          <li><router-link to="/jobs">Jobs</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    color: white;
    background-color: #42b883;
    padding: 8px;
}
li {
    margin: 0 5px;
}
.header .router-link-exact-active {
    color: #354952;
}
.header a {
    color: white;
}
</style>