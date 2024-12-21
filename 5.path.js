const path = require('node:path')

// -> unix /
// -> windows \ 
// barra separadora de carpetas según SO
console.log(path.sep)
  
// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// conseguir el nombre del fichero
const base = path.basename('/tmp/ego-secret-files/top-sefret.txt')
console.log(base)

// conseguir el nombre del fichero sin la extensión
const filename = path.basename('/tmp/ego-secret-files/top-sefret.txt', '.txt')
console.log(filename)

// conseguir extensión del archivo
const extension = path.extname('my.super.image.jpg')
console.log(extension)

