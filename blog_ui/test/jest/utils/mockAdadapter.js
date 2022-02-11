import { http } from 'src/helpers/service';

const MA = require('axios-mock-adapter');

export default class MockAdapter {
  constructor() {
    this.mock = new MA(http);
  }

  onPost(url, response, code = 200) {
    this.mock.onPost(url).reply(code, response);
  }

  reset() {
    this.mock.reset();
  }
}
