module.exports = {
    suma: function(a,b){
        const PI = Math.PI;
        const validacion = a ? a : a === 0 ? 0 : PI; /* Si A existe, guardamos A en validacion, sino si A es 0 entonces guardamos 0 en validacion, sino guardamos PI */
        const validacion2 = b ? b : b === 0 ? 0 : PI;
        return validacion + validacion2
    },
    resta: function(a,b){
        const PI = Math.PI;
        const validacion = a ? a : a === 0 ? 0 : PI;
        const validacion2 = b ? b : b === 0 ? 0 : PI;
        return validacion - validacion2
    },
    multiplicacion: function(a,b){
        const PI = Math.PI;
        const validacion = a ? a : a === 0 ? 0 : PI;
        const validacion2 = b ? b : b === 0 ? 0 : PI;
        return validacion * validacion2
    },
    dividir:{
        divisionEntreDosNumeros: function(a,b){
            const PI = Math.PI;
            const validacion = a ? a : a === 0 ? 0 : PI;
            const validacion2 = b ? b : b === 0 ? 0 : PI;  
            return validacion2 !== 0 ?  validacion / validacion2 : "No se puede dividir por 0, es una indeterminación"

        },
        divisionEntreLogaritmos: function(a,b){
            const PI = Math.PI;
            const validacion = a ? a : a === 0 ? 0 : PI;
            const validacion2 = b ? b : b === 0 ? 0 : PI; 
            return validacion2!==0 ? Math.log10(validacion) / Math.log10(validacion2) :"No se puede dividir por 0, es una indeterminación"
        }
    },
    elevacion: function(a,b){
        const PI = Math.PI;
        const validacion = a ? a : a === 0 ? 0 : PI;
        const validacion2 = b ? b : b === 0 ? 0 : PI; 
        return Math.pow(validacion, validacion2)
    },
    raices:{
        raicesCuadradas: function(a){
            return a>=0 ? Math.sqrt(a) : 'usted esta usando la operacion "Raiz", es decir. No existen raices cuadradas de un numero negativo'
        },raicesCubicas: function(a){
            return Math.cbrt(a)
        }
    }
}
