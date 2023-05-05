import express, { Application } from "express";
const expressHandlebars = require("express-handlebars");
import path from "path";
import homeRoute from "./routes/home";

const app: Application = express();
const port: number | string = process.env.PORT || 3000;

app.engine(
  "handlebars",
  expressHandlebars({
    helpers: {
      gt: function (a: number, b: number, options: any) {
        if (a > b) {
          return options.fn(this);
        }
        return options.inverse(this);
      },
    },
  })
);

app.set("view engine", "handlebars");

app.use("/static", express.static(path.join(__dirname, "static")));

app.use("/", homeRoute);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Running at http://localhost:${port}!`));
}

export { app };
