
    let n1 = parseInt(prompt("Digite o número:"))
    let n2 = parseInt(prompt("Digite o número:"))

    if (n1 % n2 === 0 || n2 % n1 === 0) {
        console.log("Pelo menos um dos números é múltiplo do outro")
    } else {
        console.log("Nenhum dos números é múltiplo do outro")
    }

