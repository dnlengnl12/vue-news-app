<template>
  <div>
      <section>
          <user-profile>
            <user-link slot="username" :user="item.user"></user-link>
            <span slot="time">{{'Posted ' + item.time_ago}}</span>
          </user-profile>
          <!-- <div class="user-container">
              <div>
                  <i class="fa-solid fa-user"></i>
              </div>
              <div class="user-description">
                  <router-link :to="`/user/${item.user}`">
                    {{item.user}}
                  </router-link>
                  <div class="time">
                      {{item.time_ago}}
                  </div>
              </div>
          </div>
          <h2>{{item.title}}</h2> -->
      </section>
      <section>
          <div v-html="item.title"></div>
      </section>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters } from 'vuex';
import UserLink from '@/components/UserLink.vue';
export default {
  components: { UserProfile, UserLink },
    created() {
        const { itemId } = this.$route.params;
        this.$store.dispatch('FETCH_ITEM', itemId);
    },
    computed: {
        ...mapGetters({
            item: 'fetchedItem'
        })
    }
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 10px;
}
.time {
    font-size: 0.7rem;
}
</style>