async function getRandomQuote() {
  const response = await fetch("https://zenquotes.io/api/random");

  if (!response.ok) {
    throw new Error("Failed to fetch quote");
  }

  const data = await response.json();

  return {
    content: data[0].q,
    author: data[0].a
  };
}

module.exports = { getRandomQuote };
