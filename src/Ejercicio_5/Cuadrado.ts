/*
Ejercicio 5 - POO

4. Codificar una clase llamada "Cuadrado" que extienda de la clase "Figura", con una
propiedad "lado" y un constructor que reciba dos parámetros "nombre" y "lado". Estos
deben ser asignados a las propiedades correspondientes de la clase. Implementa los
métodos "calcularArea" y "calcularPerimetro" de la interfaz
"FiguraGeometrica" utilizando las fórmulas para calcular el área y perímetro de un
cuadrado.
*/

import { AFigura } from "./AFigura";

export class Cuadrado extends AFigura{

    public lado: number;

    constructor(nombre: string, tipo: string, lado: number){
        super(nombre, tipo);
        this.lado = lado;
    }

    calcularArea(): number {
        return Math.round(this.lado * this.lado)
    }

    calcularPerimetro(){
        return Math.round(this.lado *4)
    }


}