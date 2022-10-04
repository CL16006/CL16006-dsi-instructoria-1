import * as fs from 'fs';

//obteniendo ruta de origen
let parametro1: string=process.argv[2];
//obteniendo ruta de destino
let parametro2: string=process.argv[3];

//asignando la ruta pasada por el parametro al nombre del archivo
let fileNameOrigen: string = parametro1;
//asignando la ruta pasada por el parametro al nombre del archivo
let fileNameDestino: string = parametro2;
let content: string='';
//usando la funcion readFile para leer el archivo 
fs.readFile(fileNameOrigen, 'utf8', (err, data)=> {
    if (err) throw err;
    //console.log(data);
    content=data;
    //usando la funcion writeFile para escribir o sobreescribir el archivo
fs.writeFile(fileNameDestino, data, (err)=>{
    if (err) throw err;
    console.log("Archivo copiado!!!");
})
});



//forma de usar el comando-------------> npm start [ruta_del_archivo_Origen] [ruta_del_archivo_Destino]