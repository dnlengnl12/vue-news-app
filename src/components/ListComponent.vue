<template>
  <div>
      <list-box v-for="(item, index) in listItem" :key="index" :propsdata="item">
        <template #content>
            <template v-if="item.domain">
                <a v-bind:href="item.url">
                    <list-content :propsdata="item.title"></list-content>
                </a>
            </template>
            <template v-else>
                <template v-if="titlelink">
                    <router-link :to="`${titlelink}/${item.id}`">
                        <list-content :propsdata="item.title"></list-content>
                    </router-link>
                </template>
                <template v-else>
                    <list-content :propsdata="item.title"></list-content>
                </template>
            </template>
        </template>
        <template #footer>
            <list-footer :propsdata="item"></list-footer>
        </template>
      </list-box>
  </div>
</template>

<script>
import ListBox from './ListBox.vue';
import ListContents from './ListContents.vue';
import ListFooter from './ListFooter.vue';
import bus from '../utils/bus';

export default {
    props: ['titlelink'],
    computed: {
        listItem() {
            return this.$store.state.list;
        }
    },
    components: {
        'list-box': ListBox,
        'list-content': ListContents,
        'list-footer': ListFooter
    }
}
</script>

<style>

</style>