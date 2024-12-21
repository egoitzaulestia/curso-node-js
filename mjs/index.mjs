// .js --> por defecto utiliza CommonJS
// .mjs --> para utilizar ES Modules
// .cjs --> para utilizar CommonJS

import { sum, sub, mult } from './sum.mjs'

console.log(sum(34, 55))
console.log(sub(55, 34))
console.log(mult(34, 55))