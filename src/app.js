const express = require("express");
const app = express();

app.set("Port", 8000);

app.use(express.json());

app.use("/calculadora", require("./routers/calculadora"));
app.use("/listado", require("./routers/listado"));
app.use("/text", require("./routers/interpolandoStrings"));
module.exports = app;
