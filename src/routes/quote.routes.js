const express = require("express");
const { getRandomQuote } = require("../services/quote.service");

const router = express.Router();

router.get("/quote", async (req, res) => {
  try {
    const quote = await getRandomQuote();
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: "Failed to load quote" });
  }
});

module.exports = router;

