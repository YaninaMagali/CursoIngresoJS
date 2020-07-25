function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;

	
	switch(mes)
	{
		
		case "Febrero":
			alert("28 dias");
			break;
		case "Abril":
		case "Noviembre":
		case "Junio":
		case "Septiembre":
			alert("30 dias");
			break;
		default:
			alert("31 dias");
			break;
		
			

	}

}//FIN DE LA FUNCIÓN