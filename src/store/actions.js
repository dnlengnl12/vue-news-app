import { fetchUserInfo, fetchItemInfo, fetchList } from '../api/index';
export default {
    FETCH_USER({ commit }, username) {
        return fetchUserInfo(username)
            .then(({data}) => commit('SET_USER', data))
    },
    FETCH_ITEM({ commit }, itemId) {
        return fetchItemInfo(itemId)
            .then(({data}) => commit('SET_ITEM', data))
    },
    async FETCH_LIST({ commit }, pageName) {
        try {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;
        } catch(error) {
            console.log(error);
        }
    }
}