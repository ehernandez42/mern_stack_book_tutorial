import React from 'react';
import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import './Book.css'


//add a functionality that has a box pop out and ask if you are sure you want to delete?
const Book = (props) => {
    const history = useNavigate();
    const {_id, name, author, description, price, image} = props.book;
    const deleteHandler = async() => {
        await axios
            .delete(`http://localhost:5001/books/${_id}`)
            .then((res) => res.data)
            .then(() => history("/"))
            .then(() => history("/books"))
            .then(window.location.reload())
    }
    return(
        <div className={'card'}>
            <img src={image} alt={name} width={250} />
            <article>By: {author}</article>
            <h3>{name}</h3>
            <p>Description: {description}</p>
            <h2>${price}</h2>
            <Button LinkComponent={Link} to={`/books/${_id}`}>
                Update
            </Button>
            <Button color={"error"} onClick={deleteHandler}>
                Delete
            </Button>
        </div>
        )
}


export default Book;