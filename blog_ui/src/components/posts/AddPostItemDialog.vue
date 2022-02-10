<template>
  <q-card class="q-pa-md q-ma-md" style="width: 700px; max-width: 80vw">
    <q-toolbar>
      <q-toolbar-title class="text-center"> Add a Post </q-toolbar-title>
    </q-toolbar>
    <hr />
    <q-card-section>
      <q-form ref="addPostForm">
        <q-input
          size="sm"
          label="Title"
          type="text"
          class="q-ma-sm"
          v-model="addPostForm.title"
          trim
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Title Required']"
        />
        <q-input
          size="sm"
          label="Description"
          type="textarea"
          class="q-ma-sm"
          v-model="addPostForm.description"
          trim
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Description Required']"
        />
        <q-input
          filled
          label="Publication Date"
          v-model="addPostForm.publication_date"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="addPostForm.publication_date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-form>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        size="md"
        class="q-pl-md q-pr-md q-mr-md text-black text-capitalize"
        label="Cancel"
        :disable="submitting"
        v-close-popup
      />
      <q-btn
        size="md"
        color="primary"
        outline
        class="q-pl-md q-pr-md q-mr-md text-capitalize"
        :loading="submitting"
        :disable="submitting"
        @click="btnSubmitPost"
      >
        Submit
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import {
  showMissingFieldsErrors,
  showNotification,
  showSuccessNotification,
} from 'src/helpers/utils';

export default {
  name: 'AddPostItemDialog',
  data() {
    return {
      addPostForm: {
        title: '',
        description: '',
        publication_date: '',
      },
      submitting: false,
    };
  },

  methods: {
    btnSubmitPost() {
      this.$refs.addPostForm.validate().then((success) => {
        if (success) {
          this.submitting = true;
          this.$store
            .dispatch('posts/ADD_POST', this.addPostForm)
            .then((response) => {
              this.submitting = false;
              this.$emit('success');
              showSuccessNotification(this, 'Your post has been saved successfully');
            })
            .catch((err) => {
              this.submitting = false;
              showMissingFieldsErrors(this, err);
            });
        } else {
          showNotification(this, 'negative', 'Please fill the fields');
        }
      });
    },
  },
};
</script>

<style scoped></style>
