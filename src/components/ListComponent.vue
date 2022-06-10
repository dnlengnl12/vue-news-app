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
    data() {
        return {
            dataName: []
        }
    },
    computed: {
        listItem() {
            return this.$store.getters[this.dataName[1]]
        }
    },
    created() {
        bus.$emit('start:spinner');
        const { name } = this.$route;
        this.dataName = this.getDataName(name);
        this.$store.dispatch(`${ this.dataName[0] }`);
        bus.$emit('end:spinner');
    },
    methods: {
        getDataName(fetchName) {
            switch (fetchName) {
                case 'news':
                    return ['FETCH_NEWS', 'fetchedNews'];
                case 'ask':
                    return ['FETCH_ASK', 'fetchedAsk'];
                case 'jobs':
                    return ['FETCH_JOBS','fetchedJobs'];
            }
            return null;
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