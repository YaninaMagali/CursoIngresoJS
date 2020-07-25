function mostrar()
{
	let hora = parseInt(document.getElementById("txtIdHora").value);
/*
	switch(true)
	{
		case (hora<=11 && hora >=7):
			alert("Es de mañana");
			break;
	}
// Esto funciona en js, no así en otros lenguajes
*/	
	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
	}
}//FIN DE LA FUNCIÓN