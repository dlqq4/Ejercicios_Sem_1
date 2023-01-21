/*
Ejercicio 5 - POO

1. Crear una interfaz llamada “FiguraGeometrica” que contenga dos métodos sin valor
de retorno llamados “calcularArea” y “calcularPerimetro”.

Nota: Una interfaz solo debe contener la definición de metodosy propiedades, no su implementación.
*/


export interface IFiguraGeometrica {

    calcularArea(): number;
        
    calcularPerimetro(): number;


}