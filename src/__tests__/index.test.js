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
  validateOption,
  getUniqueList,
  validatePassword
} from '../index';

// CamelCase String //

test('Capitalize First Character after Space', () => (
  expect(titleCaseString('hello world')).toBe('Hello World')
));

// String to Array //

test('Convert String to Array', () => (
  expect(convertStringToArray('hello')).toEqual(['h', 'e', 'l', 'l', 'o'])
));

test('Convert String to Array Removing Spaces', () => (
  expect(convertStringToArray('hello world', true)).toEqual(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'])
));

test('Convert String to Array With Spaces', () => (
  expect(convertStringToArray('hello world', false)).toEqual(['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'])
));

// Array Instance Count //

test('Get count of repetetions in Array', () => (
  expect(countInstanceInArray(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'e'])).toEqual({a: 2, b: 2, c: 2, d: 1, e: 1})
));

// Sum up An Array //

test('Sum of an Array', () => (
  expect(sumOfAnArray([1, 2, 3, 4, 5, 6])).toEqual(21)
));

test('Sum of an Array With Initial Value 10', () => (
  expect(sumOfAnArray([1, 2, 3, 4, 5, 6], 10)).toEqual(31)
));

// Find and findeIndex

const sampleArr = [
  { id: 1, name: 'rama' },
  { id: 2, name: 'krishna' },
  { id: 3, name: 'killer' },
  { id: 4, name: 'system' }
]

test('find in array and return obj', () => (
  expect(inArrayOfObjects(sampleArr, 'id', 1)).toEqual({ id: 1, name: 'rama' })
));

test('find in array index and return index', () => (
  expect(findArrayIndex(sampleArr, 'id', 1)).toEqual(0)
));

test('find in array index and return index 1', () => (
  expect(findArrayIndex(sampleArr, 'id', 2)).toEqual(1)
));

/* getUniqueList */
const arr = [
  {
    a: 1,
    b: 2
  },
  {
    a: 2,
    b: 1
  },
  {
    a: 3,
    b: 4
  },
  {
    a: 1,
    b: 2
  },
  {
    a: 2,
    b: 1
  },
  {
    a: 2,
    b: 1
  }
]

test('get unique list from array of objects', () => (
  expect(getUniqueList(arr)).toEqual([
    {
      a: 1,
      b: 2
    },
    {
      a: 2,
      b: 1
    },
    {
      a: 3,
      b: 4
    },
  ])
));


/* Validations Test Cases */

test('should return expected object', () => (
  expect(validationProps(true, 'Please Enter Something'))
    .toEqual({ error: true, errorMessage: 'Please Enter Something' })
));

test('should validate name and return no error object', () => (
  expect(validateName('rama', 'Enter Valid Name')).toEqual({ error: false, errorMessage: ''})
));

test('should isBlank return true', () => (
  expect(isBlank('')).toEqual(true)
));

test('should isBlank return true', () => (
  expect(isBlank('hey')).toEqual(false)
));

test('should validate name and return error object', () => (
  expect(validateName('ra', 'Enter Valid Name')).toEqual({ error: true, errorMessage: 'Enter Valid Name'})
));

test('should validate mobile number and return no error object', () => (
  expect(validateMobile('9999999999', 'Mobile Number Valid')).toEqual({ error: false, errorMessage: ''})
));

test('should validate mobile number and return error object', () => (
  expect(validateMobile('999999999999', 'Enter Valid Mobile Number')).toEqual({ error: true, errorMessage: 'Enter Valid Mobile Number'})
));

test('should validate email address and return no error object', () => (
  expect(validateEmail('rama.ped@gmail.com', 'Enter Valid Email ID')).toEqual({ error: false, errorMessage: ''})
));

test('should validate email address and return error object', () => (
  expect(validateEmail('rama.ped@gmail', 'Enter Valid Email ID')).toEqual({ error: true, errorMessage: 'Enter Valid Email ID'})
));

test('should validate option and return no error object', () => (
  expect(validateOption('Option Selected', 'Please select an option')).toEqual({ error: false, errorMessage: ''})
));

test('should validate option and return error object', () => (
  expect(validateOption('', 'Please select an option')).toEqual({ error: true, errorMessage: 'Please select an option'})
));

//Validate Password
test('should validate Password and return error', () => (
  expect(validatePassword('12345', 'Password Must be altleast 6 characters')).toEqual({ error: true, errorMessage: 'Password Must be altleast 6 characters'})
));

test('should validate Password and should not return error', () => (
  expect(validatePassword('123456', '')).toEqual({ error: false, errorMessage: ''})
));
