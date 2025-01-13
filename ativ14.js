function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function converterTemperatura() {

    let escolha = prompt("Escolha a conversão: \n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius");

    if (escolha === "1") {
        let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
        let fahrenheit = celsiusParaFahrenheit(celsius);
        console.log(`${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`);
    } else if (escolha === "2") {
        let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
        let celsius = fahrenheitParaCelsius(fahrenheit);
        console.log(`${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C`);
    } else {
        console.log("Opção inválida! Por favor, escolha 1 ou 2.");
    }
}

converterTemperatura();
