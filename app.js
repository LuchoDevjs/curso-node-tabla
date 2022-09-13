const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')
require('colors');

console.clear();

// console.log("base:yargs", argv.base);

// const [,,arg3 = 'base=5'] = process.argv
// const [,base = 5] = arg3.split('=')

// console.log(base)

// const base = 10;

crearArchivo(argv.b, argv.l,argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.bgMagenta))
  .catch((err) => console.log(err));
