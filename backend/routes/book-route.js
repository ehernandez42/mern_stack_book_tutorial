const express = require('express');
const router = express.Router();
const Book = require("../model/Book")



router.get('/', async (req, res, next) => {
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

    return res.status(200).json({books});
})


module.exports = router;