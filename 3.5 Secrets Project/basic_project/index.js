//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var isValiduser=false

app.use(bodyParser.urlencoded({ extended: true }));

function getpassword(req, res, next) {
  console.log(req.body);
  let password=req.body.password;
  if(password=="vipul") isValiduser=true
  next();
}

// app.use(getpassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/check", (req, res) => {
    console.log(req.body);
    if(req.body.password=="1234"){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
});
  

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
