<template>
    <div>
        <div v-for="(_news, index) in news" v-bind:key="index">{{_news.title}}</div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index';
export default {
    data() {
        return {
            news: []
        }
    },
    created() {
        fetchNewsList()
            .then(response => this.news = response.data)
            .catch(error => console.log(error))
    }
}
</script>

<style>

</style>