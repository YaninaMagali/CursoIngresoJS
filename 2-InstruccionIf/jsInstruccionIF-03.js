function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad >= 18)
	{
		alert("Es mayor de edad");

	}
	else 
	{
		alert("Es menor de edad");	
	}

}//FIN DE LA FUNCIÓN