
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    const maxTentativas = 10;

console.log("Tente adivinhar o número entre 1 e 100. Você tem 10 tentativas.")

    while (tentativas < maxTentativas) {
        let palpite = parseInt(prompt(`Tentativa ${tentativas + 1} de ${maxTentativas} - Qual é o seu palpite?`))

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log("Por favor, digite um número entre 1 e 100.")
            continue;
        }

        tentativas++;

        if (palpite === numeroSecreto) {
            console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas!`)
            break;
        } else if (palpite < numeroSecreto) {
            console.log("O número secreto é maior. Tente novamente.")
        } else {
            console.log("O número secreto é menor. Tente novamente.")
        }

        if (tentativas === maxTentativas) {
            console.log(`Você não acertou o número secreto. O número era ${numeroSecreto}.`)
        }
    }

