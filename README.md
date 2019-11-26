I've noticed that a typical way of checking for type matching is done with something like this:

```js
isNumber =>
return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]'
```

This method allocates on each call and will affect the garbage collector performance if executed often (which it is in libraries such as momentjs)


Instead, doing like the folliwng would lead to no allocation.
```js
isNumber =>
return input != null && input.constructor === Number;
```
