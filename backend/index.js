import express, {response} from "express";
import { PORT, uri } from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from 'cors';


const app = express();
app.use(express.json());
//default use of cors
app.use(cors());

//custom use of cors
/*app.use(cors(
    {
        origin: 'http://localhost:5555/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['content-type'],
    }
));
*/

app.get('/', (request, response) => {
    try {
        return response.status(234).send('Welcome to the mern stack tutorial');
    } catch (e) {
        console.log(e.message);
    }
});

app.post("/bebe", async (req, res) => {
    let {name} = req.body;
    console.log(name);
})

app.get("/bebe", async(req, res) =>{
    res.send("hello bebe");
})

app.use('/books', bookRoutes)

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