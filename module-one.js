
const sayHi = require('./module-three')
const names = require('./module-two');

require('./math')
sayHi(names.george)
sayHi(names.irakli)
sayHi(names.john)