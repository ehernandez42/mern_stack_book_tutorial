const Book = require('../model/Book');


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
   const { name, author, description, price, available} = req.body;
    let book;

    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available
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

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;