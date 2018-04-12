export const titleCaseString = data => {
  const x = data.toLowerCase();
  const pp = x.split(' ');
  return pp.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export const convertStringToArray = (para, removeSpaces = false) => {
  const arr = [...para];
  return (removeSpaces) ?
    arr.filter(item => item !== ' ') : arr;
};

export const countInstanceInArray = arr => arr.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {});

export const sumOfAnArray = (arr, initialValue = 0) => arr.reduce((a, b) => a + b, initialValue);

export const inArrayOfObjects = (arr, key, value) => arr.find(ar => ar[key] === value);

export const findArrayIndex = (arr, key, value) => arr.findIndex(ar => ar[key] === value);
