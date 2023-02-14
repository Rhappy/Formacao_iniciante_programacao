// Lista de compras
// Criação das categorias de compras 
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

alert("Lista exibida no log da página!")
console.log(lista);
alert("Boas compras!");









// Forma de adicionar itens à listas juntamente com a criação de listas.

// let categorias = {};

// while (true) {
//   let item = prompt("Preencha com o item que gostaria de adicionar ou escreva 'sair' para finalizar a lista: ");
//   if (item === "sair") {
//     break;
//   }
  
//   let categoria = prompt("Escreva a categoria deste item (ou crie uma categoria nova digitando-a): ");
  
//   if (!categorias[categoria]) {
//     categorias[categoria] = [];
//   }
  
//   categorias[categoria].push(item);
// }

// let lista = "";
// for (let categoria in categorias) {
//   lista += `\n${categoria}:\n`;
//   for (let i = 0; i < categorias[categoria].length; i++) {
//     lista += `- ${categorias[categoria][i]}\n`;
//   }
// }

// alert("Lista exibida no log da página!")
// console.log(lista);
