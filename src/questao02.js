import leia, { keyInYN } from "readline-sync"

    var idade = leia.questionInt("Informe a idade: ")
    var ehEstudante = leia.keyInYN ("VOCE EH ESTUDANTE: ")
    var diaSemana = leia.keyInSelect(["SEGUNDA", "TERCA", "QUARTA", "QUINTA", 
        "SEXTA", "SAB", "DOM"], "INFORME DIA DA SEMANA: ")

        var valorIngresso = 40
        if(idade < 12){
            console.log("Valor total: " + valorIngresso.toFixed(2))
            console.log("Valor desconto: " + (valorIngresso - 15).toFixed(2))
            console.log("Valor cobrado: " + (15).toFixed(2))
        } else {
            if(diaSemana === 0){
                var desconto =  valorIngresso * 0.50
            console.log("Valor total: " + valorIngresso.toFixed(2))
            console.log("Valor desconto: " + desconto.toFixed(2))
            console.log("Valor cobrado: " + (valorIngresso - desconto).toFixed(2))
            } else if (diaSemana !== 0 && ehEstudante === true){
                var desconto = valorIngresso * 0.30
            console.log("Valor total: " + valorIngresso.toFixed(2))
            console.log("Valor desconto: " + desconto.toFixed(2))
            console.log("Valor cobrado: " + (valorIngresso - desconto).toFixed(2))
            } else {
            console.log("Valor total: " + valorIngresso.toFixed(2))
            console.log("Valor desconto: " + (0).toFixed(2))
            console.log("Valor cobrado: " + valorIngresso.toFixed(2))

            }
        }