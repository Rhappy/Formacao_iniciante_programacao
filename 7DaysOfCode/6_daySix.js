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