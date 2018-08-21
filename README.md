[![codecov](https://codecov.io/gh/alexaivars/getIn/branch/master/graph/badge.svg)](https://codecov.io/gh/alexaivars/getIn)

Get a value from object by path. Path can be a number string or array.
When any value in a path is undefined then getIn will return undefined
or defaultValue if this is provided.

## Installation

`yarn add getin`

## Usage

```javascript
const getIn = require("@alexaivars/get-in");
const context = {
  foo: {
    bar: {
      baz: "waldo"
    }
  }
};

console.log(getIn(context, ["foo", "bar", "baz"])); // waldo
console.log(getIn(context, ["foo", "quux"])); // undefined
console.log(getIn(context, ["foo", "quux"], false)); // false
```

## Tests

`yarn test`
