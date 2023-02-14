// Criação de calculadora:

let numero1;
let numero2;
let operacao = ""; 

function soma(numero1, numero2) {
    return Number(numero1) + Number(numero2);
}

function subtracao(numero1, numero2) {
    return Number(numero1) - Number(numero2);
}

function multiplicacao(numero1, numero2) {
    return Number(numero1) * Number(numero2);
}

function divisao(numero1, numero2) {
    return Number(numero1) / Number(numero2);
}

alert("Vamos contar?")

do {
    operacao = prompt("Escolha a operação escrevendo o nome ou sinal do que deseja:\n- 'Soma' ou '+';\n- 'Subtração' ou '-';\n- 'Multiplicação' ou '-';\n- 'Divisão' ou '/';\nPara finalizar, escreva 'sair'.");

    operacao = operacao.toLowerCase();

    // PEDIR AJUDA! Como retornar do erro de operação para o texto inicial? é como diriam os beatles 
    //help
    while (operacao != "soma" && operacao != "+" && operacao != "subtração" && operacao != "subtracao" && operacao != "-" && operacao != "multiplicação" && operacao != "multiplicacao" && operacao != "*" && operacao != "divisão" && operacao != "divisao" && operacao != "/" && operacao != "sair") {
        alert("Por favor, entre uma operação válida ou digite 'sair' para finalizar a aplicação.");
    }
    
    
    if (operacao === "sair") {
        break;
    }

    numero1 = prompt("Insira o primeiro valor:");
    numero2 = prompt("Insira o segundo número");
    switch (operacao) {
        case 'soma':
        case '+':
            alert(`O resultado é ${soma(numero1, numero2)}.`);
            break;
        case 'subtracao':
        case 'subtração':
        case '-':
            alert(`O resultado é ${subtracao(numero1, numero2)}.`);
            break;
        case 'multiplicacao':
        case 'multiplicação':
        case '*':
            alert(`O resultado é ${multiplicacao(numero1, numero2)}.`);
            break;
        case 'divisao':
        case 'divisão':
        case '/':
            alert(`O resultado é ${divisao(numero1, numero2)}.`);
            break;
    }
}

while (operacao === "soma" || operacao === "+" || operacao === "subtração" || operacao === "subtracao" || operacao === "-" || operacao === "multiplicação" || operacao === "multiplicacao" || operacao === "*" ||  operacao === "divisão" || operacao === "divisao" || operacao === "/" );

alert("Até loguinho!");































// const calculate = (operation, num1, num2) => {
//     switch (operation) {
//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         return num1 / num2;
//       default:
//         return "Invalid operation";
//     }
//   };
  
//   const num1 = parseFloat(prompt("Enter the first number:"));
//   const num2 = parseFloat(prompt("Enter the second number:"));
//   const operation = prompt("Enter the operation (+, -, *, /):");
  
//   const result = calculate(operation, num1, num2);
  
//   alert(`Result: ${result}`);