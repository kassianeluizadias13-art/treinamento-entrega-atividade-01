import leia from 'readline-sync'
    var kwhGasto = leia.questionFloat("KWH GASTOS: ")
    var temTS = leia.keyInYN("Tem tarifa social? ")
    var totalPagar = 0
    if(kwhGasto <= 100){
        totalPagar = kwhGasto * 0.60
        } else if(kwhGasto > 100 && kwhGasto <= 300){
        totalPagar = kwhGasto * 0.75
        } else {
        totalPagar = kwhGasto * 0.90
        }

var valorFinal = (temTS === true) ? totalPagar - (totalPagar * 0.20) : totalPagar
console.log("VALOR FINAL A PAGAR: " + valorFinal)