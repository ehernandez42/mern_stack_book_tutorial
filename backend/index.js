//backend for book store app
const express = require('express');
const mongoose = require('mongoose');


//mongodb+srv://admin:vuEY6qjU2kdTMmaa@cluster0.cbyw4mp.mongodb.net/?retryWrites=true&w=majority

const app = express();

app.use('/', (req, res, next) => {
    res.send("connected bruh lol");
})

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
