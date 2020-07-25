function mostrar()
{
	let min = 1;
	let max = 10;
	let nota = Math.round(Math.random() * (max - min) + min);
	//Genero el número RANDOM entre 1 y 10 y se lo asigno a la variable local nota

	if (nota == 9 || nota == 10)
	{
		alert(nota + " EXCELENTE");
	}
	else if(nota >= 4)
	{
		alert(nota + " APROBASTE");	
	}
	else
	{
		alert(nota + " Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN