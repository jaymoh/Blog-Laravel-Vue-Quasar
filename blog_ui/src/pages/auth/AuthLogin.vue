<template>
  <q-page class="overlay-heavy force-center">
    <div class="text-center">
      <router-link to="/">
        <img :src="logoImgUrl" class="logo-style responsive" alt="BlogTest" />
      </router-link>
      <h4 class="h4 q-mt-lg q-ma-none">Sign into Your Account</h4>
      <div class="login-box q-mt-xl">
        <q-form ref="loginForm">
          <q-input
            size="sm"
            label="Email"
            type="email"
            class="q-ma-lg"
            v-model="loginForm.email"
            trim
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Email Required']"
          >
            <template v-slot:prepend>
              <q-icon size="sm" name="mail" class="q-ml-md" />
            </template>
          </q-input>

          <q-input
            size="sm"
            label="Password"
            class="q-ma-lg"
            type="password"
            v-model="loginForm.password"
            trim
            @keydown.enter.prevent="loginUser()"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Password Required']"
          >
            <template v-slot:prepend>
              <q-icon size="sm" name="lock" class="q-ml-md" />
            </template>
          </q-input>
        </q-form>

        <div class="q-mt-xs q-mr-xl q-ml-xl q-mb-xs">
          <q-btn
            :loading="loading"
            :disable="loading"
            rounded
            color="grey"
            class="login-btn full-width q-pa-sm q-ma-md text-capitalize"
            @click="loginUser()"
          >
            <span class="text-h5">Login</span>
            <template v-slot:loading>
              <q-spinner-facebook />
            </template>
          </q-btn>
        </div>
        <div class="q-mb-xl text-subtitle1">
          <router-link style="text-decoration: none" :to="{ name: 'AuthRegister' }">
            Register
          </router-link>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { showMissingFieldsErrors, showNotification } from 'src/helpers/utils';
import { appendForm } from 'src/helpers/formHelpers';
import { http } from 'src/helpers/service';
import AppStorage from 'src/helpers/AppStorage';

export default {
  name: 'AuthLogin',
  data() {
    return {
      logoImgUrl: 'img/logo.jpg',
      loginForm: {
        email: '',
        password: '',
      },
      loading: false,
    };
  },
  methods: {
    loginUser() {
      this.$refs.loginForm.validate().then((success) => {
        if (success) {
          this.loading = true;
          http
            .post('auth/login', appendForm(this.loginForm))
            .then((response) => {
              this.loading = false;

              const userData = response.data.user;
              userData.role =
                userData.relationships.roles && userData.relationships.roles.length
                  ? userData.relationships.roles[0].name
                  : 'user';

              AppStorage.storeAccessToken(response.data.access_token);
              AppStorage.storeRefreshToken(response.data.refresh_token);

              // commit to storage
              this.$store.commit('profile/SET_LOGGED_IN_USER', userData);
              showNotification(this, 'positive', 'Login Success');
              // redirect user here
              this.$router.push({ name: 'MyPosts' });
            })
            .catch((err) => {
              this.loading = false;
              showMissingFieldsErrors(this, err);
            });
        } else {
          showNotification(this, 'negative', 'Please provide your credentials');
        }
      });
    },
  },
};
</script>

<style scoped lang="sass">
.overlay-heavy
  width: 100%
  min-height: 100%
  height: 100vh
  overflow: scroll
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(255,255,255, 0.50)
  z-index: 2
  opacity: 1

.logo-style
  height: 60px

.login-box
  background: #ffffff 0% 0% no-repeat padding-box
  border: 1px solid #707070
  border-radius: 10px 50px 10px 50px
  opacity: 0.62
  width: auto
  height: auto

.force-center
  display: flex
  justify-content: center
  align-items: center
</style>
