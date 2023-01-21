    // Ejercicio 2 - POTENCIA
    /*
    Crear una función que calcule el resultado de elevar un número dado a una potencia dada.
    Utiliza la fórmula: base^exponente
    */

    
    function potenciaNumber(base:number, exponente:number){
        var resultPotencia = Math.pow(base,exponente);
        return resultPotencia
    }
    console.log(potenciaNumber(4,4))