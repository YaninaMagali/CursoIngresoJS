/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno = document.getElementById("txtIdNumeroUno").value;
	var numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno, 10);
	numeroDos = parseInt(numeroDos, 10);
	alert(numeroUno + numeroDos);
}

