/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el 
descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si 
es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se 
hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto 
con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 /*
function CalcularPrecio() 
{
    let cantidadLamparitas = parseInt(document.getElementById("txtIdCantidad").value);
    let precioLamparita = 35;
    let marca = document.getElementById("Marca").value;
    let precioTotalSinDescuento;
    let precioConDescuento;
    let porcentajeIIBB = 10;
    let montoIIBB;

    switch (cantidadLamparitas) {
        case 1:
        case 2:
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento;
            break;

        case 3:
            switch (marca) {
                case "ArgentinaLuz":
                    precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
                    precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento * 15 / 100);
                    break;
                case "FelipeLamparas":
                    precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
                    precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento * 10 / 100);
                    break;
                default:
                    precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
                    precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento * 5 / 100);
                    break;
            }
            break;

        case 4:
            switch (marca) {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    precioTotalSinDescuento = cantidadLamparitas * precioLamparita
                    precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento * 25 / 100);
                    break;
                default:
                    precioTotalSinDescuento = cantidadLamparitas * precioLamparita
                    precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento * 20 / 100);
                    break;
            }
            break;

        case 5:
            switch (marca) {
                case "ArgentinaLuz":
                    precioTotalSinDescuento = cantidadLamparitas * precioLamparita
                    precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento * 40 / 100);
                    break;
                default:
                    precioTotalSinDescuento = cantidadLamparitas * precioLamparita
                    precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento * 30 / 100);
                    break;
            }
            break;

        default:
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita
            precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento * 50 / 100);
            break;

    }
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

//IIBB:
    switch (precioConDescuento) 
    {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
            alert("Debe abonar $ " + precioConDescuento);
            break;
        default:
            montoIIBB = precioConDescuento * porcentajeIIBB / 100;
            alert("Usted pago $ " + montoIIBB + " de IIBB");
            break;
    }
} //FIN
*/

function CalcularPrecio()
{
    let cantidadLamparitas = parseInt(document.getElementById("txtIdCantidad").value);
    let precioLamparita = 35;
    let marca = document.getElementById("Marca").value;
    let precioTotalSinDescuento;
    let precioConDescuento;
    let porcentajeIIBB = 10;
    let montoIIBB;

    if (cantidadLamparitas <= 2)
    {
        precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
        precioConDescuento = precioTotalSinDescuento;
    }
    else if (cantidadLamparitas == 3)
    {
        if(marca == "ArgentinaLuz")
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento- (precioTotalSinDescuento*15/100);
        }
        else if(marca == "FelipeLamparas")
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento- (precioTotalSinDescuento*10/100);        
        }
        else
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento- (precioTotalSinDescuento*5/100);
        }
    }
    else if (cantidadLamparitas == 4)
    {
        if(marca =="ArgentinaLuz" || marca == "FelipeLamparas")
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento- (precioTotalSinDescuento*25/100);
        }
        else
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento*20/100);
        }
    }
    else if (cantidadLamparitas == 5)
    {
        if(marca =="ArgentinaLuz")
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento- (precioTotalSinDescuento*40/100);
        }
        else
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento*30/100);
        }
    }
    else
    {
        precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
        precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento*50/100);
    }

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

    //IIBB
    if (precioConDescuento > 120)
    {
        montoIIBB = precioConDescuento*porcentajeIIBB/100;
        alert("Usted pago $ " + montoIIBB +" de IIBB");
    }
    else
    {
        alert("Debe abonar " + precioConDescuento);
    }
} //FIN




//RESOLVERO CON IF Y CON SWITCH