function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;

	
	switch(mes)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("no llego el invierno");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
	}





}//FIN DE LA FUNCIÓN