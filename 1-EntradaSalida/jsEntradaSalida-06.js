/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;

	var numeroDos;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value, 10);

	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value, 10);
	
	alert("La suma es " + (numeroUno + numeroDos));
}

