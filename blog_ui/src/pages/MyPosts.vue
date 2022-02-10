<template>
  <q-page>
    <PostsList :my-page="true" ref="PostsListRef" />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" @click="addPostDialog = !addPostDialog" />
    </q-page-sticky>

    <!-- dialogs -->
    <q-dialog v-model="addPostDialog">
      <AddPostItemDialog @success="successEvent" />
    </q-dialog>
  </q-page>
</template>

<script>
import PostsList from 'components/posts/PostsList';
import AddPostItemDialog from 'components/posts/AddPostItemDialog';

export default {
  name: 'MyPosts',
  components: { PostsList, AddPostItemDialog },
  data() {
    return {
      addPostDialog: false,
    };
  },
  computed: {},
  methods: {
    successEvent() {
      this.addPostDialog = false;
      // reload posts list
      this.$refs.PostsListRef.actionFetchPosts();
    },
  },
};
</script>
