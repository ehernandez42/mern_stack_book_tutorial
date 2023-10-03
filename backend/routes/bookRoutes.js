import {Book} from "../models/bookModel.js";
import express from "express";

const routes = express.Router();

routes.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Send all required bodies of text",
            });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        }
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log(error)
        response.status(500).send({ message: error.message })
    }
})
//finding all books
routes.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json(books)
    } catch (e) {
        console.log(e.message);
        return response.status(404).send({message: "error"})
    }
})
//finding a specific book by id that's created through the HTTP
routes.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const books = await Book.findById(id);
        response.status(200).json(books);

    } catch (e) {
        console.log(e.message);
        response.status(500).send({ message: e.message })
    }
})
//updating a book
routes.put('/:id', async(request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Send all required bodies of text",
            });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({message: 'Book not found'})
        }
        return response.status(200).send({message: 'Book updated successfully'});
    } catch (e) {
        console.log(e.message);
        response.status(500).send({ message: e.message })
    }
})
//deleting a book
routes.delete('/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id)

        if (!result) {
            return response.status(404).json({ message: 'Book was not found' });
        }

        return response.status(200).send({ message: "Book deleted successfully"})

    } catch (e) {
        console.log(e.message);
        response.status(500).send({message: e.message})
    }
})

export default routes;