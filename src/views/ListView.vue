<template>
  <div>
      <list-component></list-component>
  </div>
</template>

<script>
import ListComponent from '../components/ListComponent.vue';
import ListMixin from '@/mixins/ListMixin';
import bus from '../utils/bus';


export default {
    components: { ListComponent },
    mixins: [ListMixin]
}
</script>

<style>

</style>