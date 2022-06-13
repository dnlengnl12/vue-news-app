import bus from "./bus";
import { store } from "@/store";

export const listBeforeEnter = (to, from, next) => {
    bus.$emit('start:spinner');
    store.dispatch('FETCH_LIST', to.name)
        .then(() => {
            // bus.$emit('end:spinner');
            next();
        });
}