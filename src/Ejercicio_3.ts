    // Ejercicio 3 - OBTENER EL NÚMERO MAYOR
    /*
    1. Redacte una función llamada 'obtenerMayor' que acepte una cantidad variable de
    argumentos y devuelva el valor máximo entre ellos. Utilice el operador spread (...) para
    recibir los argumentos en un arreglo.

    2. La función debe devolver el valor de la variable “mayor” al final del ciclo de iteración.

    3. Invoque la función “obtenerMayor” pasando distintos conjuntos de números como
    argumentos y verifique los resultados en la consola utilizando una sentencia “console.log”.
    */

    const numeros = [2,4,150,6,8,89];  //En esta constante ingreso los numeros a ser analizados

    function obtenerMayor (array: number[]){ //La funcion pide un array de numeros

       var numeroMayor = Math.max(...array);
        
        return numeroMayor
    }
    
    console.log(obtenerMayor([...numeros]));

