//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// 1. Array para armazenar os amigos
let amigos = [];

// 2. Função para adicionar amigos
function adicionarAmigo() {
  let inputNome = document.getElementById("amigo");  // Pega o campo de entrada
  let nome = inputNome.value.trim();  // Pega o valor inserido, removendo espaços extras

  // 3. Se o campo estiver vazio, exibe um alerta
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;  // Interrompe a função
  }

  // 4. Adiciona o nome ao array
  amigos.push(nome);  
  inputNome.value = "";  // Limpa o campo de entrada
  atualizarLista();  // Chama a função para atualizar a lista de amigos na tela
}

// 5. Função para atualizar a lista de amigos na página
function atualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");  // Seleciona a lista no HTML
  listaAmigos.innerHTML = "";  // Limpa a lista para evitar duplicação

  // 6. Cria um item <li> para cada amigo no array
  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");  // Cria um item <li>
    item.textContent = amigos[i];  // Define o nome como conteúdo do item
    listaAmigos.appendChild(item);  // Adiciona o item à lista
  }
}

// 7. Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  if (amigos.length === 0) {  // Verifica se a lista está vazia
    alert("A lista está vazia. Adicione pelo menos um nome.");
    return;  // Interrompe a função se não houver amigos
  }

  // 8. Sorteia um índice aleatório e acessa o nome do amigo
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);  
  const amigoSorteado = amigos[indiceAleatorio];  

  // 9. Exibe o nome do amigo sorteado na página
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>!`;
}

  
  
  
  



