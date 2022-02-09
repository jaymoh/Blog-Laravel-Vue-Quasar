import AppStorage from 'src/helpers/AppStorage';

export const formatString = function (string) {
  return string.replace(/_/g, ' ');
};

// ('positive', 'negative', 'warning', 'info', 'ongoing')
export const showNotification = function (vm, type, message, position = 'top-right') {
  vm.$q.notify({
    type: type,
    message: message,
    position: position,
  });
};

export const showSuccessNotification = function (vm, message = 'Success!', position = 'top-right') {
  vm.$q.notify({
    type: 'positive',
    message: message,
    position: position,
  });
};

export const showErrorNotification = function (
  vm,
  error,
  message = 'Sorry! An error occurred, please try again shortly'
) {
  message = prepareErrorMessage(error, message);
  showNotification(vm, 'negative', message);
};

const prepareErrorMessage = function (
  error,
  message = 'Sorry! An error occurred, please try again shortly'
) {
  message = error.message ? error.message : message; // in case of network error, this is picked

  if (error.response && error.response.data && error.response.data.message) {
    // this picks error response from backend
    message = error.response.data.message;
  }

  return message;
};

export const showMissingFieldsErrors = function (vm, error) {
  let errors = [];
  if (error.response && error.response.data && error.response.data.errors) {
    errors = Object.values(error.response.data.errors);
  }
  if (errors.length !== 0) {
    errors.forEach((err) => {
      showNotification(vm, 'negative', err);
    });
  } else {
    showErrorNotification(vm, error);
  }
};

const objectNotification = function (vm, notification) {
  vm.$q.notify(notification);
};

// check email format
const emailFormat = (val) => {
  const regex =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

  return regex.test(val) || 'Invalid email';
};

// check field is empty
const hasWhiteSpacesOnly = (val) => {
  return val.replace(/\s/g, '').length || 'Field is empty';
};

// check correct phone format
const { phone } = require('phone');
const phoneValid = (val) => {
  return phone(val, { country: 'KE' }).isValid || 'Invalid Phone Number';
};

export const isUserLoggedIn = function () {
  return !!AppStorage.getAccessToken();
};

export const headersToSkip = [
  'id',
  'relationships',
  'created_at',
  'updated_at',
  'updated_by',
  'is_active',
];

export const createHeaderObjectArray = function (
  headersArray,
  addSelectColumn = false,
  headerSkip = null
) {
  if (!headerSkip) {
    headerSkip = headersToSkip;
  }
  let columnObjects = [];

  if (addSelectColumn) {
    columnObjects.push({
      name: 'select',
      sortable: false,
      label: 'Select',
      field: '',
      headerClasses: 'bg-grey-3 text-capitalize',
      align: 'center',
    });
  }

  headersArray.map((header) => {
    if (!headerSkip.includes(header)) {
      let obj1 = {
        name: header,
        sortable: false,
        label: formatString(header),
        field: header,
        headerClasses: 'bg-grey-3 text-capitalize',
        align: 'center',
      };
      columnObjects.push(obj1);
    }
  });

  return columnObjects;
};

export default {
  formatString,
  showNotification,
  showSuccessNotification,
  showErrorNotification,
  prepareErrorMessage,
  showMissingFieldsErrors,
  objectNotification,
  emailFormat,
  hasWhiteSpacesOnly,
  phoneValid,
};
