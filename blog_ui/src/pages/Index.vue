<template>
  <q-page>
    <PostsList />
  </q-page>
</template>

<script>
import PostsList from 'components/posts/PostsList';

export default {
  name: 'BlogIndex',
  components: { PostsList },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
