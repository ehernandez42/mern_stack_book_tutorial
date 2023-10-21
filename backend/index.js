//backend for book store app
const express = require('express');
const mongoose = require('mongoose');
const router = require("../backend/routes/book-route");


//mongodb+srv://admin:vuEY6qjU2kdTMmaa@cluster0.cbyw4mp.mongodb.net/?retryWrites=true&w=majority

const app = express();

app.use(express.json());
app.use('/books',router);



mongoose
    .connect("mongodb+srv://admin:vuEY6qjU2kdTMmaa@cluster0.cbyw4mp.mongodb.net/?retryWrites=true&w=majority"
)
    .then (() => console.log("Connected to DB"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err)=> console.log(err));





//database password:
//vuEY6qjU2kdTMmaa
