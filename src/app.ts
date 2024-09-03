import express from "express";
import "dotenv/config";

const app = express();

const port = 3000;

const tokenRoute = require("./routes/tokenize");
const loginRoute = require("./routes/login");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(tokenRoute);
app.use(loginRoute);

app.listen(port, () => {
  console.log("App starting");
});
