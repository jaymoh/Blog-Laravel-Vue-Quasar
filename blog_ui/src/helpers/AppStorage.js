import serviceConfigs from 'src/helpers/authConfigs';

class AppStorage {
  storeUserData(userData) {
    sessionStorage.setItem(serviceConfigs.storageUserDataKeyName, JSON.stringify(userData));
  }

  getUserData() {
    let userString = sessionStorage.getItem(serviceConfigs.storageUserDataKeyName);
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }

  storeAccessToken(token) {
    sessionStorage.setItem(serviceConfigs.storageTokenKeyName, token);
  }

  getAccessToken() {
    return sessionStorage.getItem(serviceConfigs.storageTokenKeyName);
  }

  storeRefreshToken(token) {
    sessionStorage.setItem(serviceConfigs.storageRefreshTokenKeyName, token);
  }

  getRefreshToken() {
    return sessionStorage.getItem(serviceConfigs.storageRefreshTokenKeyName);
  }

  clearLocalStorage() {
    sessionStorage.clear();
  }
}

export default AppStorage = new AppStorage();
