## Example

```shell

$ npm install js-utility-functions --save

```

## Available functions

 * CamelCase Characters in a string
 * Currency Formatter


```Javascript

// ES 2015
import { CamelCaseString } from 'js-utility-functions';

const formattedText = CamelCaseString('hello world');

console.log(formattedText);

// Output: Hello World

- - - -

import { LocalCurrencyFormat } from 'js-utility-functions';

const formattedCurrency = LocalCurrencyFormat('10000', 'en-IN');

// You can pass first argument the money or amount you want to format.
// Second argument you can pass the locales more check here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

console.log(formattedCurrency);

// Output: 10,000





```
