const Book = require('../model/Book');

//stopped here! Good job making it through the backend!
//https://www.youtube.com/watch?v=5Y5QKfxTErU&t=2658s
const getAllBooks = async (req, res, next) => {
    //provides the route for all the books shown
    let books;
    try {
        books = await Book.find();
    } catch(err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({message: "no products founds"});
    }

    return res.status(200).json({ books });
}

const addBook = async (req, res, next) => {
   const { name, author, description, price, available, image} = req.body;
    let book;

    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });

        await book.save();
    } catch (e) {
       console.log(e);
    }

    if (!book) {
        return res.status(500).json({message: 'Unable to add'});
    }

    return res.status(200).json({ book })
}

const getById = async (req, res, next) => {
    let book;
    const id = req.params.id;
    try{
        book = await Book.findById(id);
    } catch (e) {
        console.log(e);
    }
    if (!book) {
        return res.status(404).json({ message: "No book found" });
    }

    return res.status(200).json({ book });
}

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save();
    } catch (e) {
        console.log(e);
    }
    if (!book) {
        return res.status(404).json({message: "Unable to update by this ID"});
    }
    return res.status(200).json({ book });
}

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findOneAndRemove(id);
    } catch (e) {
        console.log(e);
    }

    if (!book) {
        return res.status(404).json({message: "unable to delete by this id"});
    } else {
        return res.status(200).json({ message: "Book successfully deleted" });
    }
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;