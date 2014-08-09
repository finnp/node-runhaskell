var spawn = require('child_process').spawn
var exec = require('child_process').exec

module.exports = runhaskell

function runhaskell (code, cb) {
  if (arguments.length == 1) {
    return stream(code)
  } else {
    return withCallback(code, cb)
  }
}

function stream (code) {
  var haskell = exec('runhaskell')
  haskell.stdin.write('main = putStrLn $ show $ ')
  haskell.stdin.write(code)
  haskell.stdin.end()
  
  return haskell.stdout
}

function withCallback(code, cb) {
  var haskell = exec('runhaskell')
  haskell.stdin.write('main = putStrLn $ show $ ')
  haskell.stdin.write(code)
  haskell.stdin.end()    
  
  var response = ''
  haskell.stdout.on('data', function (chunk) {
    response += chunk
  })
  haskell.stdout.on('finish', function () {
    cb(response.trim())
  })
  
  return haskell
}
