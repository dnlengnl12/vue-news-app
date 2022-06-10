<template>
    <div>
        <div v-for="(_news, index) in this.$store.state.news" v-bind:key="index">{{_news.title}}</div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>