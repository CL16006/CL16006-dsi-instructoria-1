import * as fs from 'fs';

//obteniendo el parametro
let parametro1: string=process.argv[2];

//asignando la ruta pasada por el parametro al nombre del archivo
let fileName: string = parametro1;

//usando la funcion readFile para leer el archivo 
fs.readFile(fileName, 'utf8', (err, data)=> {
    console.log(data);
});

//forma de usar el comando-------------> npm start [ruta_del_archivo]