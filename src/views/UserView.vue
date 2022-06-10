<template>
    <div>
        <user-profile>
            <template #username>{{user.id}}</template>
            <span slot="time">{{ 'Joined ' + user.created}}</span>
            <span slot="karma">{{user.karma}}</span>
        </user-profile>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
    computed: {
        ...mapGetters({
            user: 'fetchedUser'
        })
    },
    created() {
        const { id: userName } = this.$route.params;
        this.$store.dispatch('FETCH_USER', userName);
    },
    components: {
        UserProfile
    }
}
</script>

<style>

</style>