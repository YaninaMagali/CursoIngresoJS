/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	var aumento = 10;

	document.getElementById("txtIdResultado").value = sueldo + (sueldo * aumento / 100);
}
