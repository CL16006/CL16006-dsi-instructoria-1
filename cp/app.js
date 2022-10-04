"use strict";
exports.__esModule = true;
var fs = require("fs");
//obteniendo ruta de origen
var parametro1 = process.argv[2];
//obteniendo ruta de destino
var parametro2 = process.argv[3];
//asignando la ruta pasada por el parametro al nombre del archivo
var fileNameOrigen = parametro1;
//asignando la ruta pasada por el parametro al nombre del archivo
var fileNameDestino = parametro2;
var content = '';
//usando la funcion readFile para leer el archivo 
fs.readFile(fileNameOrigen, 'utf8', function (err, data) {
    if (err)
        throw err;
    //console.log(data);
    content = data;
    //usando la funcion writeFile para escribir o sobreescribir el archivo
    fs.writeFile(fileNameDestino, data, function (err) {
        if (err)
            throw err;
        console.log("Archivo copiado!!!");
    });
});
//forma de usar el comando-------------> npm start [ruta_del_archivo_Origen] [ruta_del_archivo_Destino]
