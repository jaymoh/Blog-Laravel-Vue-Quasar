<template>
  <q-card flat elevated class="q-pa-sm q-ma-sm">
    <q-card-section class="q-pt-xs">
      <div class="text-h5 q-mt-sm q-mb-xs">{{ singlePost.title }}</div>
      <div class="text-caption text-grey-10">
        {{ singlePost.description }}
      </div>
      <div class="flex justify-between">
        <small class="q-mt-lg">{{ prettyDate(singlePost.publication_date) }}</small>
        <small class="text-overline q-mt-lg">{{ singlePost.relationships.user.username }}</small>
      </div>
    </q-card-section>
    <q-separator />
  </q-card>
</template>

<script>
import { date } from 'quasar';
export default {
  name: 'PostItem',
  props: {
    singlePost: {
      type: Object,
      required: true,
    },
  },
  methods: {
    prettyDate(value) {
      return date.formatDate(value, 'DD MMM, YYYY');
    },
  },
};
</script>

<style scoped></style>
