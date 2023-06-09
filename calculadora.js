const argv = require('process').argv;
const calculadora = require('./operaciones')
const operacion = argv[2]
const numeroA = argv[3]
const numeroB = argv[4]
if(operacion !== 'raizCuadrada' && operacion !== 'raizCubica' && argv.length < 5){
    console.log(`Porfavor, ingrese todos los argumentos para realizar la operación: ${operacion}`);
    process.exit(1); /* Sale del codigo y 1 es un tipo de error no especifico */ 
}else if(argv.length < 4){
    console.log(`Porfavor, ingrese todos los argumentos para realizar la operacón: ${operacion}`);
    process.exit(1);
}
const PI = Math.PI;
const validacion = numeroA === 'PI' ? PI : +numeroA; /* Si numeroA es igual a PI entonces guardamos PI en validacion, sino parseamos el numeroA */
const validacion2 = numeroB === 'PI' ? PI : +numeroB;
if(operacion === 'suma'){
    console.log(`La suma entre ${validacion} y ${validacion2} es = ${calculadora.suma(validacion, validacion2)}`)}
else if(operacion === 'resta'){
    console.log(`La resta entre ${validacion} y ${validacion2} es = ${calculadora.resta(validacion, validacion2)}`)
}else if(operacion === 'multiplicacion'){
    console.log(`La multiplicación de ${validacion} y ${validacion2} es = ${calculadora.multiplicacion(validacion, validacion2 )}`)
}else if(operacion === 'division'){
    console.log(`La division de ${validacion} entre ${validacion2} es = ${calculadora.dividir.divisionEntreDosNumeros(validacion, validacion2)}`)
}else if(operacion === 'divisionLogaritmica'){
    console.log(`La division de logaritmo en base "10" de ${validacion} entre logaritmo en base "10" de ${validacion2} es = ${calculadora.dividir.divisionEntreLogaritmos(validacion ,validacion2 )}`)
}else if(operacion === 'potencia'){
    console.log(`El numero ${validacion} elevado a la ${validacion2} es = ${calculadora.potencia(validacion, validacion2)}`)
}else if(operacion === 'raizCuadrada'){
    console.log(`La raiz cuadrada de ${validacion} es = ${calculadora.raices.raicesCuadradas(validacion)}`)
}else if(operacion === 'raizCubica'){
    console.log(`La raiz cubica de ${validacion} es = ${calculadora.raices.raicesCubicas(validacion)}`)
}else{
    console.log("No se reconoce la operación :(")
}
