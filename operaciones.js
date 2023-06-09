module.exports = {
    suma: function(a,b){
        return a + b
    },
    resta: function(a,b){
        return a - b
    },
    multiplicacion: function(a,b){
        return a * b
    },
    dividir:{
        divisionEntreDosNumeros: function(a,b){
            return b!== 0 ?  a / b : "No se puede dividir por 0, es una indeterminación"
        },
        divisionEntreLogaritmos: function(a,b){
            return b>0 && a>=0  ? Math.log10(a) / Math.log10(b) :"No se puede dividir por 0, es una indeterminación, y tampoco se pueden dividir por numeros negativos"
        } /* las operaciones con logaritmo si o si son numeros positivos, y en este caso como estamos usando una division, el denominador no debe ser 0 */
    },
    potencia: function(a,b){
        return Math.pow(a, b)
    },
    raices:{
        raicesCuadradas: function(a){
            return a>=0 ? Math.sqrt(a) : 'usted esta usando la operacion "raizCuadrada", es decir. No existen raices cuadradas de un numero negativo, y si introduciste una letra, tampoco va a funcionar'
        },raicesCubicas: function(a){
            return Math.cbrt(a)
        }
    }
}
