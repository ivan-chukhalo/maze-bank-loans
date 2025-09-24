const allowedTextCharsRegex = /^[a-zA-Z\u0400-\u04FF\s-]+$/; // Latin and Cyrillic letters, spaces, and hyphens only, no digits or special characters, more than 1 character
const forbiddenTextCharsRegex = /[!@#$%^&*(),.?":{}|<>0-9ёЁыЫэЭъЪ]/; // Exclude digits and specific special characters and ё, Ё, ы, Ы, э, Э, ъ, Ъ
const allowedPhoneValueRegex = /^\+380\d{9}$/; // Phone number must be in the "+380xxxxxxxxx format

const textValuesValidator = {
  validator: function (value) {
    if (forbiddenTextCharsRegex.test(value)) return false;
    return allowedTextCharsRegex.test(value);
  },
  message: (props) => `${props.value} is not a valid text value`,
};

const creationDateValidator = {
  validator: function (value) {
    return value <= new Date();
  },
  message: (props) => `Creation date can not be in the future`,
};

const termValidator = {
  validator: function (value) {
    return Number.isInteger(value) && value >= 12 && value <= 120;
  },
  message: (props) => `Term must be an integer between 12 and 120 months`,
};

export {
  textValuesValidator,
  creationDateValidator,
  termValidator,
  allowedPhoneValueRegex,
};
