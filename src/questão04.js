import leia from 'readline-sync'

    var vitoria = leia.questionInt("INFORME N DE VITORIAS: ") * 3
    var empate = leia.questionInt("INFORME N DE EMPATES: ") * 1
    var derrota = leia.questionInt("INFORME N DE DERROTAS: ") * 0

    var pontuacao = vitoria + empate + derrota

    if(pontuacao >= 70){
        console.log("CAMPEAO!!")

    } else if (pontuacao > 45 && pontuacao < 70){
        console.log("CLASSIFICADO")

    } else {
        console.log("REBAIXADO")
    }