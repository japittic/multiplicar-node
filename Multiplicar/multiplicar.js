const fs = require('fs');
const colors = require('colors');

let ListarTabla = (base, limite = 10) => {


    console.log('=============================='.green);
    console.log(`==========TABLA DE ${base }====================`.red);
    console.log('==============================');

    for (let i = 1; i <= limite; i++) {

        console.log(`Base ${base} x ${i} = ${base*i}`)

    }


}
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            // console.log(`Base ${base} x ${i} = ${base*i}`)
            data += `${base} x ${i} = ${base*i}\n`;
        }



        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
            // resolve(`El archivo tabla - ${base}ha sido guardado`);
                console.log(`El archivo tabla - ${base}.txt ha sido guardado`.green);
        });
    });
}
module.exports = {
    crearArchivo,
    ListarTabla
}