import axios from 'axios';
const env = process.env.NODE_ENV;
import AppStorage from 'src/helpers/AppStorage';

export const baseUrl =
  env === 'development' || env === 'staging'
    ? process.env.LOCAL_API_URL
    : process.env.PRODUCTION_API_URL;

// create axios object
const http = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
  },
});

// add authorization token to the request
http.interceptors.request.use(
  (request) => {
    request.headers['Authorization'] = `Bearer ${AppStorage.getAccessToken()}`;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// add interceptors for 401 unauthorised request >> we assume the access_token expired
http.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line no-unused-vars
    const { config, response } = error;

    // if status 401 >> means token expired
    if (response && response.status === 401) {
      // clear local storage and reload page to force redirection to login
      AppStorage.clearLocalStorage();
      location.reload();
    }
    // any other error status will be returned
    return Promise.reject(error);
  }
);

export { http };
