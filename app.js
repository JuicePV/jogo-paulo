let amigos = []; // Array para armazenar os nomes dos amigos
let sorteados = []; // Array para armazenar os nomes já sorteados

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const nome = amigoInput.value.trim();

    // Verificar se o nome não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Verificar se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    // Adicionar o nome ao array de amigos
    amigos.push(nome);
    amigoInput.value = ""; // Limpar o campo de entrada
    atualizarLista(); // Atualizar a lista de amigos na página
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpar a lista atual

    // Adicionar cada amigo na lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verificar se ainda há amigos para sortear
    if (amigos.length === 0) {
        alert("Adicione amigos à lista primeiro.");
        return;
    }

    // Verificar se todos já foram sorteados
    if (sorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados.");
        document.getElementById("btnLimpar").style.display = "block"; // Exibir botão de limpar
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
    } while (sorteados.includes(amigos[indiceAleatorio])); // Garantir que o nome não foi sorteado ainda

    const nomeSorteado = amigos[indiceAleatorio];
    sorteados.push(nomeSorteado); // Adicionar ao array de sorteados

    // Exibir o resultado na tela
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
}

// Função para limpar a lista
function limparLista() {
    amigos = [];
    sorteados = [];
    document.getElementById("resultado").innerHTML = ""; // Limpar resultado do sorteio
    document.getElementById("btnLimpar").style.display = "none"; // Ocultar botão de limpar
    atualizarLista(); // Atualizar a lista
}


