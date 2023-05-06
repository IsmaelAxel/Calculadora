const argv = require('process').argv;
const calculadora = require('./operaciones')
const operacion = argv[2]
const numeroA = +argv[3]
const numeroB = +argv[4]
const PI = Math.PI /* Pensando en como poder implementar Pi */
if(operacion === 'sumar'){
    console.log(`La suma entre ${numeroA} y ${numeroB} es = ${calculadora.suma(numeroA, numeroB)}`)
}else if(operacion === 'restar'){
    console.log(`La resta entre ${numeroA} y ${numeroB} es = ${calculadora.resta(numeroA, numeroB )}`)
}else if(operacion === 'multiplicacion'){
    console.log(`La multiplicación de ${numeroA} y ${numeroB} es = ${calculadora.multiplicacion(numeroA, numeroB )}`)
}else if(operacion === 'divicion'){
    console.log(`La division de ${numeroA} entre ${numeroB} es = ${calculadora.dividir.divicionEntreDosNumeros(numeroA, numeroB)}`)
}else if(operacion === 'divicionLogaritmica'){
    console.log(`La division de logaritmo en base 10 de ${numeroA} entre logaritmo en base 10 de ${numeroB} es = ${calculadora.dividir.divicionEntreLogaritmos(numeroA ,numeroB )}`)
}else if(operacion === 'elevado'){
    console.log(`El numero ${numeroA} elevado a la ${numeroB} es = ${calculadora.elevacion(numeroA , numeroB)}`)
}else if(operacion === 'raizCuadrada'){
    console.log(`La raiz cuadrada de ${numeroA} es = ${calculadora.raices.raicesCuadradas(numeroA)}`)
}else if(operacion === 'raizCubica'){
    console.log(`La raiz cubica de ${numeroA} es = ${calculadora.raices.raicesCubicas(numeroA)}`)
}

