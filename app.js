const express = require("express");
const expressHandlebars = require("express-handlebars");
const hdb = require("handlebars")
const path = require("path");
const homeRoute = require("./routes/home");

const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.use("/static", express.static(path.join(__dirname, "static")));

app.use("/", homeRoute);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Running at http://localhost:${port}!`));
}

module.exports = app;
