import * as Exports from '../index';


test('Should return function', () => {
  const func = Object.values(Exports);
  func.map(fun => expect(fun).toBeFunction())
})
