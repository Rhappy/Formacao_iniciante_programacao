// STARTING DAY 2
function dayTwo(){
    alert("Olá, amiguinho! Vamos papear?");
    
    const nome = prompt("Qual o seu nome?");
    const msgNome = alert(`Huum, prazer em conhecê-lo ${nome}!`);
    
    const idade = prompt("Quantos anos você tem?");
    const msgIdade = alert("Oh, na flor a idade!");
    
    const linguagem = prompt("Qual linguagem de programação você está estudando?");
    const msdLinguagem = alert("Essa linguagem é muito importante!");
    
    alert(`Então seu nome é ${nome}, você tem ${idade} anos e está aprendendo ${linguagem}? Que bacana!`);
    
    const resposta = prompt("E você está gostando dessa linguagem?");
        resposta = resposta.toLowerCase();
        if (resposta == 'sim') {
            alert("Poxa, que bom! Nada como gostar do que aprende!");
        }
        else if (resposta == 'não') {
            const novaResposta = prompt("Poxa, que pena. Já pensou em estudar outra linguagem?");
            novaResposta = novaResposta.toLowerCase();
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
}


// STARTING DAY 3
// Diferentes reações para diferentes respostas no sistema de interação com o usuário. 
function dayThree(){
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
            alert("É uma ótima escolha! Também gosto de aprender o máximo que posso sobre um assunto.");
        }
        else if (explicacao == '2') {
            alert("É uma ótima escolha! Saber sobre assuntos variados é sempre muito buscado no mercado.");
        }
        else {
            alert("Caso ainda não tenha decidido, não tem problema! O importante é encontrar algo que goste.");
        };

    let tecnologias = prompt("Tem mais tecnologias que você gostaria de se especializar ou conhecer? Digite sim em caso positivo.")
        while(tecnologias === 'sim') {
            let novaTecnologia = prompt("Qual tecnologia?")
            alert(`${novaTecnologia} é muito legal! `)
            tecnologias = prompt("Tem mais tecnologias que você gostaria de se especializar ou conhecer? Digite sim em caso positivo.")
        };

    alert("Foi muito bom ver você novamente! Até a próxima e sucesso na sua jornada!")
}


// STARTING DAY 4
// Jogo entre o usuário e a página.
function dayFour(){
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
}



// STARTING DAY 5
// Lista de compras
// Criação das categorias de compras 

