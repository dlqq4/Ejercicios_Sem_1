    // Ejercicio 4 - Cálculo de promedio y comparación
    /*
    1. Codifique una función llamada “promedio” que calcule el promedio de una cantidad
    variable de argumentos utilizando el operador de propagación (...). La función debe
    devolver el resultado como un número.

    2. Codifique una función llamada “compararPromedio” que reciba un número (el
    promedio) y otro número a comparar. Utilice una estructura de control de flujo para
    determinar si el promedio es mayor o menor al número dado y devuelva el resultado en
    forma de cadena de texto (“mayor” o “menor”).

    3. Codifique una función llamada “promedioMayorMenor” que combine las funciones
    anteriores, reciba un número a comparar y una cantidad variable de argumentos. Utilice el
    operador spread para pasar los argumentos a la función “promedio”. Luego, utilice el
    resultado de la función “promedio” y el número a comparar como argumentos para la
    función “compararPromedio” y devuelva el resultado en una cadena de texto.

    4. Invoque la función “promedioMayorMenor” pasando distintos conjuntos de números y
    un número a comparar como argumentos, y verifique los resultados en la consola utilizando
    una sentencia “console.log”.
    */


    //Punto 1
    function promedio (array: number[]) {
        var suma= 0;
        var resultPromedio= 0;

         for (let i=0; i< array.length; i++ ){
            suma = suma + array[i];
         }
        return resultPromedio = suma/array.length       
    }

    const valores = [2,4,6];

    console.log(promedio([...valores]));


    //Punto 2
    function compararPromedio(prom: number, otroValor: number){
       var resulta: string;

        if(prom > otroValor){
            resulta = 'mayor'
        }else if (prom < otroValor){
            resulta = 'menor'
        }else {
            resulta = 'igual'
        }
        return 'La variable promedio es '+resulta+' al numero dado.'
    }

    console.log(compararPromedio(promedio([...valores]),4));

    
    //Punto 3S
    function promedioMayorMenor(promedio, compararPromedio){
       // promedio() 
       // compararPromedio() 
        return 'El promedio es '+promedio+'\n'+ compararPromedio
    }

    console.log(promedioMayorMenor);