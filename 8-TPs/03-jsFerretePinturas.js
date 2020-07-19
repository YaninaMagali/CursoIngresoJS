/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    alert(temperatura + " grados farenheit equivalen a " + ((temperatura -32) / 1.8) + " grados celsius");      
}

function CentigradosFahrenheit () 
{
    var temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    alert(temperatura + " grados celcius equivalen a " + ((temperatura * 1.8) + 32) + " grados farenheit");    
}
