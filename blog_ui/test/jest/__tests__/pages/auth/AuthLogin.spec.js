import AuthLogin from 'src/pages/auth/AuthLogin.vue';
import { createWrapper } from '../../../utils';

describe('AuthLogin.vue', () => {
  const wrapper = createWrapper(AuthLogin, { type: 'full' });
  const vm = wrapper.vm;
  const button = wrapper.find('button.login-btn');

  it('shows Sign in Text', function () {
    expect(wrapper.text()).toMatch('Sign into Your Account');

    expect(button.text()).toBe('Login');
  });

  it('submits the email and password when form is filled', async () => {
    vm.email = 'jamesshisiah@gmail.com';
    vm.password = '123Secret';

    expect(typeof vm.loginUser).toBe('function');

    const spyLoginUser = jest.spyOn(vm, 'loginUser');

    await button.trigger('click');
    await vm.$nextTick();

    expect(spyLoginUser).toBeCalled();
  });
});
