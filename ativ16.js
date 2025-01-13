
function classificarTriangulo() {
    let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"))
    let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"))
    let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"))

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0 || 
        lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        console.log("Os lados informados não formam um triângulo válido.");
    } else {
        if (lado1 === lado2 && lado2 === lado3) {
            console.log("O triângulo é Equilátero.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            console.log("O triângulo é Isósceles.");
        } else {
            console.log("O triângulo é Escaleno.");
        }
    }
}

classificarTriangulo();
