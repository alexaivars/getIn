getIn [![codecov](https://codecov.io/gh/alexaivars/getIn/branch/master/graph/badge.svg)](https://codecov.io/gh/alexaivars/getIn) [![npm version](https://badge.fury.io/js/%40alexaivars%2Fget-in.svg)](https://badge.fury.io/js/%40alexaivars%2Fget-in) [![CircleCI](https://circleci.com/gh/alexaivars/getIn/tree/master.svg?style=svg)](https://circleci.com/gh/alexaivars/getIn/tree/master) [![Greenkeeper badge](https://badges.greenkeeper.io/alexaivars/getIn.svg)](https://greenkeeper.io/)
=========

Get a value from object by path. Path can be a number string or array.
When any value in a path is undefined then getIn will return undefined
or defaultValue if this is provided.

## Installation

`yarn add @alexaivars/get-in`

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
console.log(getIn(context, ["foo", "quux"], "notSetValue")); // "notSetValue"
```

## Tests

`yarn test`
