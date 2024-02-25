import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("get");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log("submit post");
  res.send('<h1>FORM SUBMITTED</h1>')
  // res.sendFile(__dirname + "/public/index.html");
});
// app.post("/", (req, res) => {
//   console.log("post");
//   res.send(`<h1>Form submitted with ${req.body} values</h1>`)
//   // console.log(req.body);
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
