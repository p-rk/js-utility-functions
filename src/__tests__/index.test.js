import {
  camelCaseString,
  convertStringToArray,
  countInstanceInArray,
  sumOfAnArray
} from '../index';

// CamelCase String //

test('Capitalize First Character after Space', () => (
  expect(camelCaseString('hello world')).toBe('Hello World')
));

test('Capitalize First Character after Space', () => (
  expect(camelCaseString('hello world')).toBe('Hello World')
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
