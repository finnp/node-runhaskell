# runhaskell

For the joys project for calling haskell functions in node. Install with `npm install runhaskell`.
Watch out for endless lists and other not terminating haskell programs.

# Callback usage
```js
var runhaskell = require('runhaskell')
runhaskell('sum $ map (+10) [1,2,3]',function (result) {
  console.log(result)
})
```

# Streaming usage
```js
  var runhaskell = require('runhaskell')
  runhaskell('[1..5]').pipe(process.stdout)
``` 