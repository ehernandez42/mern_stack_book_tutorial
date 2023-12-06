import React from 'react';
import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


const Book = (props) => {
    const history = useNavigate();
    const {_id, name, author, description, price, image} = props.book;
   //tutorial - figuring out the delete button and the update button are the last ones I think??
    //SSL protocol error. Might need to do the whole thing where you make localhost have a SSL cert

    //problem is that 1. it doesn't automatically refresh to the books after deleting
    const deleteHandler = async() => {
        await axios
            .delete(`http://localhost:5001/books/${_id}`)
            .then((res) => res.data)
            .then(() => history("/"))
            .then(() => history("/books"));
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