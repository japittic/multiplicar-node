// const argv = require('./config/yargs.js').argv;
const argv = require('./config/yargs.js').argv;
const colors = require('colors');

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }

//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }

//     })
//     .help()
//     .argv;


const { crearArchivo, ListarTabla } = require('./Multiplicar/multiplicar.js')
let comando = argv._[0];
// let base = 5;
// let argv = process.argv;
// let argv2 = process.argv;

switch (comando) {

    case 'listar':
        ListarTabla(argv.base, argv.limite)
            // console.log('Listar');
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(e => console.log(e))
        break;

    case 'listar':
        console.log('Listar');
        break;

    default:
        'Comando no reconocido';


}

console.log('Limite', argv.limite);


// console.log(argv2);



// let parametro = argv[2];
// let base = parametro.split('=')[1]



// nodemon app.js --base=5

//npm init

//COmo llamar el app para crear
//node app crear --limite 11 -b 2

//Como llama el ap para listar
// node app listar --limite 5 -b 3