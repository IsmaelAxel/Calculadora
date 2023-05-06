module.exports = {
    suma: function(a,b){
        return a + b
    },
    resta: function(a,b){
        return a - b
    },
    multiplicacion: function(a,b){
        return a*b
    },
    dividir:{
        divicionEntreDosNumeros: function(a,b){
            if(b !== 0){
                return a / b;
            }else{
                return "No se puede dividir por 0, es una indeterminación"
            }
        },
        divicionEntreLogaritmos: function(a,b){
            if(b !== 0 ){
                return Math.log10(a) / Math.log10(b)
            }else{
                return "No se puede dividir por 0, es una indeterminación"
            }
        }
    },
    elevacion: function(a,b){
        return Math.pow(a, b)
    },
    raices:{
        raicesCuadradas: function(a){
            if(a >= 0){
                return Math.sqrt(a)
            }else{
                return 'usted esta usando la operacion "Raiz", es decir. No existen raices cuadradas de un numero negativo'
            }
        },raicesCubicas: function(a){
            return Math.cbrt(a)
        }
    },
    
}
