var test = require('tape')

var runhaskell = require('./runhaskell.js')

test('streaming', function (t) {
  t.plan(1)
  var concat = require('concat-stream')
  var listOfFive = runhaskell('[1..5]')

  var testStream = listOfFive.pipe(concat(function (result) {
    t.equal(result.toString(), '[1,2,3,4,5]\n')
  }))
  
})

// TODO: endless streaming
//var testSeq = require('tape-readable-seq')
//   testSeq(testStream, expect)(t)
//var take = require('take-stream')
// var split = require('split')
// var testStream = endless.stdout.pipe(split(',')).pipe(take(5))

test('callback',function (t) {
  runhaskell('sum $ map (+10) [1,2,3]',function (result) {
    t.plan(1)
    t.equal(result, '36', 'sum $ map (+10) [1,2,3] is 36')
  })
})