// Criação de sistema de interação entre usuário e página.

alert("Olá, amiguinho! Vamos papear?");

const nome = prompt("Qual o seu nome?");
const msgNome = alert(`Huum, prazer em conhecê-lo ${nome}!`);

const idade = prompt("Quantos anos você tem?");
const msgIdade = alert("Oh, na flor a idade!");

const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msdLinguagem = alert("Essa linguagem é muito importante!");

alert(`Então seu nome é ${nome}, você tem ${idade} anos e está aprendendo ${linguagem}? Que bacana!`);

const resposta = prompt("E você está gostando dessa linguagem? Responda sim ou não, por favor!");
    if (resposta == 'sim') {
        alert("Poxa, que bom! Nada como gostar do que aprende!");
    }
    else if (resposta == 'não') {
        const novaResposta = prompt("Poxa, que pena. Já pensou em estudar outra linguagem?");
        if (novaResposta == 'sim') {
            alert("Boa! Tem que ir tentando mesmo até achar algo que goste!");
        }
        else if (novaResposta == 'não') {
            alert("Não desiste não! As linguagens são tão variadas que é muito provável que vá encontrar algo que goste!");
        }
        else {
            alert("Por favor, reinicie a página e responda à essa pergunta apenas com sim ou não");
        }
    }
    else {
        alert("Por favor, reinicie a página e responda à essa pergunta apenas com sim ou não");
    }
alert("Foi muito bom te conhecer! Boa sorte e espero falar com você em breve! (;");

// resposta sugerida
// const nome = prompt("Qual o seu nome?");
// const idade = prompt("Quantos anos você tem?");
// const linguagem = prompt("Qual linguagem de programação você está estudando?");
// const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

// alert(msg);

// const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`);
// if (gosta == 1){
//     alert("Muito bom! Continue estudando e você terá muito sucesso.");
// }
// if (gosta == 2){
//     alert("Ahh que pena... Já tentou aprender outras linguagens?");
// }