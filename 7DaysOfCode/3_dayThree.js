// Diferentes reações para diferentes respostas no sistema de interação com o usuário. 
alert("Olá! Bom ver você por aqui!");

const area = prompt("Para qual área você gostaria de ir, front-end ou back-end?");
    if (area == 'front-end') {
        const respostaArea = prompt('Prefere começar aprendendo React ou Vue?');
    }
    else if (area == 'back-end') {
        const respostaArea = prompt('Prefere começar aprendedo C# ou Java?');
    }
    else {
        alert("Tudo bem se não quiser ser específico por enquanto...");
    };

const pergunta = alert("E você gostaria de continuar especializando-se nessa área ou preferiria tornar-se um desenvolvedor Fullstack?");
const explicacao = prompt("Utilize 1 para especializar-se e 2 para tornar-se Fullstack, por favor.");
    if (explicacao == '1') {
        alert("É uma ótima escolha! Também gosto de aprender o máximo de posso sobre um assunto.");
    }
    else if (explicacao == '2') {
        alert("É uma ótima escolha! Saber sobre assuntos variados é sempre muito buscado no mercado.");
    }
    else {
        alert("Caso ainda não tenha decidido, não tem problema! O importante é encontrar algo que goste.");
    };

let tecnologias = prompt("Tem mais tecnologias que você gostaria de se especializar ou conhecer? Digite ok em caso positivo.")
    while(tecnologias === 'ok') {
        let novaTecnologia = prompt("Qual tecnologia?")
        alert(`${novaTecnologia} é muito legal! `)
        tecnologias = prompt("Tem mais tecnologias que você gostaria de se especializar ou conhecer? Digite ok em caso positivo.")
    };

alert("Foi muito bom ver você novamente! Até a próxima e sucesso na sua jornada!")





// Solução sugerida
// const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
// let linguagem = "";
// if (area === "Front-End"){
//     linguagem = prompt("Você quer aprender React ou Vue?");
// }
// else if (area === "Back-End"){
//     linguagem = prompt("Você quer aprender C# ou Java?");
// }
// else {
//     alert("Você não inseriu uma área válida!");
// }

// const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
// if (especialidadeOuFullstack == 1){
//     alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
// }
// else if (especialidadeOuFullstack == 2){
//     alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
// }
// else {
//     alert("Você não inseriu um valor válido!");
// }

// let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
// while (msg === "ok"){
//     let novaTecnologia = prompt("Qual?");
//     alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
//     msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
// }