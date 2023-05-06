const argv = require('process').argv;
const calculadora = require('./operaciones')
const operacion = argv[2]
const numeroA = +argv[3]
const numeroB = +argv[4]
if(operacion === 'sumar'){
    console.log(calculadora.sumar(numeroA, numeroB))
}else if(operacion === 'restar'){
    console.log(calculadora.restar(numeroA,numeroB))
}else if(operacion === 'multiplicado'){
    console.log(calculadora.multiplicar(numeroA, numeroB))
}else if(operacion === 'dividido'){
    console.log(calculadora.dividir(numeroA,numeroB))
}else if(operacion === 'elevado'){
    console.log(calculadora.elevado(numeroA,numeroB))
}else if(operacion === 'raizCuadrada'){
    console.log(calculadora.raices.raicesCuadradas(numeroA))
}

