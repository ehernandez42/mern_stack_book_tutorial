import express from "express";
import { PORT, uri } from "./config.js";
import mongoose, {get} from "mongoose";
import {Book} from '/models/bookModels.js';
import cors from 'cors';


const app = express();
app.use(express.json());
//default use of cors
app.use(cors());

app.get('/', (request, response) => {
    try {
        return response.status(234).send('Welcome to the mern stack tutorial');
    } catch (e) {
        console.log(e.message);
    }
});

app.get('/', async (req, res)  => {
    try {
        return res.data;
    } catch (e) {
        console.log(e);
    }
})

app.get("/books", async (req, res) => {
    const books = await Book.find({})
    return res.status(200).json(books);
})


mongoose
    .connect(uri)
    .then(() => {
        console.log("app is connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })