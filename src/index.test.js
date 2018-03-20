import {
  CamelCaseString,
  LocalCurrencyFormat
} from '.';

test('Capitalize First Character after Space', () => (
  expect(CamelCaseString('hello world')).toBe('Hello World')
));

test('Capitalize First Character after Space', () => (
  expect(CamelCaseString('hello world')).toBe('Hello World')
));

test('Get Currency Format in INR', () => (
  expect(LocalCurrencyFormat('100', 'IN')).toBe('100')
));

test('Get Currency Format in INR', () => (
  expect(LocalCurrencyFormat('10000', 'IN')).toBe('10,000')
));

test('Get Currency Format in INR', () => (
  expect(LocalCurrencyFormat('1000000', 'IN')).toBe('10,00,000')
));

test('Get Currency Format in USD', () => (
  expect(LocalCurrencyFormat('1000000', 'US')).toBe('1,000,000')
));
