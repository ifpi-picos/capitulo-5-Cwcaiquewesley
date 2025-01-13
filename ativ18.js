
    let peso = parseFloat(prompt("Digite seu peso"))
    let altura = parseFloat(prompt("Digite sua altura"))

    let imc = peso / (altura * altura)

    let classificacao;
    switch (true) {
        case (imc < 18.5):
            classificacao = "Abaixo do peso"
            break;
        case (imc >= 18.5 && imc < 24.9):
            classificacao = "Peso normal"
            break;
        case (imc >= 25 && imc < 29.9):
            classificacao = "Sobrepeso"
            break;
        case (imc >= 30):
            classificacao = "Obesidade"
            break;
        default:
            classificacao = "Valor inválido."
    }
    console.log(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`)


