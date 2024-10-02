// Seleciona o botão de busca e o campo de entrada de texto
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

// Seleciona todos os itens de jogos
const gameItems = document.querySelectorAll('.game-item');

// Adiciona um evento ao botão de pesquisa
searchButton.addEventListener('click', () => {
    // Pega o valor digitado pelo usuário
    const query = searchInput.value.toLowerCase();

    // Verifica se o campo de pesquisa não está vazio
    if (query) {
        // Itera sobre todos os jogos
        gameItems.forEach(item => {
            // Pega o nome do jogo (o título que está no h3)
            const gameTitle = item.querySelector('h3').textContent.toLowerCase();

            // Verifica se o título do jogo contém a busca
            if (gameTitle.includes(query)) {
                // Se sim, mostra o jogo
                item.style.display = 'block';
            } else {
                // Se não, esconde o jogo
                item.style.display = 'none';
            }
        });
    } else {
        // Se o campo de pesquisa estiver vazio, mostra todos os jogos
        gameItems.forEach(item => {
            item.style.display = 'block';
        });
    }
});

// Função de pesquisa
const executeSearch = () => {
    const query = searchInput.value.toLowerCase();
    const gameItems = document.querySelectorAll('.game-item');
    let gameFound = false;

    gameItems.forEach(item => {
        const gameName = item.querySelector('h3').textContent.toLowerCase();
        if (gameName.includes(query)) {
            item.style.display = 'block'; // Mostra o jogo que corresponde à pesquisa
            gameFound = true;
        } else {
            item.style.display = 'none'; // Oculta os outros jogos
        }
    });

    if (!gameFound) {
        alert('Nenhum jogo encontrado.');
    }
};

// Acionar a pesquisa ao clicar no botão "Pesquisar"
searchButton.addEventListener('click', () => {
    executeSearch();
});

// Acionar a pesquisa ao pressionar "Enter"
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        executeSearch();
    }
});

const refreshButton = document.querySelector('#refresh-button');

refreshButton.addEventListener('click', () => {
    location.reload(); // Recarrega a página
});