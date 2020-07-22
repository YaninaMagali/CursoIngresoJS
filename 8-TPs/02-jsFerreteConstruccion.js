/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseFloat(document.getElementById("txtIdLargo").value);
    var ancho = parseFloat(document.getElementById("txtIdAncho").value);
    var cantidadAlambres = 3;

    alert("Debe comprar " + (2*(largo+ancho)*cantidadAlambres) + " mts de alambre");

}
function Circulo () 
{
    var radio = parseFloat(document.getElementById("txtIdRadio").value);
    var cantidadAlambres = 3;
    alert("Debe comprar "  + (2 * 1,33 * radio * cantidadAlambres )+ " mts de alambre");
    
    
}
function Materiales () 
{
    var largo = parseFloat(document.getElementById("txtIdLargo").value);
    var ancho = parseFloat(document.getElementById("txtIdAncho").value);
    var area = largo*ancho;

    alert("debe comprar " + (area * 2) + " bolsas de cemento y " + (area * 3) + " bolsas de cal");
	
}