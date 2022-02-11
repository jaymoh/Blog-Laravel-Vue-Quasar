import { mount, createLocalVue } from '@vue/test-utils';
import Error404 from 'src/pages/Error404.vue';

describe('Error404.vue', () => {
  it('should render Oops', function () {
    const wrapper = mount(Error404);

    expect(wrapper.text()).toMatch('Oops. Nothing here...');
  });
});
