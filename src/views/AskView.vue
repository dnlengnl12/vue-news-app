<template>
  <div>
      <div v-for="(item, index) in ask" v-bind:key="index">{{item}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            ask: 'fetchedAsk'
        })
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>