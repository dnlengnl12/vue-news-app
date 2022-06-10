<template>
  <span>
      <router-link :to="`/user/${this.user}`">{{this.user}}</router-link>
  </span>
</template>

<script>
export default {
    props: ['user']
}
</script>

<style>

</style>