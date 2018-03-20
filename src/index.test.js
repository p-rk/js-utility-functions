import { CamelCaseString } from '.';

test('Capitalize First Character after Space', () => (
  expect(CamelCaseString('hello world')).toBe('Hello World')
));
