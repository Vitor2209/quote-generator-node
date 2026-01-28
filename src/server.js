const express = require("express");
const path = require("path");

const quoteRoutes = require("./routes/quote.routes");

const app = express();

// arquivos estáticos
app.use(express.static(path.join(__dirname, "../public")));

// rotas da API
app.use("/api", quoteRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
