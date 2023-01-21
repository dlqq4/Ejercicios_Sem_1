/*
Ejercicio 5 - POO

3. Crear una clase llamada "Circulo" que extienda de la clase "Figura", esta debe tener
una propiedad "radio" y un constructor que reciba dos parámetros "nombre" y "radio".

Los debe asignar a las propiedades correspondientes de la clase. Implementa los métodos
"calcularArea" y "calcularPerimetro" de la interfaz "FiguraGeometrica"
utilizando las fórmulas para calcular el área y perímetro de un círculo.
*/

import { AFigura } from "./AFigura";

export class Circulo extends AFigura{

    public radio: number;

    constructor(nombre: string, tipo: string, radio : number){
        super(nombre, tipo);
        this.radio = radio;     
    }

    //Implementación de los metodos correspondientes a la interface IFiguraGeometrica

     calcularArea(): number {
        return Math.round(Math.PI * (this.radio* this.radio))
    }

    calcularPerimetro(){
        return Math.round(Math.PI *(this.radio*2))
    }

}