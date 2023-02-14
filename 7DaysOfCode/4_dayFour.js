// Jogo entre o usuário e a página.
const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let tentativa = "";
let acerto = false;

alert("Olha só quem está de volta!");
alert("Muito bom te ver novamente por aqui.");
alert("Hoje estava pensando em jogarmos um jogo... que tal?");

const jogar = prompt("Quer jogar comigo?");
    if (jogar == 'sim') {
        alert("Maravilha! Vamos começar.");
        alert("Você tem três chances para acertar o número em que pensei, de 0 a 10, ok?");
        for (let contador = 0; contador < 3; contador++) {
            tentativa = prompt("Boa sorte, hehe!");
            if (tentativa == numero){
                alert(`Wow! Você acertou em cheio! O número é ${numero}.`);
                acertou = true;
                break
            }
        alert("Que pena, você errou!");
        }
        if (!acerto) {
        alert(`Ish, não foi dessa vez. O número era ${numero}.`);
        }
    }
    else {
        alert("Poxa, que pena. Fica para a próxima, então! (: ")
    }



// Solução sugerida 
// const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
// let chute = "";
// let acertou = false;

// for(let contador = 0; contador < 3; contador++){    
//     chute = prompt("Tente adivinhar o número de 0 a 10:");
//     if(chute == numeroAdivinhacao){
//         alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
//         acertou = true;
//         break;
//     }
//     alert("Errado!");
// }
// if(!acertou){
//     alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
// }