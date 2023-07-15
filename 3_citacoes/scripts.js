const quoteBtn = document.querySelector("#quoteBtn");
const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");

// Função para obter as citações a partir do arquivo JSON
async function getQuotes() {
  try {
    const response = await fetch('quotes.json');
    const quotes = await response.json();

    quoteBtn.addEventListener("click", () => {
      const index = Math.floor(Math.random() * quotes.length);
      quoteText.textContent = quotes[index].quote;
      quoteAuthor.textContent = quotes[index].author;
    });
  } catch (error) {
    console.error('Erro ao carregar as citações:', error);
  }
}

// Chama a função para carregar as citações quando a página for carregada
getQuotes();
