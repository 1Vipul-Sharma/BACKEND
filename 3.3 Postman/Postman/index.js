// import express from "express";
// const app = express();
// const port = 3000;

// // *********************
// // Let’s practice using Postman. Make sure your server is running with nodemon.
// // Then test the 5 different routes below with Postman. Open a separate tab for each request.
// // Check that for each route you’re getting the correct status code returned to you from your server.
// // You should not get any 404s or 500 status codes.
// // *********************

// app.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1>");
// });

// app.post("/register", (req, res) => {
//   //Do something with the data
//   console.log("req",req);
//   res.sendStatus(201);
// });

// app.put("/user/angela", (req, res) => {
//   res.sendStatus(200);
// });

// app.patch("/user/angela", (req, res) => {
//   res.sendStatus(200);
// });

// app.delete("/user/angela", (req, res) => {
//   //Deleting
//   res.sendStatus(200);
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });





let express = require('express');
let app = express();

// For POST-Support
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/doSum', upload.array(), (request, response) => {
    let a = request.body.a;
    let b = request.body.b;

    let c = parseInt(a) + parseInt(b);
    response.send('Result : '+c);
    console.log('Result : '+c);
});

app.listen(3000);