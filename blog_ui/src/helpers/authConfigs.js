import { baseUrl } from 'src/helpers/service';

export default {
  // Endpoints
  loginEndpoint: `${baseUrl}auth/login`,
  registerEndpoint: `${baseUrl}auth/register`,
  refreshEndpoint: `${baseUrl}auth/token/refresh`,
  logoutEndpoint: `${baseUrl}auth/logout`,

  tokenType: 'Bearer',
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
  storageUserDataKeyName: 'userData',
};
