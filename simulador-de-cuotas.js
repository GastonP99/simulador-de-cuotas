// Simulador de cuotas con interés



const sumar = (a, b) => a+b
const dividir = (a, b) => a/b

const recargoTres = (pago) => pago * 0.05;
const recargoSeis = (pago) => pago * 0.10;
const recargoDoce = (dolar) => dolar * 0.15;
const recargoDieci = (dolar) => dolar * 0.20;
let importe = parseInt(prompt("Ingrese el total a pagar"));
let cuotas = parseInt(prompt(`A continuacion ingrese en cuantas cuotas quiere realizar el pago 
3 cuotas (5% de recargo)
6 cuotas (10% de recargo)
12 cuotas (15% de recargo)
18 cuotas (20% de recargo)`))

switch (cuotas) {
    case "3" && 3 :
        alert( `Usted debera realizar 3 pagos de $${dividir (sumar (importe, recargoTres(importe)), cuotas)} (total: $${sumar (importe, recargoTres(importe))})`);
        break;

    case "6" && 6:
        alert( `Usted debera realizar 6 pagos de $${dividir (sumar (importe, recargoSeis(importe)), cuotas)} (total: $${sumar (importe, recargoSeis(importe))})`);    
        break;

    case "12" && 12:
        alert( `Usted debera realizar 12 pagos de $${dividir (sumar (importe, recargoDoce(importe)), cuotas)} (total: $${sumar (importe, recargoDoce(importe))})`);
        break;

    case "18" && 18:
        alert( `Usted debera realizar 18 pagos de $${dividir (sumar (importe, recargoDieci(importe)), cuotas)} (total: $${sumar (importe, recargoDieci(importe))})`);
        break;

    default:
        alert("No a ingresado los datos solicitados")
        break;
}
