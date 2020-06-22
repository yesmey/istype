A typical way of checking for type matching is done with something like this:

```js
isNumber =>
return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]'
```

Instead, doing like the folliwng leads to no allocation
```js
isNumber =>
return input != null && input.constructor === Number;
```
