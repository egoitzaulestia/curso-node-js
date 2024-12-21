// const fs = require('node:fs')

// fs.readdir('.', (err, files) => {
//     if (err) {
//         console.error('Error al leer el directiorio: ', err)
//         return;
//     }

//     files.forEach(file => {
//         console.log(file)
//     })
// })


// versión promesas
const fs = require('node:fs/promises')

fs.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file);
        })
    })
    .catch(err => {
        if (err) {
            console.error('Error al leer el directorio: ', err)
        }
    })