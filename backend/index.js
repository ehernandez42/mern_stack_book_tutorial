//backend for book store app
const express = require('express');
const mongoose = require('mongoose');
const router = require("../backend/routes/book-route");
const cors = require('cors');
const db_url = require('dotenv')

db_url.config()

const app = express();

app.use(express.json());
app.use(cors());
app.use('/books',router);



mongoose
    .connect(process.env.MONGODB_URL)
    .then (() => console.log("Connected to DB"))
    .then(() => {
        app.listen(5001);
    })
    .catch((err)=> console.log(err));

