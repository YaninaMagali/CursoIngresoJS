function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13)
	{
		alert("niño");
	}
	else if (edad >= 13 && edad <=18)
	{
		alert("adolescente");
	}
	else
	{
		alert("mayor");
	}
}
//FIN DE LA FUNCIÓN