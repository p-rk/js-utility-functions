import {
  titleCaseString,
  convertStringToArray,
  countInstanceInArray,
  sumOfAnArray,
  inArrayOfObjects,
  findArrayIndex,
  validationProps,
  isBlank,
  validateName,
  validateMobile,
  validateEmail,
  validateOption
} from '../index';


test('Should return function', () => (
  expect(titleCaseString).toBeFunction()
));

test('Should return function', () => (
  expect(convertStringToArray).toBeFunction()
));
