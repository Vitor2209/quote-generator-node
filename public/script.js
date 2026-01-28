const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("btn");

async function loadQuote() {
  quoteText.textContent = "Loading...";
  authorText.textContent = "";

  try {
    const response = await fetch("/api/quote");
    const data = await response.json();

    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `— ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Failed to load quote. Please try again.";
  }
}

button.addEventListener("click", loadQuote);
loadQuote();

