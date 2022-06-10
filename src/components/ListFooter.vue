<template>
  <div>
        <span>{{this.timeago}}</span>
        <span v-if="this.username">
            by <user-link :user="this.username"></user-link>
        </span>
  </div>
</template>

<script>
import UserLink from './UserLink.vue';
export default {
    props: ['propsdata'],
    computed: {
        username() {
            return this.propsdata.user;
        },
        timeago() {
            return this.propsdata.time_ago;
        },
        point() {
            return this.propsdata.point;
        }
    },
    components: {
        'user-link': UserLink
    }
}
</script>

<style scoped>
div {
    color: #828282;
}
</style>