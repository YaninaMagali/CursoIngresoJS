/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{
	var numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La suma es " + (numeroUno+numeroDos));	
}

function restar()
{
	var numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La resta es " + (numeroUno-numeroDos));		
}

function multiplicar()
{ 
	var numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("El producto es " + (numeroUno*numeroDos));	
}

function dividir()
/*
la palabra reservada let, la usamos para declarar variables locales
la palabra reservada var, a usamos para declaar variables globales
 */
{
	let numeroUno = parseFloat(document.getElementById("txtIdNumeroUno").value);
	let numeroDos = parseFloat(document.getElementById("txtIdNumeroDos").value);
	let resultado = (numeroUno/numeroDos).toFixed(3);
	alert("La division es " + resultado);	
}

