# URL parameter handling and type conversion

## Installation

Compatible with ES5+

```sh
$ npm install --save params-ew
```

## Usage
```js
try {
    var userId = params.ensureType('integer', req, 'query', 'user_id');
} catch(err) {
    …
}
```

## Running tests

```sh
$ npm install --only=dev
$ npm install mocha // or npm install -g mocha
$ npm test
```

# TODO
- complete documentation
- complete tests