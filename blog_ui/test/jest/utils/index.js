import { mountQuasar, qLayoutInjections } from '@quasar/quasar-app-extension-testing-unit-jest';
import * as All from 'quasar';
import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { Store } from 'src/store';

const { Quasar } = All;

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val;
  }
  return object;
}, {});

/** Example **/
const propsObj = {
  propsData: {
    prop1: 'value',
  },
};
const mountOptionsObj = { type: 'full' };

export const createWrapper = (component, mountOptions = {}, propsData = {}) => {
  const localVue = createLocalVue();

  // localVue.use(Quasar);
  localVue.use(Vuex);
  localVue.use(VueRouter);

  localVue.use(Quasar, { components });

  return mountQuasar(component, {
    quasar: { components: {} },
    mount: {
      localVue,
      store: Store,
      router: new VueRouter(),
      provide: qLayoutInjections(),
      mocks: { lang: 'en' },
      ...mountOptions,
    },
    ...propsData,
  });
};
