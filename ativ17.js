
    let pratoEscolhido = prompt("Escolha um prato do menu:\n1 - Pizza\n2 - Hambúrguer\n3 - Salada\n4 - Macarrão");

    switch (pratoEscolhido) {
        case "1":
            console.log("Você escolheu Pizza!\nPreço: R$ 30,00\nDescrição: Pizza de muçarela com molho de tomate e orégano.");
            break;
        case "2":
            console.log("Você escolheu Hambúrguer!\nPreço: R$ 20,00\nDescrição: Hambúrguer clássico com queijo, alface, tomate e molho especial.");
            break;
        case "3":
            console.log("Você escolheu Salada!\nPreço: R$ 15,00\nDescrição: Salada fresca com alface, tomate, cenoura, pepino e molho de iogurte.");
            break;
        case "4":
            console.log("Você escolheu Macarrão!\nPreço: R$ 25,00\nDescrição: Macarrão ao molho bolonhesa com carne moída e queijo ralado.");
            break;
        default:
            console.log("Opção inválida! Por favor, escolha um número de 1 a 4.");
    }
