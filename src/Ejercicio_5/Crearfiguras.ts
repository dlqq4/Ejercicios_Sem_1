/*
Ejercicio 5- POO

5. Crear una clase "CrearFiguras" que tenga un método "crear", este debe recibir tres
parámetros "nombre", "tipo" y "valor". Devolver un objeto de la clase "Circulo" o
"Cuadrado" según el valor del parámetro "tipo".

*/

import { AFigura } from "./AFigura";
import {Circulo} from "./Circulo";
import {Cuadrado} from "./Cuadrado";

export class CrearFiguras{

crear (nombre: string, tipo: string, valor: number) {

    if(tipo == 'Circulo' ){
        return new Circulo('Circulo1', 'Circulo', 20); 
    }else {
        return new Cuadrado('MyCuadrado', 'Cuadrado', 10)
    }
}

}