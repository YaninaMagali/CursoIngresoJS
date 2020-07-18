/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{
	{
		var importe = parseInt(document.getElementById("txtIdImporte").value);
	
		var descuento = 25;
	
		document.getElementById("txtIdResultado").value = importe - (importe * descuento / 100);
	}
	
}
