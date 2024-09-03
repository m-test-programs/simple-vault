import express from "express";
import "dotenv/config";
import fs from "fs"
import path from "path"



//create tokenMap if it doesn't exist

fs.readFile(path.join(__dirname, "../data/tokenMap.json"), (err, _)=>{
  if(err){
    fs.writeFile(path.join(__dirname, "../data/tokenMap.json"), "[]", (err)=>{
      if(err){
        console.log(err)
      }
    })
  }
})



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
