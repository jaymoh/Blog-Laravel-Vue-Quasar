import Vue from 'vue';
import VueRouter from 'vue-router';
import { Store as store } from 'src/store/index';

import routes from './routes';
import { isUserLoggedIn } from 'src/helpers/utils';

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  /**
   * Before a route is resolved we check for
   * the token if the route is marked as
   * requireAuth.
   */
  Router.beforeEach(async (to, from, next) => {
    if (isUserLoggedIn() && !store.getters['profile/GET_LOGGED_IN_USER'].username) {
      // fetch user data once on application reload
      await store.dispatch('profile/FETCH_LOGGED_IN_USER', {}).then((response) => {});
    }

    // access control
    const auth = to.meta.requiresAuth;
    const pathRole = to.meta.role || false;
    const redirectLoggedIn = to.meta.redirectIfLoggedIn || false;

    //set page title
    document.title = to.meta.title;

    /**
     * public path proceed
     * doesn't require auth
     */
    if (!isUserLoggedIn() && !auth) {
      next();
    }

    /**
     * if route requires a logged-in user;
     * and the user is not authenticated redirect to log in
     */
    if (!isUserLoggedIn() && auth) {
      next({
        name: 'AuthLogin',
      });
    }

    /**
     * If route requires auth
     *
     * And user is logged in, proceed
     */
    if (isUserLoggedIn() && auth) {
      next();
    }

    /**
     * if user is logged in
     * and this is an authentication route
     * redirect to homepage
     */
    if (isUserLoggedIn() && redirectLoggedIn) {
      next({
        name: 'BlogHome',
      });
    }

    /**
     * if route doesn't require auth
     * and user is logged in just proceed
     */
    if (isUserLoggedIn() && !auth) {
      next();
    }
  });

  return Router;
}
