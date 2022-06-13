import ListView from './ListView.vue';
import ListMixin from '@/mixins/ListMixin';
export default function createListView(pageName) {
    return {
        name: pageName,
        render(createElement) {
            return createElement(ListView);
        },
        mixins: [ListMixin]
    }
}