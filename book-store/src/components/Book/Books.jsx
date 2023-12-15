import React, {useEffect, useState} from 'react';
import axios from "axios";
import Book from './Book.jsx';
import './Book.css';
import {Typography} from '@mui/material'

const URL = "http://localhost:5001/books";

const fetchHandler = async() => {
    return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchHandler().then((data)=>setBooks(data.books))
    }, []);

    //trying to make this component respond to if there are books or not
    const isItEmpty = () => {
        if (books.length === 0) {
            return (
                <div className="emptyTag">
                    <Typography variant="h5">
                        No books added yet..
                    </Typography>
                </div>
            )
        }
    }
    return(
        <div>
            {isItEmpty()}
            <ul className="bookItem">
                {books &&
                    books.map((book, i) => (
                    <li className="book" key={i}>
                    <Book book={book} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Books;