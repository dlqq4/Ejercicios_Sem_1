/*
6. En un archivo principal, crea un objeto de la clase "CrearFiguras" y utilizarlo para
crear dos objetos, uno de tipo "Circulo" y otro de tipo "Cuadrado". Utiliza los objetos para
imprimir el área y perímetro de cada figura utilizando los métodos de la interfaz
"FiguraGeometrica".

*/

import { CrearFiguras } from "./Crearfiguras";

let myFigu = new CrearFiguras();

let myForma = myFigu.crear('MyCuadrado', 'Cuadrado',30)

console.log(myForma.calcularArea)