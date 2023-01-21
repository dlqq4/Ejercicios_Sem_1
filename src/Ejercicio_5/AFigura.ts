/*
Ejercicio 5 - POO

2. Codifique una clase abstracta denominada “Figura” que implemente la interfaz
“FiguraGeometrica”; lo anterior debe contener dos métodos abstractos "calcularArea" y
"calcularPerimetro", los cuales, no tienen valor de retorno. Además, incluya una
propiedad protegida "nombre" y un constructor que reciba un parámetro y lo asigne a dicha
propiedad.

Nota: Las clases abstactas deben tener al menos un metodo abstracto
*/

import { IFiguraGeometrica } from "./IFiguraGeometrica";

export abstract class AFigura implements IFiguraGeometrica{

    protected nombre: string;
    protected tipo : string; //Agregue este atributo como mejora del ejercicio

    constructor(nombre :string, tipo : string){
        this.nombre = nombre;
        this.tipo = tipo;
    }

   abstract calcularArea(): number;
    

    abstract calcularPerimetro() : number;
    
  
} 