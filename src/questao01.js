import leia from 'readline-sync'
        
    var valor = leia.questionFloat("Digite o valor da compra: ")
    var estado = leia.keyInSelect(["SP", "SC", "RS", "OUTROS"], "INFORME O DESTINO: ")

    if (valor > 500){
        console.log("VALOR DA COMPRA: " + valor.toFixed(2)) + "E FRETE GRÁTIS."
    } else{

        switch(estado){
        case 0: 
        case 1:
        case 2:
        case 3: 
        console.log(("VALOR DA COMPRA: " + valor.toFixed(2)) + "FRETE R$" + 400)
        break
        case 4: 
        console.log(("VALOR DA COMPRA: " + valor.toFixed(2)) + "FRETE R$" + 500)
        break
        }
    }