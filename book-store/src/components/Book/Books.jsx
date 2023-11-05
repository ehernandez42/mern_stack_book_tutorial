import React, {useEffect, useState} from 'react';
import axios from "axios";
import Book from './Book.jsx';
import './Book.css';


const URL = "http://localhost:5001/books";

//stopped here - 1:32:40
//trying to fix the stupid maps function(so annoying)
//https://www.youtube.com/watch?v=5Y5QKfxTErU&t=4605s
const fetchHandler = async() => {
    return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchHandler().then((data)=>setBooks(data.books))
    }, [] );
    console.log(books);
    return(
        <div>
            <ul>
                {books &&
                    books.map((book, i) => (
                    <div className="book" key={i}>
                    <Book book={book} />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Books;