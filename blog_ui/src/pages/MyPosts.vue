<template>
  <q-page>
    <PostsList :my-page="true" />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" />
    </q-page-sticky>

    <!-- dialogs -->

  </q-page>
</template>

<script>
import PostsList from 'components/posts/PostsList';

export default {
  name: 'MyPosts',
  components: { PostsList },
  data() {
    return {
      addPostDialog: false,
    };
  },
  computed: {},
  methods: {},
};
</script>
