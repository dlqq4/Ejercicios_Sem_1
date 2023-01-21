    // Ejercicio 1 - ÀREA DE UN CÌRCULO
    /*
    Crear una función que calcule el área de un círculo dado su radio. Utiliza la fórmula: A = π*r^2
    */


    function areaCirculo(radio: number) {
        var resultado = Math.PI  * (radio*radio);
        return Math.round(resultado);
    }
    console.log(areaCirculo(20))

    

