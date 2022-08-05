const getFlags = require('./flags')

console.group(` Oi ${getFlags('--name')}. ${getFlags('--greeting')}`)