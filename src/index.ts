import express from "express";
import "dotenv/config";
import fs from "fs";
import path from "path";

//create tokenMap if it doesn't exist

const dirPath = path.join(__dirname, "../data");
const dataPath = path.join(__dirname, "../data/tokenMap.json");

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]");
}

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
