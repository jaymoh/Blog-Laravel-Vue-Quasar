import { createWrapper } from '../../../utils';
import AuthRegister from 'src/pages/auth/AuthRegister.vue';

describe('AuthRegister.vue', () => {
  const wrapper = createWrapper(AuthRegister, { type: 'full' });
  const vm = wrapper.vm;
  const button = wrapper.find('button.register-btn');

  it('shows Create Your Account Text', function () {
    expect(wrapper.text()).toMatch('Create Your Account');

    expect(button.text()).toBe('Register');
  });
});
