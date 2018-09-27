const {crearArchivo, listarTabla} = require ('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
let comando = argv._[0];
switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
    .then(resp => console.log(`tabla: `, resp))
    .catch(e=>console.log(e));
    break;
    case 'crear':
      crearArchivo(argv.base, argv.limite)
      .then( archivo => console.log(`archivo creado:` + `${archivo}`.green))
      .catch(e=>console.log(e));
      break;
  default:
  console.log('comando no reconocido');
}

//console.log(argv.base);
//let parametro = argv[2];
//let base = parametro.split('=')[1];
