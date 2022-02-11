import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import QBUTTON from './demo/QBtn-demo.vue';
import * as All from 'quasar';
// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby :(
const { Quasar, date } = All;

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val;
  }
  return object;
}, {});

describe('Mount Quasar', () => {
  const localVue = createLocalVue();
  localVue.use(Quasar, { components }); // , lang: langEn

  const wrapper = mount(QBUTTON, {
    localVue,
  });
  const vm = wrapper.vm;

  it('creates a wrapper', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('has a created hook', () => {
    expect(typeof vm.increment).toBe('function');
  });

  it('accesses the shallowMount', () => {
    expect(vm.$el.textContent).toContain('rocket muffin');
    expect(wrapper.text()).toContain('rocket muffin'); // easier
    expect(wrapper.find('p').text()).toContain('rocket muffin');
  });

  it('sets the correct default data', () => {
    expect(typeof vm.counter).toBe('number');
    const defaultData2 = QBUTTON.data();
    expect(defaultData2.counter).toBe(0);
  });

  it('correctly updates data when button is pressed', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(vm.counter).toBe(1);
  });

  // eslint-disable-next-line jest/expect-expect
  it('formats a date without throwing exception', () => {
    // test should fail if an exception is thrown
    let formattedString = date.formatDate(Date.now(), 'DD MMM, YYYY');
    console.log('formatted String:', formattedString);
  });
});
