<template>
  <div class="col">
    <div class="fit">
      <q-card flat elevated class="q-pa-md q-ma-md">
        <div class="flex justify-end q-gutter-lg">
          <q-btn
            size="md"
            class="q-ml-md q-px-sm text-capitalize"
            :icon-right="iconDir"
            @click="handleSortingByPublicationDate"
          >
            Publication Date
          </q-btn>
          <q-input
            style="width: 320px"
            debounce="1000"
            v-model="pagination.searchQuery"
            placeholder="Search..."
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <template v-if="postsResults.data.length">
          <PostItem v-for="(item, index) in postsResults.data" :single-post="item" :key="index" />
          <!-- pagination -->
          <div>
            <div class="float-right q-mr-lg">
              <span class="q-ml-xs q-mb-xs">
                Showing {{ pagination.from || 0 }} to {{ pagination.to || 0 }} of
                {{ pagination.total }} posts
              </span>
              <q-pagination
                class="q-mb-xs q-ml-lg"
                v-model="pagination.page"
                :max="pagination.lastPage"
                direction-links
                :boundary-links="false"
                :boundary-numbers="true"
                :max-pages="5"
                :ellipses="true"
              >
              </q-pagination>
              <div class=""></div>
            </div>
          </div>
        </template>
        <div v-else>No Blog Posts to Show</div>
      </q-card>
    </div>
  </div>
</template>

<script>
import PostItem from 'components/posts/PostItem';
import { isUserLoggedIn } from 'src/helpers/utils';

export default {
  name: 'PostsList',
  components: { PostItem },
  props: {
    myPage: {
      type: Boolean,
      required: false,
      default: function () {
        return false;
      },
    },
  },
  data() {
    return {
      pagination: {
        page: 1,
        perPage: 10,
        total: 0,
        lastPage: 1,
        from: 0,
        to: 0,
        searchQuery: '',
        sortBy: 'id',
        sortDir: 'ASC',
        includeRelations: ['user'],
      },
      iconDir: 'keyboard_arrow_up',
    };
  },
  computed: {
    postsResults() {
      return this.$store.getters['posts/GET_POSTS'];
    },
    fetchingPosts() {
      return this.$store.getters['posts/GET_FETCHING_POSTS'];
    },
    loggedUserData() {
      return this.$store.getters['profile/GET_LOGGED_IN_USER'];
    },
  },
  created() {
    // fetch posts
    if (this.myPage && isUserLoggedIn()) {
      this.pagination.user = this.loggedUserData.id;
    }
    this.actionFetchPosts();
  },

  methods: {
    actionFetchPosts() {
      this.$store
        .dispatch('posts/FETCH_POSTS', this.pagination)
        .then((res) => res)
        .catch((err) => err);
    },
    onPageChange(data) {
      this.pagination.page = data;
      this.actionFetchPosts();
    },

    handleSortingByPublicationDate() {
      this.iconDir =
        this.iconDir === 'keyboard_arrow_up' ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
      this.pagination.sortBy = 'publication_date';
      this.pagination.sortDir = this.iconDir === 'keyboard_arrow_up' ? 'ASC' : 'DESC';
      this.actionFetchPosts();
    },
  },
  watch: {
    'pagination.searchQuery': {
      handler() {
        this.pagination.page = 1;
        this.actionFetchPosts();
      },
    },
    'pagination.page': {
      handler() {
        this.actionFetchPosts();
      },
    },
    postsResults: {
      deep: true,
      handler() {
        if (Object.prototype.hasOwnProperty.call(this.postsResults, 'meta')) {
          this.pagination.total = this.postsResults.meta.total;
          this.pagination.lastPage = this.postsResults.meta.last_page;
          this.pagination.from = this.postsResults.meta.from;
          this.pagination.to = this.postsResults.meta.to;
        }
      },
    },
  },
};
</script>
