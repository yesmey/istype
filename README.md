Normal way of checking for numbers is done by something like:
```return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]'```

While this method is perhaps marginally faster during execution, it does allocate on each call, so the performance gain is hidden by the garbage collector.