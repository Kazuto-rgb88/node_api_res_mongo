const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { config } = require("dotenv");
config();

// Importar rutas
const bookRoutes = require("./routes/book.routes");

// Conectar a MongoDB
// Usamos express para crear el servidor y body-parser
const app = express();
app.use(bodyParser.json()); // Parseador de bodies

// acá se conecta a la base de datos
mongoose.connect(process.env.MONGODB_URL, {
  dbName: process.env.MONGO_DB_NAME,
});
const db = mongoose.connection;

app.use("/books", bookRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`servidor iniciando en el puerto ${port}`);
});
