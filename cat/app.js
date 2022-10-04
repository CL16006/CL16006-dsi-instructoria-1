"use strict";
exports.__esModule = true;
var fs = require("fs");
//obteniendo el parametro
var parametro1 = process.argv[2];
//asignando la ruta pasada por el parametro al nombre del archivo
var fileName = parametro1;
//usando la funcion readFile para leer el archivo 
fs.readFile(fileName, 'utf8', function (err, data) {
    console.log(data);
});
//forma de usar el comando-------------> npm start [ruta_del_archivo]