function dayFive(){
    let hortifruti = [];
    let acougue = [];
    let congelados = [];
    let laticinios = [];
    let bebidas = [];
    let limpeza = [];
    let padaria = [];
    let doces = [];
    let cestaBasica = [];
    let graos = [];

    // Página amigável
    alert("Opa! Que bom ver você! Estava pensando como poderia te ajudar!");
    alert("Sei que o mercado pode ser um momento onde tudo chama a atenção...");
    alert("Então para manter o foco, vamos criar uma listinha com as compras do dia, cada qual na sua categoria, ok?");

    alert("Para finalizar a listagem, basta escrever 'sair' a qualquer momento.");
    // Início da categorização dos itens escritos no prompt
    while (true) {
        let item = prompt("Preencha com o item que gostaria de adicionar :");
        if (item === "sair") {
            break;
        }
    let categoria = prompt("Preencha com a categoria para este item (por exemplo, hortifruti, frutas, verduras, açougue, congelados, bebidas etc.: ");
        switch (categoria) {
            case "hortifruti":
            case "frutas":
            case "fruta":
            case "verduras":
            case "verdura":
            case "legumes":
            case "legume":
                hortifruti.push(item);
                break;
            case "açougue":
            case "acougue":
                acougue.push(item);
                break;
            case "bebidas":
            case "bebida":
                bebidas.push(item);
                break;
            case "congelados":
            case "congelado":
                congelados.push(item);
                break;
            case "laticinios":
            case "laticinio":
            case "laticínio":
                laticinios.push(item);
                break;
            case "limpeza":
                limpeza.push(item);
                break
            case "paes":
            case "pães":
            case "pão":
            case "pao":
            case "padaria":
            case "frios":
                padaria.push(item);
                break;
            case "doces":
            case "doces":
            case "confeitaria":
                padaria.push(item);
                break;
            case "cesta básica":
            case "cesta basica":
            case "farinhas":
            case "farinaceos":
            case "farinaceo":
                cestaBasica.push(item);
                break;
            case "graos":
            case "grao":
            case "grãos":
            case "grão":
                graos.push(item);
                break;
            default:
        alert("Categoria não reconhecida, por favor tente novamente.");
        continue;
        }
    }

    // Junção das categorias e itens para serem exibidos de forma agradável
    // atenção: no alerta, a quantidade de itens e categorias pode não ser exibido em sua totalidade. Sugere-se exibição em console.log ou página HMTL.

    // Criação da lista de compras
    // Exemplo: lista Hortifruti. 
    // \n -> pula linha;
    // let i = 0 -> i é o contador, iniciado em 0;
    // i < hortifruti.length -> sempre que o contador for maior que o número de itens da categoria;
    // i++ -> mais um número é adicionado ao contador;

    let lista = "Hortifruti:\n";
    for (let i = 0; i < hortifruti.length; i++) {
    lista += `- ${hortifruti[i]}\n`;   // Avalia o valor do item de acordo com o contador e o adiciona ao final da lista de acordo com a categoria.
    }

    lista += "\nBebidas:\n";
    for (let i = 0; i < bebidas.length; i++) {
    lista += `- ${bebidas[i]}\n`;
    }

    lista += "\nCongelados:\n";
    for (let i = 0; i < congelados.length; i++) {
    lista += `- ${congelados[i]}\n`;
    }

    lista += "\nAçougue:\n";
    for (let i = 0; i < acougue.length; i++) {
    lista += `- ${acougue[i]}\n`;
    }

    lista += "\nLaticínios:\n";
    for (let i = 0; i < laticinios.length; i++) {
    lista += `- ${laticinios[i]}\n`;
    }

    lista += "\nLimpeza:\n";
    for (let i = 0; i < limpeza.length; i++) {
    lista += `- ${limpeza[i]}\n`;
    }

    lista += "\nPadaria:\n";
    for (let i = 0; i < padaria.length; i++) {
    lista += `- ${padaria[i]}\n`;
    }

    lista += "\nDoces:\n";
    for (let i = 0; i < doces.length; i++) {
    lista += `- ${doces[i]}\n`;
    }

    lista += "\nCesta Básica:\n";
    for (let i = 0; i < cestaBasica.length; i++) {
    lista += `- ${cestaBasica[i]}\n`;
    }

    lista += "\nGrãos:\n";
    for (let i = 0; i < graos.length; i++) {
    lista += `- ${graos[i]}\n`;
    }

    alert(lista);
    alert("Boas compras!");
}



