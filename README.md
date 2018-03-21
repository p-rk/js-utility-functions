
# Javascript Utility functions

[![Build Status](https://travis-ci.org/p-rk/util-functions.svg?branch=master)](https://travis-ci.org/p-rk/util-functions)


## Example

```shell

$ npm install js-utility-functions --save

```

## Available functions

 * CamelCase Characters in a string
 * Convert String to an Array [Optional Remove Spaces]
 * Count Instance in an array
 * Sum of an Array [Optional Add Initial Value]

```Javascript

// ES 2015
import { CamelCaseString } from 'js-utility-functions';

const formattedText = CamelCaseString('hello world');

console.log(formattedText);

// Output: Hello World

```
- - - -

```Javascript

import { convertStringToArray } from 'js-utility-functions';

let x = convertStringToArray('hello');

Note: Second argument to convertStringToArray is optional for removing spaces default: false

console.log(x);

// Output : ['h', 'e', 'l', 'l', 'o']

* Extra Remove Spaces

let y = convertStringToArray('hello world', true); // if passed true then it removes spaces

console.log(y);

// Output : ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

```

- - - -

```Javascript

import { countInstanceInArray } from 'js-utility-functions';

let data = ['rama', 'dan', 'wes', 'rama', 'dan', 'wes', 'cooper', 'mark'];

let x = countInstanceInArray(data); // this will count no of times each element in array is repeated

console.log(x);

// Output : {rama: 2, dan: 2, wes: 2, cooper: 1, mark: 1}

```

- - - -

```Javascript

import { sumOfAnArray } from 'js-utility-functions';

let data = [1, 2, 3, 4, 5, 6];

let x = sumOfAnArray(data); // this will add up all elements in an array and returns sumOfAnArray

// Second argument is optional and default is 0 .

console.log(x);

// Output : 21

* Extra Add Intial Value

// if you want to add up some initial value you can do so by passing second argument value

let x = sumOfAnArray(data, 10);

console.log(x);

// Output : 31

```
