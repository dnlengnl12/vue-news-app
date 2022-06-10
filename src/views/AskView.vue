<template>
  <div>
      <list-component :titlelink="'/item'"></list-component>
  </div>
</template>

<script>
import ListComponent from '@/components/ListComponent.vue';

export default {
    components: {
        'list-component': ListComponent
    }
}
</script>

<style>

</style>