//STARTING DAY 6
function daySix(){
    let livros = [];
    let filmes = [];
    let jogos = [];

    alert("Vamos fazer uma lista de itens para relaxar hoje!")
    alert("Você pode adicionar os itens de acordo com a categoria e removê-los quando os exercutar.");

    let acao = "adicionar"; // valor default para iniciar pois a lista estará vazia.

    while(acao == "adicionar") {  //
    let categoria = prompt(`Gostaria de adicionar um item em qual categoria?\n- Livros : ${livros}\n- Filmes : ${filmes}\n- Jogos : ${jogos}`);

        categoria = categoria.toLowerCase();

        // Caso a categoria informada não exista
        if(categoria !== "livros" && categoria !== "filmes" && categoria !== "jogos") {
        alert("Categoria inválida, por favor escolha entre livros, filmes ou jogos")
        continue;
        }

    if(categoria == "livros") {
        let item = prompt("Digite o nome do item a ser adicionado:");
        if (item) {
        livros.push(item);
        alert("Item adicionado com Sucesso")
        break;
        }
    }
        if(categoria == "filmes") {
        let item = prompt("Digite o nome do item a ser adicionado:");
            if (item) {
            filmes.push(item);
            alert("Item adicionado com Sucesso")
            break;
        }
    }

    if(categoria == "jogos") {
        let item = prompt("Digite o nome do item a ser adicionado:");
        if (item) {
        jogos.push(item);
        alert("Item adicionado com Sucesso")
        break;
        }
    }
    }

    // Primeira adição finalizada. A partir de agora o prompt vai oferecer adição ou exclusão de itens das categorias.

    while(acao == "adicionar") {
    let acao = prompt("Gostaria de adicionar ou remover um item das listas?")
    if(acao == "adicionar") {
        let categoria = prompt(`Gostaria de adicionar um item em qual categoria?\n- Livros : ${livros}\n- Filmes : ${filmes}\n- Jogos : ${jogos}`);

        categoria = categoria.toLowerCase();

        // Caso a categoria informada não exista
        if(categoria !== "livros" && categoria !== "filmes" && categoria !== "jogos") {
            alert("Categoria inválida, por favor escolha entre livros, filmes ou jogos.")
            continue;
        }

        else if(categoria == "livros") {
        let item = prompt("Digite o nome do item a ser adicionado:");
            if (item) {
            livros.push(item);
            alert("Item adicionado com Sucesso.")
        }
        }

        else if(categoria == "filmes") {
            let item = prompt("Digite o nome do item a ser adicionado:");
            if (item) {
            filmes.push(item);
            alert("Item adicionado com Sucesso.")
            }
        }
        
        else if(categoria == "jogos") {
        let item = prompt("Digite o nome do item a ser adicionado:");
            if (item) {
            jogos.push(item);
            alert("Item adicionado com Sucesso.")
        }
        }
    }
        // Caso a opção escolhida seja a de remover um item
        else if (acao == "remover") {
        let remover = prompt(`Qual item gostaria de remover?\n- Livros : ${livros}\n- Filmes : ${filmes}\n- Jogos : ${jogos}`);

        let itemEncontrado = false;

        if (livros.indexOf(remover) != -1){
            itemEncontrado = true;
            livros.splice(livros.indexOf(remover), 1)
            alert(`O item ${remover} foi removido com sucesso!`);
        }      
        if (filmes.indexOf(remover) != -1){
            itemEncontrado = true;
            filmes.splice(filmes.indexOf(remover), 1)
            alert(`O item ${remover} foi removido com sucesso!`);
        }
        if (jogos.indexOf(remover) != -1){
            itemEncontrado = true;
            jogos.splice(jogos.indexOf(remover), 1)
            alert(`O item ${remover} foi removido com sucesso!`)
        }
        if (!itemEncontrado) {
            alert("O item não foi encontrado.")
        }
        }
        // Para apresentar antes de finalizar o programinha, exibindo a lista
    else {
        alert(`Livros: ${livros}\nFilmes: ${filmes}\nJogos: ${jogos}\nD I V I R T A - S E! ♥`)
        break;
        }
    }
} 



// STARTING DAY 7   
// Criação de calculadora:
function daySeven() {
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
}



// HIDDEN CONTENT
function playSound (audioSelector) {
    const element = document.querySelector(audioSelector);
    
    if (element && element.localName === 'audio') {
         element.play();
    }
    else {
        alert('Elemento não encontrado ou seletor inválido'); //ou alert
    }
} 
const listOfKeys = document.querySelectorAll('.key'); 

let contador = 0

for (let contator = 0; contador < listOfKeys.length; contador++) {
    const key = listOfKeys[contador];
    const instrument = key.classList[1];
    const idAudio = `#sound_${instrument}`; 

    key.onclick = function() {
        playSound(idAudio);
    }

    key.onkeydown = function (event) { // condição para pressionar keys específicas. 
        // console.log(event.code);
        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('active');
        }
    }

    key.onkeyup = function () { // condição para deixar de pressionar as keys específicas. 
        key.classList.remove('active');
    }
}