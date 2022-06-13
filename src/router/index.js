import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import { listBeforeEnter } from '../utils/commonApi';
import { store } from '../store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: createListView('NewsView'),
            beforeEnter: (to, from, next) => listBeforeEnter(to, from, next)
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
            beforeEnter: (to, from, next) => listBeforeEnter(to, from, next)
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
            beforeEnter: (to, from, next) => listBeforeEnter(to, from, next)
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:itemId',
            component: ItemView
        },
        {
            path: '*',
            redirect: '/news'
        }
    ]
});