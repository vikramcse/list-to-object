# list-to-object
Converts lists into objects

## Install

```sh
$ npm install --save list-to-object
```

## Example

```js
var toObj = require('list-to-object');

console.log(toObj([['America', 'Washington'], ['India', 'Mumbai'], ['Canada', 'Ottawa']]));
// -> { America: 'Washington', India: 'Mumbai', Canada: 'Ottawa' }

console.log(toObj(['America', 'India', 'Canada'], ['Washington', 'Mumbai', 'Ottawa']));
// -> { America: 'Washington', India: 'Mumbai', Canada: 'Ottawa' }

```

### `require('list-to-object')(list, [values])`

**Arguments**:
#### If you pass only one argument i.e list then,
- `list`: list be the single array of `[key, value]` pairs

#### If you pass two arguments i.e two parallel arrays of the *same length* one of keys, and other of the corresponding values.
- `list`: list of keys
- `values`: list of values

**Returns**: Returns the object of key value pairs

## License

&copy; 2016 Vikram Jadhav. MIT License
