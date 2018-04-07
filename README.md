
# Javascript Utility functions

[![Build Status](https://travis-ci.org/p-rk/js-utility-functions.svg?branch=master)](https://travis-ci.org/p-rk/js-utility-functions)


## Example

```shell

$ npm install js-utility-functions --save

```

## Available functions

 * Title Case a string
 * Convert String to an Array [Optional Remove Spaces]
 * Count Instance in an array
 * Sum of an Array [Optional Add Initial Value]

 * Validate Name
 * Validate Mobile number
 * Validate email
 * Validate Option

```Javascript

// ES 2015
import { titleCaseString } from 'js-utility-functions';

const formattedText = titleCaseString('hello world');

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

- - - -

```Javascript

import { validateName } from 'js-utility-functions';

let x = validateName("ra", "Enter Valid Name", 3);
// First argument is value
// Second argument is your custom error message
// Third argument is length of the value you want to validate (optional)
console.log(x);

// Output : {error: true, errorMessage: 'Enter Valid Name'}


import { validateMobile } from 'js-utility-functions';

let x = validateMobile(9999999999, 'Enter Valid Mobile Number');

//validate 10 digit mobile number

console.log(x);

// Output : {error: false, errorMessage: ''}


import { validateEmail } from 'js-utility-functions';

let x = validateMobile('rama.ped', 'Enter Valid Email ID');

//validate 10 digit mobile number

console.log(x);

// Output : {error: true, errorMessage: 'Enter Valid Email ID'}


import { validateOption } from 'js-utility-functions';

let x = validateOption('option', 'Select Valid Option');

//validate an option select

console.log(x);

// Output : {error: false, errorMessage: ''}


For All Validation functions return following object

  Error Case:

  {error: true, errorMessage: 'Your custom message that is passed'}

  No Error Case:

  {error: false, errorMessage: ''}

```
